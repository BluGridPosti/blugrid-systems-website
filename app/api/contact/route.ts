import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  company: string;
  email: string;
  businessType: string;
  teamSize: string;
  focus: string;
  tools: string;
  problem: string;
  outcome: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!resendApiKey || !to) {
      return NextResponse.json(
        {
          ok: false,
          error: "Server email configuration is missing.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const body = (await request.json()) as Partial<ContactPayload>;

    const payload: ContactPayload = {
      name: clean(body.name),
      company: clean(body.company),
      email: clean(body.email),
      businessType: clean(body.businessType),
      teamSize: clean(body.teamSize),
      focus: clean(body.focus),
      tools: clean(body.tools),
      problem: clean(body.problem),
      outcome: clean(body.outcome),
    };

    const requiredFields: Array<keyof ContactPayload> = [
      "name",
      "company",
      "email",
      "businessType",
      "teamSize",
      "focus",
      "tools",
      "problem",
      "outcome",
    ];

    const missing = requiredFields.filter((field) => !payload[field]);

    if (missing.length > 0) {
      return NextResponse.json(
        {
          ok: false,
          error: `Missing required fields: ${missing.join(", ")}`,
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(payload.email)) {
      return NextResponse.json(
        {
          ok: false,
          error: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    const subject = `New BluGrid system audit intake — ${payload.company}`;
    const from = "BluGrid Website <onboarding@resend.dev>";

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
        <h2>New BluGrid System Audit Intake</h2>
        <p><strong>Name:</strong> ${payload.name}</p>
        <p><strong>Company:</strong> ${payload.company}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Business Type:</strong> ${payload.businessType}</p>
        <p><strong>Team Size:</strong> ${payload.teamSize}</p>
        <p><strong>Primary Focus Area:</strong> ${payload.focus}</p>
        <p><strong>Current Tools / Systems:</strong><br/>${payload.tools.replace(/\n/g, "<br/>")}</p>
        <p><strong>Biggest Operational Problem:</strong><br/>${payload.problem.replace(/\n/g, "<br/>")}</p>
        <p><strong>Desired Outcome:</strong><br/>${payload.outcome.replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    const text = `
New BluGrid System Audit Intake

Name: ${payload.name}
Company: ${payload.company}
Email: ${payload.email}
Business Type: ${payload.businessType}
Team Size: ${payload.teamSize}
Primary Focus Area: ${payload.focus}

Current Tools / Systems:
${payload.tools}

Biggest Operational Problem:
${payload.problem}

Desired Outcome:
${payload.outcome}
    `.trim();

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: payload.email,
      subject,
      html,
      text,
    });

    if (error) {
      return NextResponse.json(
        {
          ok: false,
          error: "Failed to send intake email.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact route error:", error);

    return NextResponse.json(
      {
        ok: false,
        error: "Unexpected server error.",
      },
      { status: 500 }
    );
  }
}