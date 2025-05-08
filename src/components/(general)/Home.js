import React from "react";
import Sidebar from "./Sidebar";
import Questions from "./Questions";
import Navbar from "../(layout)/Navbar";

const Home = () => {
  return (
    <main>
      <Navbar />

      <div className="flex">
        <div className="flex w-full justify-center">
          <Sidebar />
          <Questions />
        </div>
      </div>
    </main>
  );
};

export default Home;
