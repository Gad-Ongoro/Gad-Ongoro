import React from 'react';

const Footer = () => {
  return (
    <footer className="h-28 flex items-center justify-center bg-gray-100">
      <p className="text-center text-base text-gray-900">
        &copy; {new Date().getFullYear()}. All rights reserved | Designed & Developed by 
        <span className="pacifico-regular"> Gad Ongoro</span>
      </p>
    </footer>
  );
};

export default Footer;
