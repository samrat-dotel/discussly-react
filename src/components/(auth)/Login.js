import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye, FaUser, FaLock } from "react-icons/fa";
import image from "../../images/discusslyLogo.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = credentials;

    if (!username.trim()) {
      alert("Username is required!");
      return;
    }

    if (!password.trim()) {
      alert("Password is required!");
      return;
    }

    // Frontend-only mock validation
    const mockUsername = "testuser";
    const mockPassword = "testpass";

    if (username === mockUsername && password === mockPassword) {
      localStorage.setItem("token", "mock-token-123");
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <main>
      <div className="flex flex-col justify-center items-center py-2 min-h-screen bg-gray-100">
        <div className="flex flex-col items-center justify-center w-full px-6">
          <div className="bg-white rounded-2xl shadow-2xl flex w-full max-w-4xl">
            <div className="w-3/5 p-8">
              <img src={image} alt="Logo" className="w-60 mb-6" />
              <h2 className="text-3xl font-bold text-[#38B0CC] mb-8">
                Log into your Account
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="username" className="block text-left mb-1">
                    Username
                  </label>
                  <div className="flex items-center border rounded px-3 py-2">
                    <FaUser className="text-gray-500 mr-2" />
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Enter your username"
                      className="w-full outline-none"
                      onChange={handleChange}
                      value={credentials.username}
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label htmlFor="password">Password</label>
                    <Link
                      to="/forget-password"
                      className="text-sm text-[#38B0CC] hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="flex items-center border rounded px-3 py-2">
                    <FaLock className="text-gray-500 mr-2" />
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      className="w-full outline-none"
                      onChange={handleChange}
                      value={credentials.password}
                      required
                    />
                    <button
                      type="button"
                      className="ml-2 text-gray-600"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full text-white font-semibold py-2 rounded bg-[#38B0CC] hover:bg-[#38B0DD]"
                >
                  Login
                </button>
              </form>

              <p className="mt-6 text-sm text-gray-500 text-center">
                Don't have an account?
                <Link
                  to="/register"
                  className="text-[#38B0CC] font-semibold ml-1 hover:underline"
                >
                  Sign up
                </Link>
              </p>

              <p className="mt-4 text-sm text-[#38B0CC] text-center">
                <Link to="/resendToken">Resend Token</Link>
              </p>
            </div>

            {/* Right Panel */}
            <div className="w-2/5 bg-[#38B0CC] hover:bg-[#38B0DD] text-white rounded-tr-2xl rounded-br-2xl flex flex-col justify-center items-center p-12">
              <h2 className="text-3xl font-bold mb-2">Welcome</h2>
              <p className="mb-6">If you don’t have an account</p>
              <Link
                to="/register"
                className="bg-white text-[#38B0CC] px-8 py-2 rounded-full font-semibold hover:text-[#38B0DD]"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
