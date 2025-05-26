# FundooNotes Backend

FundooNotes is a backend application developed using Node.js, Express, and MongoDB that allows users to register, log in using JWT tokens, and perform CRUD operations on notes. The application also includes Swagger documentation for easy API reference and testing.

---

## Features

- User registration and login with JWT-based authentication
- Create, read, update, and delete notes
- API documentation using Swagger UI
- Secure endpoints with authentication middleware
- Modular and maintainable project structure

---

##  Project Structure

```
FUNDONOTES/
├── controllers/          # Logic for handling user and note APIs
│   ├── note.controller.js
│   └── user.controller.js
├── middlewares/          # Authentication middleware
│   └── authmiddleware.js
├── models/               # Mongoose schemas
│   ├── note.model.js
│   └── user.model.js
├── routes/               # Route definitions
│   ├── note.routes.js
│   └── user.routes.js
├── utils/                # Utilities (e.g., logger)
│   └── logger.js
├── .env                  # Environment variables
├── .gitignore            # Git ignore config
├── app.js                # Application entry point
├── app.log               # Application logs
├── package.json          # Dependencies and scripts
├── package-lock.json     # Lock file
└── README.md             # Project documentation
```

---

## 🔧 Setup Instructions

### 1. Clone the repository

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

Add the following variables:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 4. Run the application

```bash
npm start
```

Server will run at: `http://localhost:3000`

Swagger Docs: `http://localhost:3000/api-docs`

---

## API Endpoints

### User Authentication

| Method | Endpoint               | Description           |
|--------|------------------------|-----------------------|
| POST   | /api/users/register    | Register a new user   |
| POST   | /api/users/login       | Login a user          |

### Notes Management (Protected)

| Method | Endpoint            | Description           |
|--------|---------------------|-----------------------|
| POST   | /api/notes          | Create a new note     |
| GET    | /api/notes          | Get all notes         |
| GET    | /api/notes/:id      | Get a specific note   |
| PUT    | /api/notes/:id      | Update a note         |
| DELETE | /api/notes/:id      | Delete a note         |

> All `/api/notes` routes require a valid JWT token in the `Authorization` header.

---

##  Swagger Documentation

FundooNotes uses **Swagger UI** for API documentation.

Access it at:  
 `http://localhost:3000/api-docs`

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT (JSON Web Token)**
- **Swagger (OpenAPI)**
- logger**

---


