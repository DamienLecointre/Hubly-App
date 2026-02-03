import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          error: { code: "WRONG_ID", message: "Identifiants incorrects" },
          data: null,
        },
        { status: 401 },
      );
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET!);
    return NextResponse.json(
      { success: true, error: null, data: payload },
      { status: 201 },
    );
  } catch (err) {
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
