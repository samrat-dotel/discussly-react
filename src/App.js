import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/(auth)/Login";
import Signup from "./components/(auth)/Signup";
import ForgotPassword from "./components/(auth)/ForgetPassword";
import Home from "./components/(general)/Home";
import Answers from "./components/(general)/Answer";
import ProfilePage from "./components/(profile)/ProfilePage";
import AskQuestionPage from "./components/(general)/AskQuestion";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/register" element={<Signup />} />

          <Route path="/login" element={<Login />} />

          <Route path="/forget-password" element={<ForgotPassword />} />

          <Route path="/:id/answers" element={<Answers />} />

          <Route path="/profile" element={<ProfilePage />} />

          <Route path="/ask-question" element={<AskQuestionPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
