const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Nodemailer configuration with environment variables
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Verify transporter configuration
transporter.verify((error, success) => {
    if (error) {
        console.log('Error with email configuration:', error);
    } else {
        console.log('Server is ready to send emails');
    }
});

// Contact form endpoint
app.post('/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !subject || !message) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required'
        });
    }

    // Email options
    const mailOptions = {
        from: `"${name}" <kbrian1237@gmail.com>`, // sender address
        to: 'kbrian1237@gmail.com', // your email
        replyTo: email, // user's email for reply
        subject: `Portfolio Contact: ${subject}`,
        html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
                <h2 style="color: #00ffff; border-bottom: 2px solid #00ffff; padding-bottom: 10px;">
                    New Contact Form Submission
                </h2>
                
                <div style="margin: 20px 0; padding: 15px; background: #f5f5f5; border-radius: 5px;">
                    <p><strong style="color: #333;">Name:</strong> ${name}</p>
                    <p><strong style="color: #333;">Email:</strong> ${email}</p>
                    <p><strong style="color: #333;">Subject:</strong> ${subject}</p>
                </div>
                
                <div style="margin: 20px 0; padding: 15px; background: #fff; border-left: 4px solid #00ffff;">
                    <h3 style="margin-top: 0; color: #333;">Message:</h3>
                    <p style="color: #666; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
                </div>
                
                <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                
                <p style="color: #999; font-size: 12px;">
                    This email was sent from your portfolio contact form.
                </p>
            </div>
        `
    };

    try {
        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.messageId);

        res.status(200).json({
            success: true,
            message: 'Email sent successfully!'
        });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send email. Please try again later.'
        });
    }
});

// Serve index.html for root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
