# Feedback Server Setup

## Installing Dependencies

1. Install Node.js (if not already installed): https://nodejs.org/
2. Open terminal in the project folder
3. Run the command:
```bash
npm install
```

## Setting up Gmail for Email Sending

### Step 1: Enable Two-Factor Authentication
1. Go to Google account settings
2. Enable two-factor authentication

### Step 2: Create App Password
1. In security settings, find "App passwords"
2. Create a new app password
3. Select "Other (custom name)" and name it "Screen Test Website"
4. Copy the generated password (16 characters)

### Step 3: Configure Environment Variable
1. Copy `env.example` to `.env`:
```bash
cp env.example .env
```
2. Open `.env` file and replace `your_app_password_here` with your app password:
```
EMAIL_PASSWORD=your_app_password_here
```

## Starting the Server

### For Development:
```bash
npm run dev
```

### For Production:
```bash
npm start
```

Server will be available at: http://localhost:3000

## Supported File Types
- Images: jpg, jpeg, png, gif
- Documents: pdf, txt, doc, docx
- Maximum size: 5MB

## Troubleshooting

### "Invalid login" Error
- Make sure two-factor authentication is enabled
- Use app password, not account password
- Check email address correctness

### "File too large" Error
- Make sure file size doesn't exceed 5MB
- Compress image or select another file

### Server won't start
- Check if Node.js is installed: `node --version`
- Make sure all dependencies are installed: `npm install`
- Check if port 3000 is not occupied by another application 