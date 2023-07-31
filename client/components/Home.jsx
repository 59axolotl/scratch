import React, { useState } from 'react';
import '../src/styles.scss';
import Navbar from './Navbar';
import UserUploads from './UserUploads';
import Feed from './Feed';
import Footer from './Footer';


const Home = ({creator, setCreator}) => {


  return (
    <>
      <Navbar />
      <main className="bg-dark-subtle">
        <UserUploads creator ={creator} setCreator ={setCreator} />
        <Feed />
      </main>
      <Footer />
    </>
  );
};

export default Home;
