import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, email, phone, reason, missionUnderstanding } = req.body;

    // Send email using Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // or use a different email service
      auth: {
        user: 'your-email here',
        pass: 'your-google-app-pwd-here',
      },
    });

    try {
      await transporter.sendMail({
        from: 'your-email-here',
        to: 'your-email-here',
        subject: `New Contact Form Submission from ${fullName}`,
        text: `Name: ${fullName}\nEmail: ${email}\nMessage: ${reason}`,
      });

      // Save data to Google Sheets
      const sheetResponse = await fetch(
        'https://script.google.com/macros/s/AKfycbzMQ6PH9FPre8YaQUTCD9B4xMptBvp-W9HHGgzGDaA57x49IWE6eWRl9gjQqgOUI70/exec',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fullName, email, phone, reason, missionUnderstanding }),
        },
      );

      if (!sheetResponse.ok) throw new Error('Failed to save to Google Sheets.');

      res.status(200).json({ success: true, message: 'Submission sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Failed to send submission.' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed.' });
  }
}
