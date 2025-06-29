const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Настройка multer для загрузки файлов
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = 'uploads/';
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB
    },
    fileFilter: function (req, file, cb) {
        // Разрешенные типы файлов
        const allowedTypes = /jpeg|jpg|png|gif|pdf|txt|doc|docx/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);
        
        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb(new Error('Only image, PDF, text and Word documents are allowed!'));
        }
    }
});

// Middleware
app.use(express.json());
app.use(express.static('.')); // Serve static files from current directory

// Настройка транспорта для отправки email
const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
        user: 'mst14459@gmail.com', // Ваш email
        pass: process.env.EMAIL_PASSWORD // Пароль от приложения (не от аккаунта!)
    }
});

// API endpoint для обработки обратной связи
app.post('/api/feedback', upload.single('attachment'), async (req, res) => {
    try {
        const { email, message, screenInfo } = req.body;
        const attachment = req.file;

        // Валидация
        if (!email || !message) {
            return res.status(400).json({ success: false, error: 'Email and message are required' });
        }

        // Настройка email
        const mailOptions = {
            from: 'mst14459@gmail.com',
            to: 'mst14459@gmail.com', // Ваш email для получения писем
            subject: `Feedback from ${email}`,
            html: `
                <h2>New Feedback Received</h2>
                <p><strong>From:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
                ${screenInfo ? `<p><strong>Screen Information:</strong></p><pre>${screenInfo}</pre>` : ''}
                <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            `,
            attachments: attachment ? [{
                filename: attachment.originalname,
                path: attachment.path
            }] : []
        };

        // Отправка email
        await transporter.sendMail(mailOptions);

        // Отправка подтверждения пользователю
        const userMailOptions = {
            from: 'mst14459@gmail.com',
            to: email,
            subject: 'Thank you for your feedback!',
            html: `
                <h2>Thank you for your feedback!</h2>
                <p>We have received your message and will get back to you soon.</p>
                <p><strong>Your message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
                <p>Best regards,<br>Screen Test Team</p>
            `
        };

        await transporter.sendMail(userMailOptions);

        // Удаление временного файла
        if (attachment && fs.existsSync(attachment.path)) {
            fs.unlinkSync(attachment.path);
        }

        res.json({ success: true, message: 'Feedback sent successfully' });

    } catch (error) {
        console.error('Error sending feedback:', error);
        
        // Удаление временного файла в случае ошибки
        if (req.file && fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path);
        }
        
        res.status(500).json({ success: false, error: 'Failed to send feedback' });
    }
});

// Обработка ошибок multer
app.use((error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        if (error.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({ success: false, error: 'File too large. Maximum size is 5MB.' });
        }
    }
    res.status(400).json({ success: false, error: error.message });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Open http://localhost:${PORT} in your browser`);
}); 