import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white">TaskManager</h2>
          <p className="text-sm mt-2">
            Stay organized and productive — all in one place.
          </p>
        </div>

        {/* Middle Section - Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/buttons" className="hover:text-white transition-colors">
            Buttons
          </Link>
          <Link to="/cards" className="hover:text-white transition-colors">
            Cards
          </Link>
          <Link to="/footer" className="hover:text-white transition-colors">
            Footer
          </Link>
        </div>

        {/* Right Section - Socials */}
        <div className="flex gap-4">
          <a href="#" aria-label="Twitter" className="hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-white">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} TaskManager. All rights reserved. 
          <br />
          Built by Zawadii.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
