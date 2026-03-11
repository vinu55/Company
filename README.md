# React Portfolio Web Application

## Overview

This is a modern **React.js web application** that includes multiple pages such as Home, About, Projects, Contact, and Login. The application integrates **Clerk Authentication** for secure user registration and login. User authentication data and session management are handled by the **Clerk Dashboard**.

The project is designed to demonstrate a clean UI, responsive layout, and secure authentication workflow for modern web applications.

---

## Features

* **Home Page** – Landing page introducing the website and its purpose.
* **About Page** – Information about the organization or developer.
* **Projects Page** – Showcases completed or ongoing projects.
* **Contact Page** – Allows users to reach out through contact details or form.
* **Login & Registration** – Secure authentication using Clerk.
* **User Management** – All registered users are managed through the Clerk Dashboard.
* **Responsive Design** – Works across desktop, tablet, and mobile devices.
* **Client-side Routing** – Implemented using React Router.

---

## Technologies Used

* **React.js**
* **React Router**
* **Clerk Authentication**
* **JavaScript (ES6+)**
* **HTML5**
* **CSS / Tailwind CSS**
* **Node.js & npm**

---

## Authentication System

The application uses **Clerk** for authentication and user management.

Features include:

* Secure user **registration and login**
* **Session management**
* **User authentication UI components**
* **User data stored and managed in the Clerk Dashboard**

Clerk provides a fully managed authentication system, eliminating the need to build backend authentication logic.

---

## Project Structure

```
project-root
│
├── public
│   └── index.html
│
├── src
│   ├── components
│   │   ├── Navbar
│   │   ├── Footer
│   │   └── Intro
│   │
│   ├── pages
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   └── Login.js
│   │
│   ├── App.js
│   └── index.js
│
└── package.json
```

---

## Installation

Clone the repository:

```
git clone https://github.com/your-username/your-repository.git
```

Navigate to the project folder:

```
cd project-folder
```

Install dependencies:

```
npm install
```

Start the development server:

```
npm start
```

The application will run at:

```
http://localhost:3000
```

---

## Clerk Setup

1. Create an account at **https://clerk.com**
2. Create a new application in the Clerk dashboard.
3. Copy your **Publishable Key**.
4. Add the key to your project configuration.
5. Clerk will automatically handle user authentication and store user data in the **Clerk Dashboard**.

---

## Future Improvements

* Add a **user dashboard**
* Integrate **backend APIs**
* Add **project filtering and search**
* Implement **contact form email integration**
* Improve **UI animations and performance**

---

## Author

Developed by **Vinayak Rao**

Computer Science Engineering Student | Web Developer | NCC Cadet

---

## License

This project is open-source and available for learning and development purposes.
