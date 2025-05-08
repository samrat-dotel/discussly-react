import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../../images/discusslyLogo.png";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (credentials.password !== credentials.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Simulate successful signup
    alert("Signup successful!");
    navigate("/login");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-2xl shadow-2xl flex w-full max-w-4xl overflow-hidden">
        {/* Left Side - Form */}
        <div className="w-3/5 p-8">
          <div className="mb-6">
            <img src={image} alt="Logo" className="w-60" />
          </div>
          <h2 className="text-3xl font-bold text-[#38B0CC] mb-6">
            Create your Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-3">
              <div className="w-1/3">
                <label className="text-sm font-medium">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={credentials.firstName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-2 py-1.5"
                  required
                />
              </div>
              <div className="w-1/3">
                <label className="text-sm font-medium">Middle Name</label>
                <input
                  type="text"
                  name="middleName"
                  value={credentials.middleName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-2 py-1.5"
                />
              </div>
              <div className="w-1/3">
                <label className="text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={credentials.lastName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-2 py-1.5"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-2 py-1.5"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-2 py-1.5"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={credentials.confirmPassword}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-2 py-1.5"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#38B0CC] hover:bg-[#38B0DD] text-white py-2 rounded transition duration-200"
            >
              Sign Up
            </button>

            <p className="text-sm text-gray-600 mt-2">
              Already have an account?
              <Link to="/login" className="text-[#38B0CC] ml-1 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>

        {/* Right Side */}
        <div className="w-2/5 bg-[#38B0CC] hover:bg-[#38B0DD] text-white flex flex-col justify-center items-center p-10">
          <h2 className="text-3xl font-bold mb-2">Welcome</h2>
          <p className="mb-6 text-center">
            Fill up the form and start your journey.
          </p>
          <Link
            to="/login"
            className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-indigo-600 transition"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
