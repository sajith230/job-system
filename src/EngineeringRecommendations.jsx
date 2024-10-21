import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './EngineeringRecommendations.css';

const EngineeringRecommendations = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};  // Access form data

  // State to store the job the user is applying for
  const [selectedJob, setSelectedJob] = useState(null);
  const [resume, setResume] = useState(null);

  // List of engineering job posts
  const jobPosts = [
    {
      title: 'Civil Engineer',
      company: 'BuildRight Construction',
      salary: '$70,000 - $90,000 per year',
      experience: '3+ years',
      bgColor: '#FFDDC1',
    },
    {
      title: 'Mechanical Engineer',
      company: 'MechaWorks Ltd.',
      salary: '$80,000 - $100,000 per year',
      experience: '5+ years',
      bgColor: '#F5CBA7',
    },
    {
      title: 'Electrical Engineer',
      company: 'PowerGrid Technologies',
      salary: '$75,000 - $95,000 per year',
      experience: '4+ years',
      bgColor: '#AED6F1',
    },
    {
      title: 'Software Engineer',
      company: 'Tech Solutions',
      salary: '$85,000 - $110,000 per year',
      experience: '3+ years',
      bgColor: '#F9E79F',
    },
    {
      title: 'Chemical Engineer',
      company: 'ChemTech Industries',
      salary: '$90,000 - $115,000 per year',
      experience: '2+ years',
      bgColor: '#D2B4DE',
    },
    {
      title: 'Aerospace Engineer',
      company: 'Flight Dynamics',
      salary: '$100,000 - $130,000 per year',
      experience: '6+ years',
      bgColor: '#A9DFBF',
    },
    {
      title: 'Structural Engineer',
      company: 'StrongBuild Construction',
      salary: '$85,000 - $105,000 per year',
      experience: '4+ years',
      bgColor: '#FAD7A0',
    },
    {
      title: 'Industrial Engineer',
      company: 'Efficient Systems Ltd.',
      salary: '$75,000 - $100,000 per year',
      experience: '3+ years',
      bgColor: '#F5B7B1',
    },
  ];

  // Handle job application click
  const handleApply = (jobTitle) => {
    setSelectedJob(jobTitle); // Set selected job to open resume upload
    setResume(null); // Reset resume for new job
  };

  // Handle file selection
  const handleFileChange = (event) => {
    setResume(event.target.files[0]);
  };

  // Handle resume submission
  const handleSubmitResume = (jobTitle) => {
    if (resume) {
      alert(`Resume submitted for ${jobTitle}!`);
      // Add logic here to handle the resume submission, e.g., send it to a server
      setSelectedJob(null); // Reset job selection after submission
    } else {
      alert("Please upload your resume before submitting.");
    }
  };

  return (
    <div className="engineering-recommendations-container">
      <center>
        <h2 className="recommendations-title">Engineering Job Recommendations</h2>
        <p className="info-text">Here are some job recommendations based on your interest in Engineering:</p>
       

        <div className="job-posts">
          {jobPosts.map((job, index) => (
            <div
              className="job-card"
              key={index}
              style={{ backgroundColor: job.bgColor }} // Apply different background color
            >
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Salary:</strong> {job.salary}</p>
              <p><strong>Experience:</strong> {job.experience}</p>
              <button className="apply-button" onClick={() => handleApply(job.title)}>
                Apply
              </button>

              {/* Display resume upload section if the job is selected */}
              {selectedJob === job.title && (
                <div className="upload-section">
                  <h4>Upload Your Resume for {job.title}</h4>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                  />
                  <button onClick={() => handleSubmitResume(job.title)}>
                    Submit Resume
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </center>
    </div>
  );
};

export default EngineeringRecommendations;
