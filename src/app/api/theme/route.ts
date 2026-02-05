import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

export async function POST(req: Request) {
  const { theme } = await req.json();

  if (!["light", "dark"].includes(theme)) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  const cookieStore = await cookies();

  cookieStore.set("theme", theme, {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });

  return NextResponse.json({ success: true });
}
