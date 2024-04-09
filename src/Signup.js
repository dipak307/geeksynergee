import React, { useState } from 'react';

function Signup() {
  const [userData, setUserData] = useState({
    name: '',
    password: '',
    email: '',
    phone: '',
    profession: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(userData));
    setUserData({
      name: '',
      password: '',
      email: '',
      phone: '',
      profession: ''
    });
    alert('User data saved successfully!');
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>User Signup</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={userData.name} onChange={handleChange} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" value={userData.password} onChange={handleChange} required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={userData.email} onChange={handleChange} required />
          </div>
          <div>
            <label>Phone Number:</label>
            <input type="tel" name="phone" value={userData.phone} onChange={handleChange} required />
          </div>
          <div>
            <label>Profession:</label>
            <select name="profession" value={userData.profession} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Student">Student</option>
              <option value="Engineer">Engineer</option>
              <option value="Doctor">Doctor</option>
              <option value="Teacher">Teacher</option>
            </select>
          </div>
          <button type="submit">Signup</button>
            <p> if Already have an account <a href='/login'>click here to login</a> </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
