import React, { useState } from "react";
import axios from "axios"; // Axios to make API requests
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './LoginSignup.css'

function LoginSignup() {
  const [isSignup, setIsSignup] = useState(false); // Toggle between login and signup
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // To show errors
  const [successMessage, setSuccessMessage] = useState(""); // To show success messages
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Handle user signup
  const handleSignup = async () => {
    if (username && password) {
      setLoading(true); // Start loading
      try {
        const response = await axios.post("http://localhost:5000/signup", {
          username,
          password,
        });
        setSuccessMessage("Signup successful! You can now log in.");
        setIsSignup(false); // Switch to login after signup
        setErrorMessage(""); // Clear previous errors
      } catch (error) {
        setErrorMessage(error.response?.data?.message || "Signup failed.");
      } finally {
        setLoading(false); // End loading
      }
    } else {
      setErrorMessage("Please fill in all fields.");
    }
  };

  // Handle user login
  const handleLogin = async (e) => {
    e.preventDefault();
    if (username && password) {
      setLoading(true); // Start loading
      try {
        const response = await axios.post("http://localhost:5000/login", {
          username,
          password,
        });
        localStorage.setItem("token", response.data.token); // Assuming a token is returned
        navigate("/"); // Redirect to home page after successful login
      } catch (error) {
        setErrorMessage(error.response?.data?.message || "Login failed. Please try again.");
      } finally {
        setLoading(false); // End loading
      }
    } else {
      setErrorMessage("Please fill in all fields.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>{isSignup ? "Sign Up" : "Login"}</h2>
      <input
        style={styles.input}
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={styles.input}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errorMessage && <p style={styles.error}>{errorMessage}</p>}
      {successMessage && <p style={styles.success}>{successMessage}</p>}
      {isSignup ? (
        <button style={styles.button} onClick={handleSignup} disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      ) : (
        <button style={styles.button} onClick={handleLogin} disabled={loading}>
          {loading ? "Logging In..." : "Login"}
        </button>
      )}
      <p style={styles.switchText}>
        {isSignup ? "Already have an account?" : "Don't have an account yet?"}{" "}
        <span
          style={styles.switchLink}
          onClick={() => {
            setErrorMessage("");
            setSuccessMessage(""); // Clear success messages
            setIsSignup(!isSignup);
          }}
        >
          {isSignup ? "Login" : "Sign Up"}
        </span>
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "300px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  error: {
    color: "red",
  },
  success: {
    color: "green",
  },
  switchText: {
    fontSize: "14px",
  },
  switchLink: {
    color: "#007BFF",
    cursor: "pointer",
  },
};

export default LoginSignup;
