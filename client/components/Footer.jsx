import React from 'react';
import '../src/styles.scss';

const Footer = () => {
  return (
    <footer className="text-muted py-2">
      <div className="container">
        <p className="float-end mb-1">
          <a href="#">Back to top</a>
        </p>
        <p className="m-4">Axolotl Flix</p>
      </div>
    </footer>
  );
};

export default Footer;
