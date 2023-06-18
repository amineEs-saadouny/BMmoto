import React from "react";
import "../Style/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a
          href="https://web.facebook.com/bm.moto.ma"
          target="_blank"
          className="fa fa-facebook"
        ></a>
        <a
          href="https://www.instagram.com/_bm_moto/"
          target="_blank"
          className="fa fa-instagram"
        ></a>
        <a href="tel:+212521006506" className="fa fa-phone"></a>
        <a href="mailto:bmmoto0@gmail.com" className="fa fa-envelope"></a>
      </div>
      <div className="footer-copyrights">
        BM Moto Copyrights &copy; | made by Es-saadouny
      </div>
    </footer>
  );
}

export default Footer;
