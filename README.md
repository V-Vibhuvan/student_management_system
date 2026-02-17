# 📘 Student Management API

A secure and scalable backend API built with **Node.js, Express, and MongoDB** to manage student records with authentication, validation, and search capabilities.
---

# Features

## Authentication
- User registration with email and password  
- Password hashing using **bcrypt**  
- Login with credential verification  
- JWT-based authentication  
- Protected routes using middleware  

## Student Management
- Create student records  
- Retrieve all students  
- Get student by ID  
- Update student details  
- Delete student  

## Search Functionality
- Search students by name or email  
- Filter using query parameters  

## Validation
- Request validation using **Joi**  
- Structured schema validation  
- Clear error messages  

## Architecture
- MVC-style structure  
- Centralized error handling  
- Middleware-based authentication  
- Environment-based configuration  
---

# Tech Stack
- Node.js  
- Express.js  
- MongoDB Atlas  
- Mongoose  
- JWT  
- bcrypt  
- Joi  

# Project Structure

```
src/
 ├── models/        → Database schemas
 ├── controllers/   → Business logic
 ├── routes/        → API routes
 ├── middleware/    → Auth & validation
 ├── utils/         → Helper functions
 └── app.js         → Entry point
```

---

# System Design Overview

The system separates authentication from student data:

- **User Model** → handles authentication and identity  
- **Student Model** → represents managed student entities  

This decoupled design allows administrators to manage multiple student records.

---

# Authentication Flow
1. User registers with email and password  
2. Password is hashed before storing  
3. On login, credentials are verified  
4. JWT token is generated  
5. Client sends token in Authorization header  
6. Middleware verifies token before granting access  
---

# API Endpoints

## Auth Routes

### Register
POST /api/auth/register

### Login
POST /api/auth/login

## Student Routes

### Create Student
POST /api/students

### Get All Students
GET /api/students

### Search Students
GET /api/students?search=keyword

### Get Student by ID
GET /api/students/:id

### Update Student
PUT /api/students/:id

### Delete Student
DELETE /api/students/:id

---

# Security Measures
- Password hashing with bcrypt  
- JWT token verification  
- Protected routes  
- Environment variables for secrets  
- Input validation  
---

# Environment Variables
Create a `.env` file:
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_secret_key  


# Local Setup
git clone <repo-url>
cd student-management-api
npm install
nodemon install (optional)
To run : 
npm server.js
(or)
nodemon server.js 


---

# Database

The application uses **MongoDB Atlas** as a cloud database for scalability and accessibility.
---

# Design Decisions

- Chose JWT for stateless authentication  
- Used MongoDB for flexible schema  
- Implemented Joi for robust validation  
- Separated concerns using MVC pattern  
---

## API Testing

**Use Postman or Hoppscotch.**

Auth:
POST /api/auth/register
POST /api/auth/login

Students:
POST /api/students
GET /api/students
GET /api/students/:id
PUT /api/students/:id
DELETE /api/students/:id


