import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NetBankingConfirmation = () => {
  const [bankDetails, setBankDetails] = useState({
    accountNumber: '',
    ifsc: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBankDetails({ ...bankDetails, [name]: value });
  };

  const handleConfirmPayment = (event) => {
    event.preventDefault();
    // Implement the logic for Net Banking confirmation here
    console.log(`Confirming Net Banking with details:`, bankDetails);
    // Assuming Net Banking confirmation is successful
    navigate('/payment-success');
  };

  return (
    <div className="container">
      <h1>Net Banking Confirmation</h1>
      <form onSubmit={handleConfirmPayment}>
        <label>
          Account Number:
          <input
            type="text"
            name="accountNumber"
            value={bankDetails.accountNumber}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          IFSC:
          <input
            type="text"
            name="ifsc"
            value={bankDetails.ifsc}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={bankDetails.password}
            onChange={handleInputChange}
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

export default NetBankingConfirmation;
