import React, { useState } from 'react';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";

const TwoFactorAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const setupRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha', {}, getAuth());
  };

  const sendOTP = () => {
    setupRecaptcha();
    const auth = getAuth();
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then(confirmationResult => {
        window.confirmationResult = confirmationResult;
      });
  };

  const verifyOTP = () => {
    window.confirmationResult.confirm(verificationCode).then(result => {
      console.log('User verified:', result.user);
    });
  };

  return (
    <div>
      <h2>Two-Factor Authentication</h2>
      <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <button onClick={sendOTP}>Send OTP</button>
      <input type="text" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
      <button onClick={verifyOTP}>Verify</button>
      <div id="recaptcha"></div>
    </div>
  );
};

export default TwoFactorAuth;
