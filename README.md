# Brian Kathurima - Portfolio

A modern, animated portfolio website with contact form functionality using Nodemailer.

## Features

- 🎨 Modern UI with neural network background animations
- 📱 Fully responsive design
- 💌 Working contact form with email integration
- ⚡ Smooth scrolling and animations
- 🎯 Project showcase with categories (Fullstack, Mobile Apps, Frontend)
- 🔧 Skills and tech stack display
- 📊 Figma UI/UX prototypes integration

## Technologies Used

### Frontend
- HTML5
- CSS3 (Custom animations & effects)
- JavaScript (ES6+)
- Font Awesome icons

### Backend
- Node.js
- Express.js
- Nodemailer (Gmail SMTP)
- CORS

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Server

```bash
npm start
```

Or for development with auto-restart:

```bash
npm run dev
```

### 3. Access the Portfolio

Open your browser and navigate to:
```
http://localhost:3000
```

## Contact Form

The contact form is fully functional and sends emails using Gmail SMTP with Nodemailer.

### How it works:
1. User fills out the contact form
2. Frontend validates the data
3. Data is sent to the backend server via POST request
4. Server uses Nodemailer to send email to your Gmail
5. User receives success/error notification

## Project Structure

```
portifolio/
├── index.html          # Main HTML file
├── style.css           # Styles and animations
├── script.js           # Frontend JavaScript
├── server.js           # Backend server with Nodemailer
├── package.json        # Dependencies
├── images/             # Project screenshots
└── README.md           # This file
```

## Email Configuration

The email functionality is configured to use Gmail SMTP. If you need to change the email or app password, edit the `server.js` file:

```javascript
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-app-password'
    }
});
```

## Projects Showcased

### Fullstack Web Applications
- Cemma - Blog platform
- Shootup-LMS - Learning Management System
- Castle Depots - Modern web application
- Neurolancer - Freelancing platform
- Sales and Offers - E-commerce deals platform

### Mobile Apps (Fullstack)
- Sponsorship OS - Flutter/Python/PostgreSQL
- Kejapin - Flutter/Golang/PostgreSQL

### Frontend Projects
- Norac Realtors - Real estate website
- Zero-Hunger-app - Mobile application
- Thread and Sole - Ecommerce frontend
- Novel-nest - Novel hosting platform
- Portfolio - This portfolio website

## Author

**Brian Kathurima**
- Email: kbrian1237@gmail.com
- Location: Meru, Kenya

## License

MIT License - feel free to use this template for your own portfolio!