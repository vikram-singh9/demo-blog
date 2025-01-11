'use client'
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="flex justify-between items-center px-6 py-4 bg-white">
        {/* Logo Section */}
        <div>
          <h1 className="text-3xl font-bold font-inter">Logo</h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="flex items-center md:hidden">
          <GiHamburgerMenu
            size={30}
            className="cursor-pointer"
            onClick={toggleMobileMenu}
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          <MdDarkMode size={30} className="cursor-pointer" />
          <li className="cursor-pointer">Blogs</li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Newsletter</li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-50">
          <ul className="flex flex-col items-center gap-4 py-4">
            <MdDarkMode size={30} className="cursor-pointer" />
            <li className="cursor-pointer">Blogs</li>
            <li className="cursor-pointer">Projects</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Newsletter</li>
          </ul>
        </div>
      )}

      {/* Divider */}
      <hr className="mt-4 border-t border-gray-300" />
    </div>
  );
};

export default Navbar;
