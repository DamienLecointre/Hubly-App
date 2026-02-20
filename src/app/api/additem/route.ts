import ConnectToDB from "@/lib/mongodb/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { getUserIdFromRequest } from "@/lib/auth";
import Item from "@/models/Item";
import { v2 as cloudinary } from "cloudinary";
import { fileTypeFromBuffer } from "file-type";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const MAX_IMAGES = 5;
const MAX_FILE_SIZE = 2 * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

export async function POST(req: NextRequest) {
  let uploadedImages: { url: string; public_id: string }[] = [];

  try {
    await ConnectToDB();

    const userId = getUserIdFromRequest(req);

    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "UNAUTHORIZED",
            message: "Non autorisé : session invalide ou expirée",
          },
          data: null,
        },
        { status: 401 },
      );
    }

    const formData = await req.formData();

    const title = formData.get("title") as string;
    const author_artiste = formData.get("author_artiste") as string;
    const collection_id = formData.get("collection_id") as string;
    const status = formData.get("status") as string;
    const tome = formData.get("tome") as string;
    const genre = formData.get("genre") as string;
    const note = formData.get("note") as string;

    if (!title || !author_artiste || !collection_id || !status) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "MISSING_FIELDS",
            message: "Données manquantes",
          },
          data: null,
        },
        { status: 400 },
      );
    }

    const isExistingItem = await Item.findOne({
      title,
      added_by: userId,
      collection_id,
    });

    if (isExistingItem) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "ITEM_ALREADY_EXIST",
            message: "Ce produit existe déjà",
          },
          data: null,
        },
        { status: 409 },
      );
    }

    const files = formData.getAll("images") as File[];

    if (files.length > MAX_IMAGES) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "TOO_MANY_IMAGES",
            message: `Maximum ${MAX_IMAGES} images autorisées`,
          },
          data: null,
        },
        { status: 400 },
      );
    }

    // Validation sécurité fichiers
    for (const file of files) {
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          {
            success: false,
            error: {
              code: "FILE_TOO_LARGE",
              message: "Image trop lourde (max 2MB)",
            },
            data: null,
          },
          { status: 400 },
        );
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const detectedType = await fileTypeFromBuffer(buffer);

      if (!detectedType || !ALLOWED_TYPES.includes(detectedType.mime)) {
        return NextResponse.json(
          {
            success: false,
            error: {
              code: "INVALID_FILE_TYPE",
              message: "Format d'image non autorisé",
            },
            data: null,
          },
          { status: 400 },
        );
      }
    }

    // Upload optimisé Cloudinary
    uploadedImages = await Promise.all(
      files.map(async (file) => {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const result = await new Promise<any>((resolve, reject) => {
          cloudinary.uploader
            .upload_stream(
              {
                folder: "items",
                resource_type: "image",
                transformation: [
                  { width: 1200, height: 1200, crop: "limit" },
                  { quality: "auto" },
                  { fetch_format: "auto" },
                ],
              },
              (error, result) => {
                if (error) reject(error);
                else resolve(result);
              },
            )
            .end(buffer);
        });

        return {
          url: result.secure_url,
          public_id: result.public_id,
        };
      }),
    );

    const newItem = new Item({
      visuals: uploadedImages,
      title,
      author_artiste,
      added_by: userId,
      collection_id,
      status,
      tome,
      genre,
      note,
    });

    await newItem.save();

    return NextResponse.json(
      {
        success: true,
        error: null,
        data: newItem,
      },
      { status: 201 },
    );
  } catch (err) {
    console.error(err);

    // Rollback Cloudinary si erreur
    if (uploadedImages.length > 0) {
      await Promise.all(
        uploadedImages.map((img) => cloudinary.uploader.destroy(img.public_id)),
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: {
          code: "SERVER_ERROR",
          message: "Erreur serveur",
        },
        data: null,
      },
      { status: 500 },
    );
  }
}
