import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css';
const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('token');
    console.log("Token cleared on logout.");

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <button onClick={handleLogout}  id='logout'>
      logout
    </button>
  );
};

export default Logout;
