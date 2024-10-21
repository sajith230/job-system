import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './FinanceRecommendations.css';  // Include styles

const FinanceRecommendations = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};  // Access form data

  // State to store resumes for each job post
  const [resumes, setResumes] = useState({});

  // Expanded list of finance job posts
  const jobPosts = [
    {
      id: 1,
      title: 'Financial Analyst',
      company: 'FinServe Inc.',
      salary: '$70,000 - $90,000 per year',
      experience: '2+ years',
      bgColor: '#D6EAF8',
    },
    {
      id: 2,
      title: 'Investment Banker',
      company: 'InvestBank Co.',
      salary: '$100,000 - $150,000 per year',
      experience: '3+ years',
      bgColor: '#F9E79F',
    },
    {
      id: 3,
      title: 'Accounting Manager',
      company: 'Accountify Solutions',
      salary: '$80,000 - $110,000 per year',
      experience: '5+ years',
      bgColor: '#F5CBA7',
    },
    {
      id: 4,
      title: 'Tax Consultant',
      company: 'TaxPro Advisors',
      salary: '$60,000 - $80,000 per year',
      experience: '2+ years',
      bgColor: '#FFDDC1',
    },
    {
      id: 5,
      title: 'Risk Analyst',
      company: 'RiskGuard Group',
      salary: '$75,000 - $95,000 per year',
      experience: '3+ years',
      bgColor: '#AED6F1',
    },
    {
      id: 6,
      title: 'Budget Analyst',
      company: 'BudgetWise Corp.',
      salary: '$65,000 - $85,000 per year',
      experience: '2+ years',
      bgColor: '#FADBD8',
    },
    {
      id: 7,
      title: 'Financial Planner',
      company: 'FuturePlan Financial',
      salary: '$70,000 - $90,000 per year',
      experience: '4+ years',
      bgColor: '#EBDEF0',
    },
    {
      id: 8,
      title: 'Treasury Analyst',
      company: 'Treasury Solutions',
      salary: '$80,000 - $100,000 per year',
      experience: '3+ years',
      bgColor: '#EAEDED',
    },
    {
      id: 9,
      title: 'Compliance Officer',
      company: 'Regulatory Advisors',
      salary: '$75,000 - $95,000 per year',
      experience: '3+ years',
      bgColor: '#F9E79F',
    },
    {
      id: 10,
      title: 'Loan Officer',
      company: 'LoanStar Financial',
      salary: '$55,000 - $75,000 per year',
      experience: '2+ years',
      bgColor: '#D2B4DE',
    },
  ];

  // Handle file selection for a specific job
  const handleFileChange = (jobId, event) => {
    const file = event.target.files[0];
    setResumes((prevResumes) => ({
      ...prevResumes,
      [jobId]: file,
    }));
  };

  // Handle resume submission for a specific job
  const handleSubmitResume = (jobId, jobTitle) => {
    if (resumes[jobId]) {
      alert(`Resume submitted for ${jobTitle}!`);
      // Add logic here to handle the resume submission, e.g., send it to a server
    } else {
      alert("Please upload your resume before submitting.");
    }
  };

  return (
    <div className="finance-recommendations-container">
      <center>
        <h2 className="recommendations-title">Finance Job Recommendations</h2>
        <p className="info-text">Here are some job recommendations based on your interest in Finance:</p>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Experience:</strong> {formData.experience}</p>

        <div className="job-posts">
          {jobPosts.map((job) => (
            <div
              className="job-card"
              key={job.id}
              style={{ backgroundColor: job.bgColor }} // Apply different background color
            >
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Salary:</strong> {job.salary}</p>
              <p><strong>Experience:</strong> {job.experience}</p>
              <button className="apply-button">
                Apply
              </button>

              {/* Resume upload section for each job */}
              <div className="upload-section">
                <h4>Upload Your Resume for {job.title}</h4>
                <input
                  type="file"
                  onChange={(event) => handleFileChange(job.id, event)}
                  accept=".pdf,.doc,.docx"
                />
                <button onClick={() => handleSubmitResume(job.id, job.title)}>
                  Submit Resume
                </button>
              </div>
            </div>
          ))}
        </div>
      </center>
    </div>
  );
};

export default FinanceRecommendations;
