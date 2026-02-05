import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import ConnectToDB from "@/lib/mongodb/mongodb";
import User from "@/models/User";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          error: { code: "UNAUTHORIZED", message: "Identifiants incorrects" },
          data: null,
        },
        { status: 401 },
      );
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: string;
      email: string;
      username: string;
    };

    await ConnectToDB();

    const user = await User.findById(payload.userId).select("username");

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: { code: "USER_NOT_FOUND", message: "Utilisateur introuvable" },
          data: null,
        },
        { status: 401 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        error: null,
        data: { username: user.username },
      },
      { status: 200 },
    );
  } catch (err) {
    console.error("Serveur erreur : ", err);

    return NextResponse.json(
      {
        success: false,
        error: { code: "SERVER_ERROR", message: "Erreur serveur" },
        data: null,
      },
      { status: 401 },
    );
  }
}
