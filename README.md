# Weather App - Full Stack Application

A modern, full-stack weather application with user authentication, real-time weather data, air quality monitoring, and feedback system.

## Features

### Frontend (React + Vite)
- 🎨 Modern, professional UI design
- 🔐 User authentication (Login/Signup)
- 🌤️ Real-time weather data from OpenWeatherMap
- 🌬️ Air Quality Index (AQI) monitoring
- 💬 AI-powered chatbot assistant
- 📝 User feedback system
- 👤 User profile management
- 📱 Fully responsive design
- 🌙 Dark mode support

### Backend (Flask + SQLite)
- 🔒 Secure JWT-based authentication
- 🔐 Password hashing with Werkzeug
- 💾 SQLite database for data persistence
- 📊 User management API
- 💬 Feedback storage and retrieval
- 🔄 CORS enabled for React frontend

## Tech Stack

### Frontend
- React 19
- Vite
- React Router DOM
- React Icons
- Leaflet (for maps)

### Backend
- Python 3.8+
- Flask
- Flask-CORS
- SQLite3
- PyJWT
- Werkzeug

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- Python 3.8 or higher
- npm or yarn

### Backend Setup

1. **Navigate to project root**
   ```bash
   cd weatherapi
   ```

2. **Install Python dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the Flask server**
   ```bash
   python app.py
   ```
   
   The backend will start on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file** (optional)
   ```bash
   # Create .env file
   echo "VITE_API_URL=http://localhost:5000/api" > .env
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   
   The frontend will start on `http://localhost:5173`

## API Endpoints

### Authentication
- `POST /api/signup` - User registration
- `POST /api/login` - User login
- `GET /api/user` - Get current user info
- `PUT /api/user` - Update user profile

### Feedback
- `POST /api/feedback` - Submit feedback
- `GET /api/feedback` - Get all feedback

### Health
- `GET /api/health` - Server health check

## Project Structure

```
weatherapi/
├── app.py                 # Flask backend server
├── requirements.txt       # Python dependencies
├── weather_app.db         # SQLite database (created automatically)
├── README_BACKEND.md      # Backend documentation
├── weather-app/           # React frontend
│   ├── src/
│   │   ├── api/          # API utilities
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   └── App.jsx       # Main app component
│   ├── package.json
│   └── vite.config.js
└── README.md             # This file
```

## Environment Variables

Create a `.env` file in `weather-app/` directory:

```env
VITE_API_URL=http://localhost:5000/api
```

## Usage

1. **Start the backend server** (Terminal 1)
   ```bash
   python app.py
   ```

2. **Start the frontend** (Terminal 2)
   ```bash
   cd weather-app
   npm run dev
   ```

3. **Open your browser**
   Navigate to `http://localhost:5173`

## Features in Detail

### User Authentication
- Secure registration with email validation
- Password hashing for security
- JWT token-based authentication
- Session management

### Weather Features
- Search weather by city name
- Real-time temperature, humidity, wind speed
- Weather icons based on conditions
- Detailed weather information

### Air Quality
- AQI monitoring for any city
- Color-coded AQI levels
- Real-time air quality data

### Feedback System
- Submit feedback with name and email
- View all submitted feedback
- Persistent storage in database

## Security Features

- Password hashing (Werkzeug)
- JWT token expiration (24 hours)
- CORS configuration
- Input validation
- SQL injection prevention

## Development

### Backend Development
```bash
# Run with auto-reload
python app.py
```

### Frontend Development
```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Database

The SQLite database (`weather_app.db`) is created automatically on first run. It includes:

- **users** table: User accounts and authentication
- **feedback** table: User feedback submissions

## Troubleshooting

### Backend Issues
- Ensure Python 3.8+ is installed
- Check if port 5000 is available
- Verify all dependencies are installed: `pip install -r requirements.txt`

### Frontend Issues
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check if backend is running on port 5000
- Verify environment variables in `.env` file

### API Connection Issues
- Ensure backend is running before starting frontend
- Check CORS settings in `app.py`
- Verify API URL in frontend `.env` file

## License

This project is open source and available for educational purposes.

## Contributing

Feel free to submit issues and enhancement requests!

