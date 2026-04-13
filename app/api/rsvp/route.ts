import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

type RSVPPayload = {
  name: string;
  attending: "yes" | "no";
  guests: number;
  meal: string;
  notes: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as RSVPPayload;
    const { name, attending, guests, meal, notes } = body;

    if (!name || !attending) {
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
      range: "Sheet1!A:F",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            timestamp,
            name,
            attending === "yes" ? guests : 0,
            attending,
            meal || "N/A",
            notes || "",
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
