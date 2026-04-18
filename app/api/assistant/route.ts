import OpenAI from "openai";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type AssistantRequest = {
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as AssistantRequest;
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!message) {
      return NextResponse.json(
        { ok: false, error: "Message is required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;
    const model = process.env.OPENAI_MODEL || "gpt-5.4";

    if (!apiKey) {
      return NextResponse.json(
        { ok: false, error: "Missing OPENAI_API_KEY." },
        { status: 500 }
      );
    }

    const client = new OpenAI({ apiKey });

    const response = await client.responses.create({
      model,
      input:
        "You are the BluGrid Systems website assistant. " +
        "Help business owners understand BluGrid's services, qualify their needs, " +
        "and guide them toward a system audit or the contact page. " +
        "Be concise, professional, commercially sharp, and helpful. " +
        "Do not invent case studies, prices, or guarantees.\n\n" +
        `User message: ${message}`,
      max_output_tokens: 400,
    });

    const reply = (response.output_text || "").trim();

    if (!reply) {
      return NextResponse.json(
        { ok: false, error: "No reply returned from OpenAI." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, reply });
  } catch (error) {
    console.error("Assistant route error:", error);

    const message =
      error instanceof Error ? error.message : "Unexpected server error.";

    return NextResponse.json(
      { ok: false, error: message },
      { status: 500 }
    );
  }
}