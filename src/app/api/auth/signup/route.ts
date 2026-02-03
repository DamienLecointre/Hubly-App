import { NextRequest, NextResponse } from "next/server";
import ConnectToDB from "@/lib/mongodb/mongodb";
import User from "@/models/User";
import jwt from "jsonwebtoken";

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

    const token = jwt.sign(
      { userId: newUser._id },
      process.env.JWT_SECRET as string,
      { expiresIn: "7d" },
    );

    const response = NextResponse.json(
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

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
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
