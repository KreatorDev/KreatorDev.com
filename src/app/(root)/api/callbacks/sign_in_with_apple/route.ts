import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const query = req.nextUrl.searchParams;
    const app_id = query.get("app_id");
    if (!app_id) throw "App ID not found";
    const body = await req.formData();
    const params = new URLSearchParams();
    body.forEach((value, key) => {
      if (typeof value === "string") params.append(key, value);
    });
    const redirect = `intent://callback?${params.toString()}#Intent;package=${app_id};scheme=signinwithapple;end`;
    return NextResponse.redirect(redirect, 307);
  } catch (error) {
    return NextResponse.json({ error }, { status: 401 });
  }
}
