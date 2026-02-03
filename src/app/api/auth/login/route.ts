import ConnectToDB from "@/lib/mongodb/mongodb";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  try {
    await ConnectToDB();
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: { message: "Champs requis" } },
        { status: 400 },
      );
    }

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return NextResponse.json(
        {
          success: false,
          error: { code: "WRONG_ID", message: "Identifiants incorrects" },
        },
        { status: 401 },
      );
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" },
    );

    const response = NextResponse.json(
      { success: true, error: null, data: { username: user.username } },
      { status: 200 },
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return response;
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        error: { code: "SERVER_ERROR", message: "Erreur serveur" },
      },
      { status: 500 },
    );
  }
}
