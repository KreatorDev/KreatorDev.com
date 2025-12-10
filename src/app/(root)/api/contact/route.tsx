import { title } from "@/constants/strings";
import ContactEmailTemplate from "@/shared/components/other/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message, recaptcha_token } = data;
    if (!name || !email || !message || !recaptcha_token)
      throw "Invalid data, please try again!";

    if (
      name.trim().length > 300 ||
      message.trim().length > 3000 ||
      (message.length > 14 && !message.includes(" "))
    )
      throw "Invalid message content";

    const captcha = await verifyCaptcha(recaptcha_token);
    if (
      !captcha?.success ||
      captcha.score < 0.5 ||
      captcha.action !== "contact"
    )
      throw "Invalid, please try again!";
    data.recaptcha_token = undefined;

    const { renderToStaticMarkup } = await import("react-dom/server");
    const emailHtml = renderToStaticMarkup(<ContactEmailTemplate {...data} />);
    const res = await resend.emails.send({
      subject: "Thank you for contacting me",
      from: title + "<" + process.env.SENDER_EMAIL + ">",
      to: [email],
      bcc: process.env.FORWARD_EMAIL,
      html: emailHtml,
    });
    return NextResponse.json(res.data);
  } catch (error: any) {
    console.log("# contact error: ", error);
    return NextResponse.json(
      {
        error: typeof error === "string" ? error : error?.message ?? `${error}`,
      },
      { status: 400 }
    );
  }
}

const verifyCaptcha = async (token: string) => {
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY!,
      response: token,
    }),
  });

  return res.json();
};
