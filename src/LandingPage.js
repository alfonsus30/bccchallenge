import React from "react";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";
import "./LandingPage.css";
function LandingPage() {
  return (
    <div className="LandingPage">
      <Navbar />
      <div className="container">
        <h1 className="page-title">
          Temukan lebih dari 1000 foto hasil karya fotografer hebat di sini
        </h1>
        <SearchBox />
      </div>
    </div>
  );
}

export default LandingPage;
