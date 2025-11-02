import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            MyWebsite
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/TaskManager.jsx" className="text-gray-700 hover:text-blue-600">
              TaskManager
            </Link>
            <Link to="/Button.jsx" className="text-gray-700 hover:text-blue-600">
              Button
            </Link>
            <Link to="/Card.jsx" className="text-gray-700 hover:text-blue-600">
              Card
            </Link>
            <Link to="/Footer.jsx" className="text-gray-700 hover:text-blue-600">
              Footer
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
