import React, { useEffect, useRef, useState } from "react";
import "./otpinput.css";
const OtpInput = ({ length = 4, onOtpSubmit }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);

  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0]?.focus();
    }
  }, []);

  const handleChange = (index, e) => {
    let value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    if (value && index < length - 1 && inputRef.current[index + 1]) {
      inputRef.current[index + 1].focus();
    }
    setOtp(newOtp);
    if (newOtp.join("").length === length) {
      onOtpSubmit(newOtp.join(""));
    }
  };
  const handleClick = (index) => {
    inputRef.current[index].setSelectionRange(1, 1);
    if (index > 0 && !otp[index - 1]) {
      inputRef.current[otp.indexOf("")].focus();
    }
  };
  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRef.current[index - 1]
    ) {
      inputRef.current[index - 1].focus();
    }
  };
  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            key={index}
            type="text"
            value={value}
            ref={(input) => (inputRef.current[index] = input)}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="input-otp"
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
