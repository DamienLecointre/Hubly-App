import ConnectToDB from "@/lib/mongodb/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { getUserIdFromRequest } from "@/lib/auth";
import Item from "@/models/Item";

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

    const {
      visuals,
      title,
      author_artiste,
      collection,
      status,
      tome,
      genre,
      note,
    } = await req.json();

    if (!title || !author_artiste || !collection || !status) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "MISSING_FIELDS",
            message: "Données manquantes",
          },
        },
        { status: 400 },
      );
    }

    const isExistingItem = await Item.findOne({
      title,
      added_by: userId,
      collection,
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

    const newItem = new Item({
      visuals: visuals || [],
      title,
      author_artiste,
      added_by: userId,
      collection,
      status,
      tome,
      genre,
      note,
    });

    await newItem.save();

    const response = NextResponse.json(
      {
        success: true,
        error: null,
        data: newItem,
      },
      { status: 201 },
    );
    return response;
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      {
        succes: false,
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
