import React from 'react';
import Login from './Login';
import Register from './Register';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const LogReg = (props) => {
  return (
    <>
      <Navbar />
      <main className="bg-dark-subtle">
        <div className="album py-5 bg-dark" style={{ minHeight: '100vh' }}>
          <div className="log-reg-container">
            <Login />
            <br></br>
            <Register />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LogReg;
