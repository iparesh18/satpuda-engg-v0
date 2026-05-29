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
      (field) => `
        <tr>
          <td style="padding:10px 12px;border:1px solid #e5e7eb;background:#f8fafc;font-weight:600;vertical-align:top;white-space:nowrap;">${escapeHtml(field.label)}</td>
          <td style="padding:10px 12px;border:1px solid #e5e7eb;vertical-align:top;word-break:break-word;">${escapeHtml(formatFieldValue(field.value))}</td>
        </tr>`
    )
    .join("");
}

function buildTextBody(title, fields) {
  const lines = [title, ""]; 

  for (const field of fields) {
    lines.push(`${field.label}: ${formatFieldValue(field.value)}`);
  }

  return lines.join("\n");
}

async function sendEnquiryEmail({ title, summary, fields, replyTo }) {
  if (!isConfigured()) {
    console.warn("[mail] SMTP env not configured. Skipping enquiry email.");
    return false;
  }

  const recipient = process.env.COLLEGE_ENQUIRY_EMAIL || process.env.MAIL_TO;
  const transporter = getTransporter();

  await transporter.sendMail({
    from: process.env.MAIL_FROM || `Satpuda College <${process.env.SMTP_USER}>`,
    to: recipient,
    replyTo: replyTo || process.env.SMTP_USER,
    subject: title,
    text: buildTextBody(title, fields),
    html: `
      <div style="font-family:Arial,sans-serif;background:#f8fafc;padding:24px;color:#0f172a;">
        <div style="max-width:720px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#021545,#1557d5);color:#fff;padding:22px 24px;">
            <div style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;opacity:.9;">Satpuda College Enquiry</div>
            <h2 style="margin:8px 0 0;font-size:24px;line-height:1.2;">${escapeHtml(title)}</h2>
            <p style="margin:10px 0 0;font-size:14px;line-height:1.6;opacity:.95;">${escapeHtml(summary)}</p>
          </div>
          <div style="padding:24px;">
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              ${buildHtmlRows(fields)}
            </table>
          </div>
        </div>
      </div>`
  });

  return true;
}

module.exports = {
  sendEnquiryEmail
};