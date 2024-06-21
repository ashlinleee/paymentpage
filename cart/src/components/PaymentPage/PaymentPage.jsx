import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentPage.css';

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const navigate = useNavigate();

  const handlePayment = (event) => {
    event.preventDefault();
    
    console.log(`Processing payment via ${selectedMethod}`);
    
    if (selectedMethod === 'GPay' || selectedMethod === 'Paytm') {
      navigate(`/${selectedMethod.toLowerCase()}-confirmation`);
    } else if (selectedMethod === 'NetBanking') {
      navigate('/netbanking-confirmation');
    } else if (selectedMethod === 'Wallet') {
      navigate('/wallet-confirmation');
    } else {
      navigate('/payment-success');
    }
  };

  return (
    <div className="container">
      <h1>Select Payment Method</h1>
      <form onSubmit={handlePayment}>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="COD"
            onChange={() => setSelectedMethod('COD')}
          />
          Cash on Delivery
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="Wallet"
            onChange={() => setSelectedMethod('Wallet')}
          />
          Wallet
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="GPay"
            onChange={() => setSelectedMethod('GPay')}
          />
          Google Pay
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="Paytm"
            onChange={() => setSelectedMethod('Paytm')}
          />
          Paytm
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="NetBanking"
            onChange={() => setSelectedMethod('NetBanking')}
          />
          Net Banking
        </label>
        <br />
        <button type="submit" disabled={!selectedMethod}>
          Proceed to Pay
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
