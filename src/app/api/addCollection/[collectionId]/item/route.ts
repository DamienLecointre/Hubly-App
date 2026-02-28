import ConnectToDB from "@/lib/mongodb/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { getUserIdFromRequest } from "@/lib/auth";
import Item from "@/models/Item";

export async function GET(
  req: NextRequest,
  { params }: { params: { collectionId: string } },
) {
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

    const collectionId = params.collectionId;

    if (!collectionId) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "MISSING_COLLECTION_ID",
            message: "collectionId manquant",
          },
          data: null,
        },
        { status: 400 },
      );
    }

    // Recherche sécurisée
    const items = await Item.find({
      collection_id: collectionId,
      added_by: userId,
    }).sort({ title: 1 });

    return NextResponse.json(
      {
        success: true,
        error: null,
        data: items,
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
