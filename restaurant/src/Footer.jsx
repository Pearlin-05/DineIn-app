import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-black text-white text-center py-4">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} DineIn. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
