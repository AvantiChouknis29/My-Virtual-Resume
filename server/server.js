const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { name, email, phone, message, service, timeline, budget } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Your email (to you) - fully styled HTML
  const toAvanti = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_USER,
    subject: `New Project Inquiry from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; background: #f0f2f5; color: #333;">
        <h2 style="color: #007bff;">New Contact Request 🚀</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Estimated Budget:</strong> ₹${budget}</p>
        <p><strong>Message:</strong></p>
        <p style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">${message}</p>
      </div>
    `,
  };

  // Auto-reply to user (with full styling preserved)
  const autoReply = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Thanks for contacting Avanti! 😊`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; background-color: #f0f2f5; color: #333;">
        <h2 style="color: #007bff;">Hi ${name},</h2>
        <p>Thank you for reaching out! I'm excited to hear about your interest in <strong>${service}</strong>.</p>
        <p>I’ve received your message and will get back to you shortly.</p>
        <p>Here's a quick summary of what you submitted:</p>
        <ul>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Timeline:</strong> ${timeline}</li>
          <li><strong>Estimated Budget:</strong> ₹${budget}</li>
        </ul>
        <p><strong>Your Message:</strong></p>
        <p style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">${message}</p>
        <br/>
        <p>Looking forward to working with you!</p>
        <p>Best regards,<br><strong>Avanti Chouknis</strong><br>Freelance Web Developer</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(toAvanti);
    await transporter.sendMail(autoReply);
    res.status(200).send('Emails sent successfully');
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    res.status(500).send('Email sending failed');
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
