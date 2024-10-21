// src/components/JobForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const JobForm = ({ setRecommendations }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [location, setLocation] = useState('');
    const [fieldsOfInterest, setFieldsOfInterest] = useState('');
    const [skills, setSkills] = useState('');
    const [qualifications, setQualifications] = useState('');
    const [experience, setExperience] = useState('');
    const [preferredLocation, setPreferredLocation] = useState('');
    const [linkedinProfile, setLinkedinProfile] = useState('');

    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const userData = {
            name,
            age,
            location,
            fields_of_interest: fieldsOfInterest.split(','),
            skills: skills.split(','),
            qualifications,
            experience,
            preferred_location: preferredLocation,
            linkedin_profile: linkedinProfile,
        };

        try {
            const response = await axios.post('http://127.0.0.1:5000/api/recommend', userData);
            setRecommendations(response.data); // Store recommendations
            history.push('/recommendations'); // Redirect to recommendations page
        } catch (error) {
            console.error('Error fetching recommendations:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Job Recommendation Form</h2>
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
            <input type="number" placeholder="Age" onChange={(e) => setAge(e.target.value)} required />
            <input type="text" placeholder="Location" onChange={(e) => setLocation(e.target.value)} required />
            <input type="text" placeholder="Fields of Interest (comma separated)" onChange={(e) => setFieldsOfInterest(e.target.value)} required />
            <input type="text" placeholder="Skills (comma separated)" onChange={(e) => setSkills(e.target.value)} required />
            <input type="text" placeholder="Qualifications" onChange={(e) => setQualifications(e.target.value)} required />
            <input type="number" placeholder="Experience (in years)" onChange={(e) => setExperience(e.target.value)} required />
            <input type="text" placeholder="Preferred Work Location" onChange={(e) => setPreferredLocation(e.target.value)} required />
            <input type="text" placeholder="LinkedIn Profile URL" onChange={(e) => setLinkedinProfile(e.target.value)} required />
            <button type="submit">Submit</button>
        </form>
    );
};

export default JobForm;
