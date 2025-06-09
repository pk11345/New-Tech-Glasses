import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center px-6 py-8 bg-black text-gray-400 text-sm">
      <p>© {new Date().getFullYear()} New Tech Glasses. All rights reserved.</p>
      <p className="mt-2">Designed with ❤️ by Pankaj Kumar</p>
    </footer>
  );
};

export default Footer;
