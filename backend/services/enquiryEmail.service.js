const nodemailer = require("nodemailer");

let cachedTransporter = null;

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isConfigured() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      (process.env.COLLEGE_ENQUIRY_EMAIL || process.env.MAIL_TO)
  );
}

function getTransporter() {
  if (!cachedTransporter) {
    cachedTransporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: String(process.env.SMTP_PORT) === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }

  return cachedTransporter;
}

function formatFieldValue(value) {
  if (value === undefined || value === null || value === "") {
    return "N/A";
  }

  if (Array.isArray(value)) {
    return value.join(", ");
  }

  return String(value).trim();
}

function buildHtmlRows(fields) {
  return fields
    .map(
      (field, index) => `
        <tr>
          <td style="padding:12px 16px;background:${index % 2 === 0 ? "#f8fafc" : "#ffffff"};border-bottom:1px solid #e2e8f0;width:38%;vertical-align:top;">
            <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#64748b;">${escapeHtml(field.label)}</span>
          </td>
          <td style="padding:12px 16px;background:${index % 2 === 0 ? "#f8fafc" : "#ffffff"};border-bottom:1px solid #e2e8f0;vertical-align:top;word-break:break-word;">
            <span style="font-size:14px;color:#0f172a;font-weight:500;">${escapeHtml(formatFieldValue(field.value))}</span>
          </td>
        </tr>`
    )
    .join("");
}

function buildTextBody(title, fields) {
  const divider = "─".repeat(48);
  const lines = [
    "SATPUDA COLLEGE OF ENGINEERING & POLYTECHNIC",
    divider,
    title,
    divider,
    ""
  ];

  for (const field of fields) {
    lines.push(`${field.label.padEnd(20)}: ${formatFieldValue(field.value)}`);
  }

  lines.push("", divider);
  lines.push("This is an automated notification. Do not reply to this email.");
  lines.push("Reply directly to the enquirer using the email address above.");

  return lines.join("\n");
}

function buildHtmlEmail({ title, summary, fields, replyTo, replyToName }) {
  const now = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const isAdmission = title.toLowerCase().includes("admission");
  const badgeColor = isAdmission ? "#0d47a1" : "#1b5e20";
  const badgeText = isAdmission ? "Admission Enquiry" : "Contact Enquiry";

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#eef2f7;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#eef2f7;padding:32px 16px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

      <!-- Header -->
      <tr>
        <td style="background:#021545;border-radius:12px 12px 0 0;padding:28px 32px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <div style="font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#93c5fd;margin-bottom:6px;">Satpuda College of Engineering &amp; Polytechnic</div>
                <div style="font-size:22px;font-weight:700;color:#ffffff;line-height:1.3;">${escapeHtml(title)}</div>
                <div style="margin-top:10px;">
                  <span style="display:inline-block;background:${badgeColor};color:#fff;font-size:11px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;padding:4px 12px;border-radius:20px;">${badgeText}</span>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Summary bar -->
      <tr>
        <td style="background:#1e3a8a;padding:12px 32px;">
          <span style="font-size:13px;color:#bfdbfe;">${escapeHtml(summary)}</span>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="background:#ffffff;padding:28px 32px;">

          <!-- Section label -->
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#94a3b8;margin-bottom:16px;">Submission Details</div>

          <!-- Fields table -->
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
            ${buildHtmlRows(fields)}
          </table>

          <!-- Reply CTA -->
          ${replyTo ? `
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
            <tr>
              <td style="background:#f0f7ff;border:1px solid #bfdbfe;border-radius:8px;padding:16px 20px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td>
                      <div style="font-size:13px;color:#1e40af;font-weight:600;">Reply directly to this enquiry</div>
                      <div style="font-size:12px;color:#64748b;margin-top:2px;">Clicking Reply will send your response to <strong>${escapeHtml(replyTo)}</strong></div>
                    </td>
                    <td align="right" style="white-space:nowrap;padding-left:16px;">
                      <a href="mailto:${escapeHtml(replyTo)}" style="display:inline-block;background:#1d4ed8;color:#ffffff;font-size:13px;font-weight:700;text-decoration:none;padding:10px 20px;border-radius:6px;">Reply Now</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>` : ""}

        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#f8fafc;border-top:1px solid #e2e8f0;border-radius:0 0 12px 12px;padding:20px 32px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <div style="font-size:12px;font-weight:700;color:#334155;">Satpuda College of Engineering &amp; Polytechnic</div>
                <div style="font-size:11px;color:#94a3b8;margin-top:4px;">Lalbarra – Balaghat Road, Manjhapur, MP 481001</div>
                <div style="font-size:11px;color:#94a3b8;margin-top:2px;">+91 94258 36824 &nbsp;|&nbsp; +91 6262 604 111</div>
              </td>
              <td align="right" style="vertical-align:top;">
                <div style="font-size:11px;color:#cbd5e1;">Received ${escapeHtml(now)} IST</div>
                <div style="font-size:10px;color:#e2e8f0;margin-top:4px;">Automated notification — do not reply to this email</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;
}

async function sendEnquiryEmail({ title, summary, fields, replyTo }) {
  if (!isConfigured()) {
    console.warn("[mail] SMTP env not fully configured — skipping email. Missing:", {
      SMTP_HOST: !process.env.SMTP_HOST,
      SMTP_PORT: !process.env.SMTP_PORT,
      SMTP_USER: !process.env.SMTP_USER,
      SMTP_PASS: !process.env.SMTP_PASS,
      COLLEGE_ENQUIRY_EMAIL: !process.env.COLLEGE_ENQUIRY_EMAIL && !process.env.MAIL_TO,
    });
    return false;
  }

  const recipient = process.env.COLLEGE_ENQUIRY_EMAIL || process.env.MAIL_TO;
  const from = process.env.MAIL_FROM || `Satpuda College <${process.env.SMTP_USER}>`;
  const transporter = getTransporter();

  console.log(`[mail] Sending: "${title}" → ${recipient}`);

  const replyToName = fields.find((f) => f.label === "Full Name")?.value || "";

  const info = await transporter.sendMail({
    from,
    to: recipient,
    replyTo: replyTo || process.env.SMTP_USER,
    subject: title,
    text: buildTextBody(title, fields),
    html: buildHtmlEmail({ title, summary, fields, replyTo, replyToName }),
  });

  console.log(`[mail] Sent OK — messageId: ${info.messageId}`);
  return true;
}

async function verifySmtp() {
  if (!isConfigured()) {
    console.warn("[mail] SMTP not configured — email sending is disabled.");
    return;
  }
  try {
    await getTransporter().verify();
    console.log(`[mail] SMTP ready — logged in as ${process.env.SMTP_USER}`);
  } catch (error) {
    console.error(`[mail] SMTP login FAILED — check SMTP_USER and SMTP_PASS. Error: ${error.message}`);
  }
}

module.exports = {
  sendEnquiryEmail,
  verifySmtp,
};