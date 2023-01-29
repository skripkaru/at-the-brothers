import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <span>© У братьев 2020-{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;