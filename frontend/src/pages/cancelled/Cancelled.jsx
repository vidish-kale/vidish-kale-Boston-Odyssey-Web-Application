import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./cancelled.css";
const Cancelled = () => {
  return (
    <>
      <Navbar />

      <div className="cancelled">
        <div className="cContainer">
          <h1>Payment Cancelled</h1>
          <p>Your payment was cancelled. Please try again.</p>
        </div>
      </div>
    </>
  );
};

export default Cancelled;
