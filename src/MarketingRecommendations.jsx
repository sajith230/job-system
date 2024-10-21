import React, { useState } from 'react';
import './MotorMechanicRecommendations.css'; // Import the CSS file

const MotorMechanicRecommendations = () => {
  const [cv, setCv] = useState(null); // State for the CV file
  const [selectedJob, setSelectedJob] = useState(null); // State to store the selected job

  // Job postings specific to Motor Mechanic
  const jobPosts = [
    {
      title: 'Automotive Technician',
      company: 'Fast Lane Garage',
      salary: '$45,000 - $55,000 per year',
      experience: '2+ years',
    },
    {
      title: 'Motor Mechanic',
      company: 'Reliable Auto Services',
      salary: '$50,000 - $60,000 per year',
      experience: '3+ years',
    },
    {
      title: 'Diesel Mechanic',
      company: 'Heavy Duty Repair',
      salary: '$55,000 - $65,000 per year',
      experience: '4+ years',
    },
    {
      title: 'Auto Body Repair Specialist',
      company: 'Precision Auto Body',
      salary: '$50,000 - $70,000 per year',
      experience: '3+ years',
    },
    {
      title: 'Fleet Maintenance Technician',
      company: 'City Transport Services',
      salary: '$55,000 - $75,000 per year',
      experience: '5+ years',
    },
  ];

  // Function to handle CV file selection
  const handleCvUpload = (e) => {
    setCv(e.target.files[0]);
  };

  // Function to handle applying to the job
  const handleApply = (jobTitle) => {
    setSelectedJob(jobTitle); // Set selected job for the upload section
    if (!cv) {
      alert('Please upload your CV before applying.');
      return;
    }
    alert(`You have applied for the ${jobTitle} position with CV: ${cv.name}`);
    // Here, you could implement the logic to send the CV to a server
  };

  return (
    <div className="motor-mechanic-recommendations-container">
      <h2>Motor Mechanic Job Recommendations</h2>
      <p>Here are some job recommendations in the field of Motor Mechanic.</p>

      <div className="job-posts">
        {jobPosts.map((job, index) => (
          <div className="job-card" key={index}>
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <p><strong>Experience:</strong> {job.experience}</p>
            <button className="apply-button" onClick={() => handleApply(job.title)}>
              Apply
            </button>

            {/* Resume upload section */}
            {selectedJob === job.title && (
              <div className="upload-section">
                <input
                  type="file"
                  onChange={handleCvUpload}
                  className="file-input"
                  accept=".pdf, .doc, .docx"
                />
                <p>Selected CV: {cv ? cv.name : 'No CV selected'}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MotorMechanicRecommendations;
