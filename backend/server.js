const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}




app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
  return res.status(400).json({
    success: false,
    message: "Please fill in all fields.",
  });
}
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
  return res.status(400).json({
    success: false,
    message: "Please enter a valid email address.",
  });
}

  try {
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 30px; background: #f5f5f5;">
          
          <div style="background: white; padding: 30px; border-radius: 12px;">
            
            <h1 style="color: #222;">
              New Portfolio Message 
            </h1>

            <p style="color: #666;">
              Someone just contacted you through your portfolio.
            </p>

            <div style="background: #f8f8f8; padding: 20px; border-radius: 8px;">
              <p><strong>Name:</strong> ${safeName}</p>
              <p><strong>Email:</strong> ${safeEmail}</p>
            </div>

            <h3 style="margin-top: 25px;">
              Message
            </h3>

            <p style="line-height: 1.6; color: #555;">
              ${safeMessage}
            </p>

            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">

            <p style="font-size: 13px; color: #999;">
              Sent from your portfolio contact form.
            </p>

          </div>
        </div>
      `,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thanks for contacting me! ",

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 30px; background: #f5f5f5;">
          
          <div style="background: white; padding: 30px; border-radius: 12px;">
            
            <h1 style="color: #222;">
              Thanks for reaching out! 
            </h1>

            <p style="color: #555; font-size: 16px;">
              Hi ${safeName},
            </p>

            <p style="color: #555; line-height: 1.6;">
              Thank you for contacting me through my portfolio.
              I've received your message and I'll get back to you as soon as possible.
            </p>

            <div style="margin-top: 25px; padding: 20px; background: #f8f8f8; border-radius: 8px;">
              <p style="margin: 0; color: #666;">
                <strong>Your message:</strong>
              </p>

              <p style="color: #555; line-height: 1.6;">
                ${safeMessage}
              </p>
            </div>

            <p style="margin-top: 30px; color: #555;">
              Best regards,<br>
              <strong>Aishat Bakare</strong><br>
              Frontend Developer
            </p>

          </div>
        </div>
      `,
    });

    res.json({
      success: true,
      message: "Message sent successfully!",
    });

  } catch (error) {
    console.error("Email error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send message.",
    });
  }
});




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});