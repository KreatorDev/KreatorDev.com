import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const query = request.nextUrl.searchParams;
  const app_id = query.get("app_id");
  if (!app_id) return NextResponse.error();
  const body = await request.formData();
  const params = new URLSearchParams();
  body.forEach((value, key) => {
    if (typeof value === "string") params.append(key, value);
  });
  const redirect = `intent://callback?${params.toString()}#Intent;package=${app_id};scheme=signinwithapple;end`;
  return NextResponse.redirect(redirect, 307);
}
