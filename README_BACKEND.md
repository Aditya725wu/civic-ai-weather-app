# Weather App Backend API

A simple Flask backend for the Weather App that handles user authentication and feedback storage.

## Features

- User registration and login
- JWT token-based authentication
- Password hashing for security
- SQLite database for data storage
- CORS enabled for React frontend
- Feedback submission and retrieval

## Setup Instructions

### 1. Install Python Dependencies

```bash
pip install -r requirements.txt
```

### 2. Run the Server

```bash
python app.py
```

The server will start on `http://localhost:5000`

### 3. Database

The SQLite database (`weather_app.db`) will be created automatically on first run.

## API Endpoints

### Health Check
- **GET** `/api/health`
- Returns server status

### User Registration
- **POST** `/api/signup`
- Body: `{ "fullname": "John Doe", "email": "john@example.com", "password": "password123" }`
- Returns: JWT token and user data

### User Login
- **POST** `/api/login`
- Body: `{ "email": "john@example.com", "password": "password123" }`
- Returns: JWT token and user data

### Get User Info
- **GET** `/api/user`
- Headers: `Authorization: Bearer <token>`
- Returns: Current user information

### Update User Profile
- **PUT** `/api/user`
- Headers: `Authorization: Bearer <token>`
- Body: `{ "fullname": "John Updated" }`
- Returns: Updated user data

### Submit Feedback
- **POST** `/api/feedback`
- Body: `{ "name": "John", "email": "john@example.com", "message": "Great app!" }`
- Returns: Success message

### Get Feedback
- **GET** `/api/feedback`
- Returns: List of all feedback submissions

## Security Features

- Passwords are hashed using Werkzeug's password hashing
- JWT tokens expire after 24 hours
- CORS configured for secure cross-origin requests
- Input validation on all endpoints

