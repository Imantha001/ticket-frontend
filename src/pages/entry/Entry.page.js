import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import LoginPage from "../../components/login/login.components";
import ResetPassword from '../../components/resetpassword/passwordreset.components';
import '../entry/entry.style.css';

export const Entry = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentPage, setCurrentPage] = useState('login'); // Track the current page

  // Handle input changes
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
  };

  // Handle form submission (on Login button click)
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    // Clear the fields after login
    setEmail('');
    setPassword('');
  };

  // Function to switch between pages
  const switchPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="entry-page">
      <Card className="text-center p-3 m-3 entry-card">
        <Card.Body>
          {currentPage === 'login' && (
            <LoginPage
              handleOnChange={handleOnChange}
              email={email}
              password={password}
              handleLogin={handleLogin}
              switchToResetPassword={() => switchPage('reset')} // Pass function to switch pages
            />
          )}

          {currentPage === 'reset' && (
            <ResetPassword
              handleOnChange={handleOnChange}
              email={email}
              handleLogin={handleLogin}
              switchToLogin={() => switchPage('login')} // Pass function to switch pages
            />
          )}
        </Card.Body>
      </Card>
    </div>
  );
};
