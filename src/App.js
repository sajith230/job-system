import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import JobForm from './JobForm';
import BiologyRecommendations from './BiologyRecommendations';
import MotorMechanicRecommendations from './MotorMechanicRecommendations';
import ITRecommendations from './ITRecommendations';
import MarketingRecommendations from './MarketingRecommendations';
import FinanceRecommendations from './FinanceRecommendations';
import EngineeringRecommendations from './EngineeringRecommendations';
import AnyQuestion from './AnyQuestion'; 
import LoginSignup from './LoginSignup';
import './App.css'

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token'); // Check if a token exists

    const isLoginPage = location.pathname === '/login';

    // If there's no token and the user is not on the login page, redirect to login
    if (!token && !isLoginPage) {
      console.log("No token found, redirecting to login...");
      navigate('/login');
    }
  }, [navigate, location]);

  return (

    
    <Routes>
      <Route path="/" element={<JobForm />} />
      <Route path="/login" element={<LoginSignup />} />
      <Route path="/it-recommendations" element={<ITRecommendations />} />
      <Route path="/marketing-recommendations" element={<MarketingRecommendations />} />
      <Route path="/finance-recommendations" element={<FinanceRecommendations />} />
      <Route path="/engineering-recommendations" element={<EngineeringRecommendations />} />
      <Route path="/biology-recommendations" element={<BiologyRecommendations />} />
      <Route path="/motor-mechanic-recommendations" element={<MotorMechanicRecommendations />} />
      <Route path="/any-question" element={<AnyQuestion />} />
    </Routes>
  );
};

export default App;
