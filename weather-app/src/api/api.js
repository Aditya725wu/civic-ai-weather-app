const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Helper function to get auth token
const getToken = () => {
  return localStorage.getItem('token');
};

// Helper function to make API requests
const apiRequest = async (endpoint, options = {}) => {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Request failed');
    }

    return data;
  } catch (error) {
    throw error;
  }
};

// Auth API
export const authAPI = {
  signup: async (fullname, email, password) => {
    return apiRequest('/signup', {
      method: 'POST',
      body: JSON.stringify({ fullname, email, password }),
    });
  },

  login: async (email, password) => {
    return apiRequest('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  getUser: async () => {
    return apiRequest('/user');
  },

  updateUser: async (fullname) => {
    return apiRequest('/user', {
      method: 'PUT',
      body: JSON.stringify({ fullname }),
    });
  },
};

// Feedback API
export const feedbackAPI = {
  submit: async (name, email, message) => {
    return apiRequest('/feedback', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
    });
  },

  getAll: async () => {
    return apiRequest('/feedback');
  },
};

// Health check
export const healthCheck = async () => {
  return apiRequest('/health');
};

