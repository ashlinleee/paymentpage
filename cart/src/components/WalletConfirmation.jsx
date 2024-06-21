import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WalletConfirmation = () => {
  const [walletDetails, setWalletDetails] = useState({
    walletNumber: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWalletDetails({ ...walletDetails, [name]: value });
  };

  const handleConfirmPayment = (event) => {
    event.preventDefault();
    // Implement the logic for Wallet confirmation here
    console.log(`Confirming Wallet Payment with details:`, walletDetails);
    // Assuming Wallet payment confirmation is successful
    navigate('/payment-success');
  };

  return (
    <div className="container">
      <h1>Wallet Confirmation</h1>
      <form onSubmit={handleConfirmPayment}>
        <label>
          Wallet Number:
          <input
            type="text"
            name="walletNumber"
            value={walletDetails.walletNumber}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={walletDetails.password}
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

export default WalletConfirmation;
