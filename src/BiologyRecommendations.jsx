import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './BiologyRecommendations.css'; // Import the CSS for styling

const BiologyRecommendations = () => {
  const location = useLocation();
  const formData = location.state?.formData || {}; // Access the form data
  const [cv, setCv] = useState(null); // State for the uploaded CV

  // List of biology job posts
  const jobPosts = [
    {
      title: 'Biologist',
      company: 'Nature Conservation Organization',
      salary: '$50,000 - $70,000 per year',
      experience: '2+ years',
    },
    {
      title: 'Laboratory Technician',
      company: 'BioHealth Labs',
      salary: '$40,000 - $60,000 per year',
      experience: '1+ years',
    },
    {
      title: 'Research Scientist',
      company: 'Genetic Research Institute',
      salary: '$65,000 - $85,000 per year',
      experience: '3+ years',
    },
    {
      title: 'Marine Biologist',
      company: 'Oceanic Research Group',
      salary: '$55,000 - $75,000 per year',
      experience: '2+ years',
    },
    {
      title: 'Ecologist',
      company: 'Environmental Protection Agency',
      salary: '$60,000 - $80,000 per year',
      experience: '4+ years',
    },
    {
      title: 'Biotechnology Specialist',
      company: 'Innovative Biotech Solutions',
      salary: '$70,000 - $90,000 per year',
      experience: '3+ years',
    },
    // Add more job posts as needed
  ];

  // Function to handle CV file upload
  const handleFileChange = (event) => {
    setCv(event.target.files[0]);
  };

  // Function to handle application submission
  const handleApply = (jobTitle) => {
    if (!cv) {
      alert('Please upload your CV before applying!');
    } else {
      alert(`You have applied for the ${jobTitle} position with your CV: ${cv.name}`);
      // Add additional logic to handle the CV submission (e.g., API call)
    }
  };

  return (
    <div className="biology-recommendations-container">
      <h2>Biology Job Recommendations</h2>
      <p>Here are some job recommendations in the field of Biology:</p>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Experience:</strong> {formData.experience}</p>

      <div className="job-posts">
        {jobPosts.map((job, index) => (
          <div className="job-card" key={index}>
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            
            <input 
              type="file" 
              accept=".pdf,.doc,.docx" 
              onChange={handleFileChange}
              className="file-input"
            />
            <button className="apply-button" onClick={() => handleApply(job.title)}>
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BiologyRecommendations;
