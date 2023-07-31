import React from 'react';
import Login from './Login';
import Register from './Register';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const LogReg = ({creator, setCreator}) => {
  return (
    <>
      <Navbar />
      <main className="bg-dark-subtle">
        {/* <div className="album py-5 bg-dark" style={{ minHeight: '100vh' }}> */}
        <div className="d-flex flex-column align-items-center">
          <Login />
          <br></br>
          <Register/>
        </div>
        {/* </div> */}
      </main>
      <Footer />
    </>
  );
};

export default LogReg;
