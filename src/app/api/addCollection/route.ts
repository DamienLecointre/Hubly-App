import { NextRequest, NextResponse } from "next/server";
import { getUserIdFromRequest } from "@/lib/auth";
import ConnectToDB from "@/lib/mongodb/mongodb";
import Collection from "@/models/Collection";

export async function POST(req: NextRequest) {
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

    const { title, type, members, is_public } = await req.json();

    if (!title || !type) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "MISSING_FIELDS",
            message: "Titre et type requis",
          },
          data: null,
        },
        { status: 400 },
      );
    }

    const existingCollection = await Collection.findOne({
      title,
      owner_id: userId,
    });
    if (existingCollection) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "COLLECTION_ALREADY_EXISTS",
            message: "Vous avez déjà une collection avec ce nom",
          },
          data: null,
        },
        { status: 409 },
      );
    }

    const newCollection = new Collection({
      title: title.trim(),
      type,
      owner_id: userId,
      members: members || [],
      is_public: is_public || false,
    });
    await newCollection.save();

    const response = NextResponse.json(
      {
        success: true,
        error: null,
        data: {
          id: newCollection._id,
          title: newCollection.title,
          type: newCollection.type,
          owner_id: userId,
          members: newCollection.members,
          is_public: newCollection.is_public,
        },
      },
      { status: 201 },
    );
    return response;
  } catch (err) {
    console.error(err);
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

export async function GET(req: NextRequest) {
  try {
    await ConnectToDB();

    const userId = getUserIdFromRequest(req);

    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "SERVER_ERROR",
            message: "Erreur serveur",
          },
          data: null,
        },
        { status: 401 },
      );
    }

    const collection = await Collection.find({ owner_id: userId });

    return NextResponse.json(
      {
        success: true,
        error: null,
        data: collection,
      },
      { status: 200 },
    );
  } catch (err) {
    console.error(err);
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
