import React from "react";
import { Link } from "react-router-dom"; // Routing ke liye Link

function Header() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          Code<span>Reviewer</span>
        </div>

        <ul className="nav-links">
          <li><Link to="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link></li>
          <li><Link to="/docs" style={{ color: "inherit", textDecoration: "none" }}>Docs</Link></li>
          <li><Link to="/contact" style={{ color: "inherit", textDecoration: "none" }}>Contact</Link></li>
          <li><Link to="/about" style={{ color: "inherit", textDecoration: "none" }}>About</Link></li>
        </ul>

        <button className="login-btn">Sign In</button>

        <div className="menu-icon">☰</div>
      </nav>

      <style>{`
        .navbar {
          background-color: #0c0c0c;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 30px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .logo {
          font-size: 1.6rem;
          font-weight: 600;
          color: #00bcd4;
        }

        .logo span {
          color: white;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 30px;
        }

        .nav-links li {
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .nav-links li:hover {
          color: #00bcd4;
        }

        .login-btn {
          background-color: #00bcd4;
          border: none;
          padding: 8px 16px;
          border-radius: 8px;
          color: white;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .login-btn:hover {
          background-color: #0197a6;
        }

        .menu-icon {
          display: none;
          font-size: 1.8rem;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .menu-icon {
            display: block;
          }
        }
      `}</style>
    </>
  );
}

export default Header;
