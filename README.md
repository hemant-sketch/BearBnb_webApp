# 🏡 BearBnb

A full-stack Airbnb clone built with MongoDB, Express.js, Node.js, and EJS. BearBnb is a feature-rich rental listing platform that demonstrates modern web development practices with secure authentication, CRUD operations, and cloud integration.

![Node.js](https://img.shields.io/badge/Node.js-v18+-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)
![Express.js](https://img.shields.io/badge/Express.js-Backend-blue)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple)

## ✨ Features

### Core Functionality
- **Listings Management**: Create, read, update, and delete rental property listings
- **User Authentication**: Secure login and registration system powered by Passport.js
- **Authorization**: Role-based access control for listing ownership
- **Reviews System**: Users can add and remove reviews for listings
- **User Profiles**: Personal dashboard for each registered user
- **Responsive Design**: Mobile-first design using Bootstrap 5
- **Cloud Storage**: Image uploads handled via Cloudinary

### Technical Highlights
- **MVC Architecture**: Clean, modular, and maintainable codebase
- **RESTful API**: Well-structured API endpoints
- **Session Management**: Secure user sessions
- **Form Validation**: Client and server-side validation
- **Error Handling**: Comprehensive error handling middleware

## 🛠️ Tech Stack

| Frontend | Backend | Database | Tools & Services |
|----------|---------|----------|------------------|
| HTML5 | Node.js | MongoDB | Git |
| CSS3 | Express.js | Mongoose | Cloudinary |
| Bootstrap 5 | Passport.js | | Render |
| EJS Templates | RESTful APIs | | |

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git**
- **npm** or **yarn**

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/hemant-sketch/BearBnb_webApp.git
cd BearBnb_webApp
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory and add the following variables:

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Session Secret
SESSION_SECRET=your_session_secret_key

# Server Configuration
PORT=3000
```

### 4. Start MongoDB
If using local MongoDB:
```bash
mongod
```

### 5. Run the Application
```bash
# Development mode
npm start

# With nodemon (for development)
npm run dev
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
BearBnb_webApp/
├── models/           # Mongoose schemas
├── routes/           # Express route handlers
├── controllers/      # Business logic
├── views/            # EJS templates
├── public/           # Static assets (CSS, JS, images)
├── middleware/       # Custom middleware
├── utils/            # Helper functions
├── app.js            # Application entry point
└── package.json      # Project dependencies
```

## 🎯 API Endpoints

### Listings
- `GET /listings` - Get all listings
- `GET /listings/:id` - Get single listing
- `POST /listings` - Create new listing (Auth required)
- `PUT /listings/:id` - Update listing (Auth + Owner required)
- `DELETE /listings/:id` - Delete listing (Auth + Owner required)

### Reviews
- `POST /listings/:id/reviews` - Add review (Auth required)
- `DELETE /listings/:id/reviews/:reviewId` - Delete review (Auth + Owner required)

### Authentication
- `GET /signup` - Signup page
- `POST /signup` - Register new user
- `GET /login` - Login page
- `POST /login` - Authenticate user
- `GET /logout` - Logout user

## 🔐 Security Features

- Password hashing with bcrypt
- Session-based authentication
- CSRF protection
- Input sanitization
- Authorization middleware
- Secure HTTP headers

## 🎨 Screenshots

![BearBnb Project Screenshot](https://raw.githubusercontent.com/hemant-sketch/Portfolio/main/public/BearBnb.png)

## 🚢 Deployment

### Deploy to Render

1. Push your code to GitHub
2. Connect your repository to Render
3. Add environment variables in Render dashboard
4. Deploy!

For detailed deployment instructions, refer to [Render documentation](https://render.com/docs).

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source.

## 👨‍💻 Author

**Hemant**
- GitHub: [@hemant-sketch](https://github.com/hemant-sketch)

## 🙏 Acknowledgments

- Inspired by Airbnb
- Built as a learning project to demonstrate full-stack development skills
- Thanks to the open-source community for amazing tools and libraries

## 📧 Contact

For questions or feedback, please reach out through GitHub issues or create a pull request.

---

⭐ If you found this project helpful, please give it a star!

**Happy Coding! 🚀**
