import React, { useState } from "react";
import OtpInput from "./OtpInput";

const LoginOtpForm = () => {
  const [mobileNumber, setMobileNumber] = useState();
  const [showOtp, setShowOtp] = useState(false);
  const handleMobileNumber = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /[^0-9]/g;
    if (mobileNumber.length < 10 || regex.test(mobileNumber)) {
      alert("invalid phone number");
      return;
    }
    // call backend api
    setShowOtp(true);
  };
  const onOtpSubmit = (otp) => {
    console.log("otp", otp);
  };
  return (
    <div>
      {showOtp ? (
        <form onSubmit={handleSubmit}>
          <input value={mobileNumber} onChange={handleMobileNumber} />
          <button>Submit</button>
        </form>
      ) : (
        <div>
          <h3>Otp sent to your mobile number {mobileNumber}</h3>
          <div>
            <OtpInput length={6} onOtpSubmit={onOtpSubmit} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginOtpForm;
