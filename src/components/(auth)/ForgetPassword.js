import React, { useState } from "react";
import image from "../../images/discusslyLogo.png";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { BiArrowBack } from "react-icons/bi";
import forgotPasswordImage from "../../images/forgot_password.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Email is required!");
      return;
    }

    alert(`A reset link has been sent to ${email}`);
    setEmail("");
  };

  return (
    <div className="flex flex-col justify-center items-center py-2 bg-background min-h-screen">
      <div className="container flex flex-col items-center justify-center w-full px-4 sm:px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-full max-w-4xl overflow-hidden">
          <div className="w-3/5 p-5">
            <Link to="/" className="text-left">
              <img src={image} alt="Logo" className="w-60" />
            </Link>
            <div className="py-16">
              <p className="text-3xl font-bold text-[#38B0CC]">
                Forgot Password?
              </p>
              <p className="py-4 text-sm text-gray-500">
                Enter your email and we'll send you a link to reset your
                password.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-start px-6"
            >
              <label htmlFor="email" className="text-sm font-medium mb-1">
                Email
              </label>
              <div className="flex items-center border-b border-gray-300 w-full mb-6 py-1">
                <HiOutlineMail className="text-gray-500 w-5 h-5 mr-2" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full outline-none text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#38B0CC] hover:bg-[#38B0DD] text-white py-2 rounded transition text-sm font-medium"
              >
                Send Email
              </button>

              <Link
                to="/login"
                className="flex items-center mt-8 text-sm text-gray-500 hover:underline"
              >
                <BiArrowBack className="mr-1" />
                Back to login
              </Link>
            </form>
          </div>

          <div className="w-2/5 bg-[#38B0CC] text-white flex items-center justify-center p-10">
            <img
              src={forgotPasswordImage}
              alt="Forgot Password"
              className="w-[200px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
