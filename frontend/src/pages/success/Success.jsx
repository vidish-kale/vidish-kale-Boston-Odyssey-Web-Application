import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./success.css";
const Success = () => {
  return (
    <>
      <Navbar />
      <div className="success">
        <div className="sContainer">
          <h1>Payment Successful</h1>
          <p>
            Thank you for your payment. We will send you an email with your
            booking details.
          </p>
        </div>
      </div>
    </>
  );
};

export default Success;
