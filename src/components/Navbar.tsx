import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="home-section">
          <div className="logo-seciton">
            <img id="logo" src="./logo.svg" alt="logo" />
            <div>Sharpen AI</div>
          </div>
        </div>
        <div className="text-section">
          <div className="navElements">How It Works</div>
          <div className="navElements">What Does it Do?</div>
          <div className="navElements">Who is Sharpen For?</div>
          <div className="navElements">Trusted & Secure</div>
          <div className="navElements">FAQ</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
