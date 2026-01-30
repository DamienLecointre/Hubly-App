import { NextRequest, NextResponse } from "next/server";
import ConnectToDB from "@/lib/mongodb/mongodb";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  try {
    await ConnectToDB();

    const { username, email, password } = await req.json();

    if (!username || !email || !password) {
      return NextResponse.json(
        {
          success: false,
          data: null,
          error: {
            code: "MISSING_FIELDS",
            message: "Tous les champs sont obligatoires",
          },
        },
        { status: 400 },
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          data: null,
          error: {
            code: "EMAIL_ALREADY_USED",
            message: "Un compte existe déjà avec cet email",
          },
        },
        { status: 400 },
      );
    }

    const newUser = new User({ username, email, password });
    await newUser.save();

    return NextResponse.json(
      {
        success: true,
        data: {
          userId: newUser._id,
          username: newUser.username,
          email: newUser.email,
        },
        error: null,
      },
      { status: 201 },
    );
  } catch (err) {
    console.error("Erreur signup API :", err);
    return NextResponse.json(
      {
        success: false,
        data: null,
        error: {
          code: "SERVER_ERROR",
          message: "Erreur serveur",
        },
      },
      { status: 500 },
    );
  }
}
