# 🐻 BearBnb: A Full-Stack Airbnb Clone

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![GitHub language count](https://img.shields.io/github/languages/count/hemant-sketch/BearBnb_webApp)](https://github.com/hemant-sketch/BearBnb_webApp)
[![GitHub top language](https://img.shields.io/github/languages/top/hemant-sketch/BearBnb_webApp)](https://github.com/hemant-sketch/BearBnb_webApp)

## 🚀 Overview

The **BearBnb** project is a comprehensive, full-stack web application developed as an Airbnb clone. It uses the modern Node.js ecosystem with the **MERN** stack fundamentals (MongoDB, Express, Node.js) and the **EJS** templating engine, following a Model-View-Controller (MVC) architecture.

This application provides a robust platform for managing rental listings, user authentication, and reviews, showcasing strong backend and frontend development skills.

## ✨ Features

* **Full CRUD Functionality:** Users can create, read, update, and delete rental listings.
* **Authentication & Authorization:** Secure user login/registration using **Passport.js**.
* **User Profiles:** Separate listings and reviews tied to specific users.
* **Review System:** Users can add and delete reviews for listings.
* **Database Management:** Utilizes **MongoDB** with **Mongoose** for data modeling.
* **Responsive Design:** Styled using **Bootstrap 5** for a seamless experience on all devices.
* **Cloud Hosting:** Configured for image uploads using Cloudinary (based on `cloudConfig.js` file presence).

---

## 🛠️ Installation & Setup

### Prerequisites

Ensure you have the following software installed on your machine:

1.  **Node.js** (v18 or higher recommended)
2.  **MongoDB** (running locally or a connection string from Atlas)
3.  **Git**

### Environment Variables

This project requires environment variables for secure operation (like database connection and cloud storage). Create a file named **`.env`** in the root directory and populate it with the following required variables:

### Steps

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/hemant-sketch/BearBnb_webApp.git](https://github.com/hemant-sketch/BearBnb_webApp.git)
    cd BearBnb_webApp
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Initialize Database (Optional):**
    If you have an `init` directory or file (like `init/index.js`), you may need to run a command to seed the database with initial data.
    ```bash
    # Check your project for the exact command to run the init script
    node init/index.js
    ```

---

## 💻 Usage

### Running the Application

Once installation and configuration are complete, start the application server using Node:

```bash
# This command starts the server defined in app.js
node app.js

### Accessing the Application

After running the command above, the server should start. You can access the application in your web browser at:

**Local Development:** `http://localhost:8080/` (or the port defined in your `app.js`)

### Deployment

This application is currently deployed and available for live viewing.

**Live Demo:** [https://bearbnb-webapp.onrender.com/](https://bearbnb-webapp.onrender.com/)

---

## 🤝 Contributing

We welcome contributions! Please follow these steps to help improve the project:

1.  Fork the Project.
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`).
4.  Push to the Branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📝 License

This project is licensed under the **MIT License**. See the `LICENSE` file for more details.

## 📧 Contact

**Hemant Sketch** - <Your Professional Email Address or LinkedIn Profile Link>

Project Link: [https://github.com/hemant-sketch/BearBnb_webApp](https://github.com/hemant-sketch/BearBnb_webApp)
