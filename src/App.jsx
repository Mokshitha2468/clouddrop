import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Homepage from './components/Homepage';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for existing session on app load
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('clouddrop_token');
      const userData = localStorage.getItem('clouddrop_user');
      
      if (token && userData) {
        setIsAuthenticated(true);
        setUser(JSON.parse(userData));
      }
      setLoading(false);
    };
    
    checkAuth();
  }, []);

  // Login handler
  const handleLogin = (userData, token) => {
    localStorage.setItem('clouddrop_token', token);
    localStorage.setItem('clouddrop_user', JSON.stringify(userData));
    setIsAuthenticated(true);
    setUser(userData);
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('clouddrop_token');
    localStorage.removeItem('clouddrop_user');
    setIsAuthenticated(false);
    setUser(null);
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <p>Loading CloudDrop...</p>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route 
          path="/" 
          element={<Homepage isAuthenticated={isAuthenticated} />} 
        />
        
      </Routes>
    </Router>
  );
}

// 404 Component
const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <a href="/" className="home-button">
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default App;