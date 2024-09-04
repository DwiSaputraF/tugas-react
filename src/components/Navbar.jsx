import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0">
        <div className="text-2xl font-bold">
          <Link to="/">HealthHub</Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-blue-200">Home</Link>
          <Link to="/about" className="hover:text-blue-200">About</Link>
          <Link to="/contact" className="hover:text-blue-200">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-600 text-white">
          <div className="flex flex-col space-y-4 py-4 px-6">
            <Link to="/" className="hover:text-blue-200" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="hover:text-blue-200" onClick={toggleMenu}>About</Link>
            <Link to="/contact" className="hover:text-blue-200" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
