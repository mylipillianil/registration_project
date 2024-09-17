import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phoneNumber: "",
    gender: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    agree: false,
    accountType: "",
    nationality: "",
    company: "",
    companySector: "",
    companyAddress: "",   
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === "checkbox" ? checked : value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted", formData); 

    try {
        console.log("Starting fetch request...");
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        console.log("Fetch request completed.");
        
        if (response.ok) {
            console.log("Registration successful!");
        } else {
            console.error("Registration failed.");
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
};

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="middleName">Middle Name:</label>
        <input
          type="text"
          id="middleName"
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="passwordConfirmation">Confirm Password:</label>
        <input
          type="password"
          id="passwordConfirmation"
          name="passwordConfirmation"
          value={formData.passwordConfirmation}
          onChange={handleChange}
          required
        />
      </div>

      

      <div className="form-group">
        <label htmlFor="accountType">Account Type:</label>
        <input
          type="text"
          id="accountType"
          name="accountType"
          value={formData.accountType}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="nationality">Nationality:</label>
        <select
          id="nationality"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
          required
        >
          <option value="">Select Nationality</option>
          <option value="American">American</option>
          <option value="Indian">Indian</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="company">Company:</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="companySector">Company Sector:</label>
        <input
          type="text"
          id="companySector"
          name="companySector"
          value={formData.companySector}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="companyAddress">Company Address:</label>
        <input
          type="text"
          id="companyAddress"
          name="companyAddress"
          value={formData.companyAddress}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group1">
        <label htmlFor="agree">Agree to Terms:</label>
        <input
          type="checkbox"
          id="agree"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="submit-button">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
