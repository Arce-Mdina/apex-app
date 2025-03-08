import React from "react";

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          
          <ul><h3>Quick Links</h3>
            <div style={{ fontWeight: "bold" }}>Basic</div>
            <li>
              <a href="https://malta-guide.filfla.eu">Malta Guide</a>
            </li>
            <li>
              <a href="https://lehman-brothers.filfla.eu">Lehman Brothers Case Study</a>
            </li>
            <br></br>
            <div style={{ fontWeight: "bold" }}>Pro</div>
            <li>
              <a href="https://crypto.filfla.eu">Cryptotracker</a>
            </li>
            <li>
              <a href="https://bible-verse.filfla.eu">Bible Verse</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Copyright</h3>
          <p>© 2024 - {currentYear} Filfla.eu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
