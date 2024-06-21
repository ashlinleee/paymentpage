import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaytmConfirmation = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleConfirmPayment = (event) => {
    event.preventDefault();
    // Implement the logic for OTP confirmation here
    console.log(`Confirming Paytm with OTP: ${otp}`);
    // Assuming OTP confirmation is successful
    navigate('/payment-success');
  };

  return (
    <div className="container">
      <h1>Paytm Confirmation</h1>
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

export default PaytmConfirmation;
