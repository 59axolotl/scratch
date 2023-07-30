import React from 'react';
import '../src/styles.scss';
import Navbar from './Navbar';
import UserUploads from './UserUploads';
import Feed from './Feed';

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="bg-dark-subtle">
        <UserUploads />
        <Feed />
      </main>
    </>
  );
};

export default Home;
