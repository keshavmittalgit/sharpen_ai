import React, { useState } from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-seciton">
        <img id="logo" src="./logo.svg" alt="logo" />
        <div>Sharpen AI</div>
      </div>
      <div className={`text-section ${isOpen ? "active" : ""}`}>
        <div className="navElements">How It Works</div>
        <div className="navElements">What Does it Do?</div>
        <div className="navElements">Who is Sharpen For?</div>
        <div className="navElements">Trusted & Secure</div>
        <div className="navElements">FAQ</div>
      </div>
      {/* Added 'open' class to hamburger when menu is expanded */}
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;