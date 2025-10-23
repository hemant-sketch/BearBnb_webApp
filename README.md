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
