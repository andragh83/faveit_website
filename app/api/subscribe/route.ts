import MailerLite from "@mailerlite/mailerlite-nodejs";
import { NextResponse, NextRequest } from "next/server";

const mailerlite = new MailerLite({
  api_key: process.env.MAILERLITE_API_KEY || "",
});

export async function POST(request: NextRequest) {
  const { email, lang } = await request.json();

  const payload = {
    email: email,
    groups: [
      process.env.MAILERLITE_GROUP_ID || "",
      lang && lang === "ro" ? "112108053904491964" : "112108046257227192",
    ],
    status: "unconfirmed" as
      | "unconfirmed"
      | "active"
      | "unsubscribed"
      | "bounced"
      | "junk",
  };

  try {
    const response = await mailerlite.subscribers.createOrUpdate(payload);

    return NextResponse.json({
      message: "You have been subscribed!",
      data: response.data,
    });
  } catch (error: any) {
    if (error.response) {
      return NextResponse.json(error.response.data, {
        status: error.response.status,
      });
    } else {
      return NextResponse.json(
        {
          message: "An error occurred. Please try again.",
        },
        {
          status: 500,
        }
      );
    }
  }
}
