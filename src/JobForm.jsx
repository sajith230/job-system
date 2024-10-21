import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './JobForm.css';
import axios from 'axios';
import Logout from './Logout'; // Importing the Logout component

const JobForm = () => {
  const [formData, setFormData] = useState({
    name: '', 
    age: '',
    location: '',
    fieldsOfInterest: '',
    skills: '',
    qualifications: '',
    experience: '',
    workLocation: '',
    linkedInProfile: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'age') {
      setError('');
    }
  };

  // Function to submit the form data to the backend
  const submitForm = () => {
    console.log('Submitting data:', formData);
    axios.post('http://localhost:5000/submit-job-form', formData)
      .then(response => {
        if (response.status === 200) {
          console.log('Form Data Submitted:', formData);
        }
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        setError('Error submitting form. Please try again.');
      });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.age < 0) {
      setError('Please enter a positive number for age.');
      return;
    }

    submitForm();

    // Navigate to the appropriate recommendations page based on the field of interest
    switch (formData.fieldsOfInterest) {
      case 'IT':
        navigate('/it-recommendations');
        break;
      case 'Marketing':
        navigate('/marketing-recommendations');
        break;
      case 'Finance':
        navigate('/finance-recommendations');
        break;
      case 'Engineering':
        navigate('/engineering-recommendations');
        break;
      case 'Biology':
        navigate('/biology-recommendations');
        break;
      case 'Motor Mechanic':
        navigate('/motor-mechanic-recommendations');
        break;
      default:
        navigate('/job-recommendations');
    }
  };

  return (
    <div className="form-container">
      <center>
        <h2>AI-Driven Job Recommendation System</h2>
        
        {/* Logout Button */}
        <Logout />

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input type="number" name="age" value={formData.age} onChange={handleChange} required />
            {error && <p className="error-message">{error}</p>}
          </div>
          <div className="form-group">
            <label>Location</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Field of Interest</label>
            <select name="fieldsOfInterest" value={formData.fieldsOfInterest} onChange={handleChange} required>
              <option value="">Select Field</option>
              <option value="IT">IT</option>
              <option value="Engineering">Engineering</option>
              <option value="Marketing">Marketing</option>
              <option value="Finance">Finance</option>
              <option value="Biology">Biology</option>
              <option value="Motor Mechanic">Motor Mechanic</option>
            </select>
          </div>
          <div className="form-group">
            <label>Skills</label>
            <input type="text" name="skills" value={formData.skills} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Qualifications</label>
            <input type="text" name="qualifications" value={formData.qualifications} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Experience</label>
            <input type="text" name="experience" value={formData.experience} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Preferred Work Location</label>
            <select name="workLocation" value={formData.workLocation} onChange={handleChange} required>
              <option value="">Select Location</option>
              <option value="Local">Local</option>
              <option value="Remote">Remote</option>
            </select>
          </div>
          <div className="form-group">
            <label>LinkedIn Profile</label>
            <input type="url" name="linkedInProfile" value={formData.linkedInProfile} onChange={handleChange} required />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>

        <div className="question-link">
          <h3>Ask any question you like, go to the chatbot...</h3>
          <Link to="/any-question" id='any'>Any Questions</Link> 
        </div>
      </center>
    </div>
  );
};

export default JobForm;
