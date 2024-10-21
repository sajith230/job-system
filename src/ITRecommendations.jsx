import React, { useState } from 'react';
import './ITRecommendations.css'; // Your styling file

const ITRecommendations = () => {
  const [selectedJob, setSelectedJob] = useState(null); // State to track which job is currently being applied for
  const [selectedFiles, setSelectedFiles] = useState({}); // Store selected files for each job

  // List of IT job posts
  const jobPosts = [
    {
      title: 'Frontend Developer',
      company: 'Tech Solutions Ltd.',
      salary: '$60,000 - $80,000 per year',
      experience: '3+ years',
      bgColor: '#FFDDC1',
    },
    {
      title: 'Backend Engineer',
      company: 'Innovatech',
      salary: '$70,000 - $90,000 per year',
      experience: '4+ years',
      bgColor: '#F5CBA7',
    },
    {
      title: 'Full Stack Developer',
      company: 'Global IT Services',
      salary: '$80,000 - $100,000 per year',
      experience: '5+ years',
      bgColor: '#AED6F1',
    },
    {
      title: 'Data Scientist',
      company: 'AI Analytics',
      salary: '$90,000 - $120,000 per year',
      experience: '2+ years',
      bgColor: '#F9E79F',
    },
    {
      title: 'DevOps Engineer',
      company: 'Cloudify Technologies',
      salary: '$85,000 - $105,000 per year',
      experience: '3+ years',
      bgColor: '#D2B4DE',
    },
    {
      title: 'Mobile App Developer',
      company: 'AppMasters',
      salary: '$75,000 - $95,000 per year',
      experience: '2+ years',
      bgColor: '#A9DFBF',
    },
    {
      title: 'Cybersecurity Specialist',
      company: 'SecureIT Global',
      salary: '$90,000 - $110,000 per year',
      experience: '4+ years',
      bgColor: '#FAD7A0',
    },
    {
      title: 'AI Engineer',
      company: 'NextGen AI Labs',
      salary: '$100,000 - $130,000 per year',
      experience: '3+ years',
      bgColor: '#F5B7B1',
    },
  ];

  // Function to handle applying to a specific job
  const handleApply = (jobTitle) => {
    setSelectedJob(jobTitle); // Set the job title that the user is applying for
  };

  // Function to handle file input change for each job
  const handleFileChange = (event, jobTitle) => {
    setSelectedFiles({ ...selectedFiles, [jobTitle]: event.target.files[0] });
  };

  // Function to submit the CV for a specific job
  const handleSubmitCV = (jobTitle) => {
    const file = selectedFiles[jobTitle];
    if (file) {
      alert(`You have applied for the ${jobTitle} position with your CV: ${file.name}`);
      // Reset the state for the submitted job after submission
      setSelectedFiles((prevFiles) => {
        const updatedFiles = { ...prevFiles };
        delete updatedFiles[jobTitle];
        return updatedFiles;
      });
      setSelectedJob(null);
    } else {
      alert('Please upload your CV before submitting.');
    }
  };

  return (
    <div className="it-recommendations-container">
      <center>
        <h2 className="thank-you-message">Thank You for Your Interest</h2>
        <p className="info-text">Here are some IT job recommendations based on your profile:</p>
        <div className="job-posts">
          {jobPosts.map((job, index) => (
            <div
              className="job-card"
              key={index}
              style={{ backgroundColor: job.bgColor }}
            >
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Salary:</strong> {job.salary}</p>
              <p><strong>Experience:</strong> {job.experience}</p>

              {/* Apply Button */}
              <button className="apply-button" onClick={() => handleApply(job.title)}>
                Apply
              </button>

              {/* Show file upload form only for the selected job */}
              {selectedJob === job.title && (
                <div className="upload-section">
                  <h4>Upload Your CV for {job.title}</h4>
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(e, job.title)}
                    accept=".pdf,.doc,.docx"
                  />
                  <button
                    className="submit-cv-button"
                    onClick={() => handleSubmitCV(job.title)}
                  >
                    Submit CV
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

export default ITRecommendations;
