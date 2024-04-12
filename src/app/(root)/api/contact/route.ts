import { username } from "@/constants/strings";
import ContactEmailTemplate from "@/shared/components/other/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message, recaptcha_token } = data;
    if (!name || !email || !message || !recaptcha_token)
      return NextResponse.json({ error: "Invalid data, please try again!" });

    const isValidCaptcha = await verifyCaptcha(recaptcha_token);
    if (!isValidCaptcha)
      return NextResponse.json({ error: "Invalid captcha, please try again!" });
    data.recaptcha_token = undefined;

    const res = await resend.emails.send({
      subject: "Thank you for contacting me",
      from: username + "<" + process.env.SENDER_EMAIL + ">",
      to: [email],
      bcc: process.env.FORWARD_EMAIL,
      react: ContactEmailTemplate(data),
    });
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

const verifyCaptcha = async (token: string) => {
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    {
      method: "POST",
    }
  );
  const data = await response.json();
  return data.success;
};
