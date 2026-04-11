import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import type { QuoteFormData } from "@/lib/constants";

// TODO: Switch back to "tachopaintingllc@gmail.com" before going live
const BUSINESS_EMAIL = "marcellomak@gmail.com";
const BUSINESS_PHONE = "(919) 931-0841";
const SITE_URL = "tachopaintingllc.com";

function formatTimestamp(): string {
  return new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "full",
    timeStyle: "short",
  });
}

function firstName(fullName: string): string {
  return fullName.trim().split(" ")[0] ?? fullName;
}

function buildBusinessEmail(data: QuoteFormData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: Inter, Arial, sans-serif; color: #1a1a2e; background: #f9f9f9; margin: 0; padding: 0; }
    .wrapper { max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; }
    .header { background: #2B5A8A; padding: 28px 36px; }
    .header h1 { color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; }
    .header p { color: rgba(255,255,255,0.75); margin: 6px 0 0; font-size: 13px; }
    .body { padding: 32px 36px; }
    .section-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #2B5A8A; margin: 28px 0 12px; padding-bottom: 6px; border-bottom: 2px solid #DCDCDC; }
    .field { margin-bottom: 14px; }
    .field-label { font-size: 12px; color: #6b7280; margin-bottom: 3px; }
    .field-value { font-size: 15px; font-weight: 500; color: #1a1a2e; }
    .highlight-budget { font-size: 17px; font-weight: 700; color: #2B5A8A; }
    .highlight-location { font-size: 15px; font-weight: 700; color: #1a1a2e; }
    .contact-row { display: flex; gap: 24px; flex-wrap: wrap; background: #f0f4f8; border-radius: 8px; padding: 16px; margin-top: 8px; }
    .contact-item { flex: 1; min-width: 140px; }
    .contact-item .label { font-size: 11px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.08em; }
    .contact-item .value { font-size: 15px; font-weight: 600; color: #1a1a2e; }
    .description-box { background: #f9f9f9; border-left: 4px solid #2B5A8A; border-radius: 4px; padding: 14px 16px; font-size: 14px; line-height: 1.6; color: #374151; white-space: pre-wrap; }
    .footer { background: #f9f9f9; border-top: 1px solid #DCDCDC; padding: 16px 36px; font-size: 12px; color: #9ca3af; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>🎨 New Quote Request</h1>
      <p>Submitted on ${formatTimestamp()}</p>
    </div>
    <div class="body">

      <div class="section-label">Contact Information</div>
      <div class="contact-row">
        <div class="contact-item">
          <div class="label">Name</div>
          <div class="value">${data.fullName}</div>
        </div>
        <div class="contact-item">
          <div class="label">Phone</div>
          <div class="value">${data.phone}</div>
        </div>
        <div class="contact-item">
          <div class="label">Email</div>
          <div class="value">${data.email}</div>
        </div>
      </div>

      <div class="field" style="margin-top:16px;">
        <div class="field-label">Location</div>
        <div class="highlight-location">📍 ${data.city}</div>
      </div>
      <div class="field">
        <div class="field-label">How they heard about us</div>
        <div class="field-value">${data.referralSource || "—"}</div>
      </div>

      <div class="section-label">Project Details</div>
      <div class="field">
        <div class="field-label">Service Requested</div>
        <div class="field-value">${data.service}</div>
      </div>
      <div class="field">
        <div class="field-label">Property Type</div>
        <div class="field-value">${data.propertyType}</div>
      </div>
      <div class="field">
        <div class="field-label">Square Footage</div>
        <div class="field-value">${data.squareFootage || "Not specified"}</div>
      </div>
      <div class="field">
        <div class="field-label">Project Description</div>
        <div class="description-box">${data.projectDescription}</div>
      </div>

      <div class="section-label">Timeline &amp; Preferences</div>
      <div class="contact-row">
        <div class="contact-item">
          <div class="label">Start Timeline</div>
          <div class="value">${data.startTimeline}</div>
        </div>
        <div class="contact-item">
          <div class="label">Preferred Contact</div>
          <div class="value">${data.contactMethod}</div>
        </div>
        <div class="contact-item">
          <div class="label">Best Time</div>
          <div class="value">${data.bestTime || "Anytime"}</div>
        </div>
      </div>

      <div class="field" style="margin-top:20px;">
        <div class="field-label">Budget Range</div>
        <div class="highlight-budget">💰 ${data.budgetRange}</div>
      </div>

      ${
        data.additionalNotes
          ? `<div class="field">
        <div class="field-label">Additional Notes</div>
        <div class="description-box">${data.additionalNotes}</div>
      </div>`
          : ""
      }

    </div>
    <div class="footer">
      Sent from ${SITE_URL} quote form &nbsp;·&nbsp; ${formatTimestamp()}
    </div>
  </div>
</body>
</html>
  `.trim();
}

function buildCustomerEmail(data: QuoteFormData): string {
  const name = firstName(data.fullName);
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: Inter, Arial, sans-serif; color: #1a1a2e; background: #f9f9f9; margin: 0; padding: 0; }
    .wrapper { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; }
    .header { background: #2B5A8A; padding: 32px 36px; text-align: center; }
    .header h1 { color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; }
    .body { padding: 36px; }
    p { font-size: 15px; line-height: 1.7; color: #374151; margin: 0 0 16px; }
    .recap { background: #f0f4f8; border-radius: 10px; padding: 4px 0; margin: 24px 0; }
    .recap table { width: 100%; border-collapse: collapse; font-size: 14px; }
    .recap td { padding: 10px 20px; border-bottom: 1px solid #e5e7eb; vertical-align: top; }
    .recap tr:last-child td { border-bottom: none; }
    .recap-label { color: #6b7280; width: 40%; white-space: nowrap; }
    .recap-value { font-weight: 600; color: #1a1a2e; }
    .cta-phone { font-size: 16px; font-weight: 700; color: #2B5A8A; }
    .signature { margin-top: 32px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 14px; color: #6b7280; }
    .signature strong { color: #1a1a2e; font-size: 15px; display: block; margin-bottom: 4px; }
    .footer { background: #f9f9f9; border-top: 1px solid #DCDCDC; padding: 16px 36px; font-size: 12px; color: #9ca3af; text-align: center; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>We got your request ✓</h1>
    </div>
    <div class="body">
      <p>Hi ${name},</p>
      <p>Thanks for reaching out to <strong>Tacho Painting LLC</strong>. We've received your estimate request and will be in touch within <strong>1 business day</strong>.</p>

      <div class="recap">
        <table>
          <tr>
            <td class="recap-label">Service</td>
            <td class="recap-value">${data.service}</td>
          </tr>
          <tr>
            <td class="recap-label">Location</td>
            <td class="recap-value">${data.city}</td>
          </tr>
          <tr>
            <td class="recap-label">Preferred Contact</td>
            <td class="recap-value">${data.contactMethod}</td>
          </tr>
          <tr>
            <td class="recap-label">Timeline</td>
            <td class="recap-value">${data.startTimeline}</td>
          </tr>
        </table>
      </div>

      <p>In the meantime, feel free to call or text us at <span class="cta-phone">${BUSINESS_PHONE}</span> — we're happy to answer any questions.</p>
      <p>We look forward to working with you.</p>

      <div class="signature">
        <strong>Alan Juarez</strong>
        Tacho Painting LLC<br />
        📞 ${BUSINESS_PHONE}<br />
        ✉️ ${BUSINESS_EMAIL}
      </div>
    </div>
    <div class="footer">
      You're receiving this because you submitted a quote request at ${SITE_URL}
    </div>
  </div>
</body>
</html>
  `.trim();
}

export async function POST(req: NextRequest) {
  try {
    // Guard first — before instantiating Resend so a missing key can never crash module load
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set.");
      return NextResponse.json(
        { success: false, error: "Server misconfiguration: email service not configured." },
        { status: 500 }
      );
    }

    // Instantiate per-request so module load never throws
    const resend = new Resend(apiKey);

    const data: QuoteFormData = await req.json();

    if (!data.fullName || !data.phone || !data.email || !data.city) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Business notification is critical — send first and fail hard if it errors
    const businessResult = await resend.emails.send({
      from: "Tacho Painting Website <onboarding@resend.dev>",
      to: [BUSINESS_EMAIL],
      subject: `New Quote Request — ${data.fullName} | ${data.service} | ${data.budgetRange}`,
      html: buildBusinessEmail(data),
    });

    if (businessResult.error) {
      console.error("Business email error:", businessResult.error);
      return NextResponse.json(
        { success: false, error: "Email delivery failed." },
        { status: 500 }
      );
    }

    // Customer confirmation is best-effort — log failures but don't surface to user
    const customerResult = await resend.emails.send({
      from: "Tacho Painting LLC <onboarding@resend.dev>",
      to: [data.email],
      subject: "We got your request — Tacho Painting LLC",
      html: buildCustomerEmail(data),
    });

    if (customerResult.error) {
      console.warn("Customer confirmation email failed (non-critical):", customerResult.error);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Quote API error:", err);
    return NextResponse.json(
      { success: false, error: "Unexpected server error." },
      { status: 500 }
    );
  }
}
