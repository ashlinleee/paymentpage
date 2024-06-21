import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GooglePayConfirmation = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleConfirmPayment = (event) => {
    event.preventDefault();
    // Implement the logic for OTP confirmation here
    console.log(`Confirming Google Pay with OTP: ${otp}`);
    // Assuming OTP confirmation is successful
    navigate('/payment-success');
  };

  return (
    <div className="container">
      <h1>Google Pay Confirmation</h1>
      <form onSubmit={handleConfirmPayment}>
        <label>
          Enter OTP:
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">
          Confirm Payment
        </button>
      </form>
    </div>
  );
};

export default GooglePayConfirmation;
