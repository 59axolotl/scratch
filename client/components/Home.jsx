import React from 'react';
import '../src/styles.scss';
import Navbar from './Navbar';
import UserUploads from './UserUploads';
import Feed from './Feed';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="bg-dark-subtle">
        <UserUploads />
        <Feed />
      </main>
      <Footer />
    </>
  );
};

export default Home;
