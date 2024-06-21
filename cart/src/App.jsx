import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaymentPage from './components/PaymentPage/PaymentPage';
import GooglePayConfirmation from './components/GooglePayConfirmation';
import PaytmConfirmation from './components/PaytmConfirmation';
import NetBankingConfirmation from './components/NetBankingConfirmation';
import WalletConfirmation from './components/WalletConfirmation';
import PaymentSuccess from './components/PaymentSuccessfulPage/PaymentSuccessPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaymentPage />} />
        <Route path="/gpay-confirmation" element={<GooglePayConfirmation />} />
        <Route path="/paytm-confirmation" element={<PaytmConfirmation />} />
        <Route path="/netbanking-confirmation" element={<NetBankingConfirmation />} />
        <Route path="/wallet-confirmation" element={<WalletConfirmation />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
    </Router>
  );
};

export default App;
