import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

type RSVPPayload = {
  name: string;
  pax: number;
  phone: string;
  attending: "attending" | "regrets" | "";
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as RSVPPayload;
    const { name, pax, phone, attending } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const timestamp = new Date().toLocaleString("en-MY", {
      timeZone: "Asia/Kuala_Lumpur",
      dateStyle: "short",
      timeStyle: "short",
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:E",
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            timestamp,
            name,
            phone,
            pax,
            attending === "attending" ? "Yes" : "Regrets",
          ],
        ],
      },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[RSVP API]", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
