import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const handelToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="footer">
      <span onClick={handelToTop} className="go_top">
        <FaArrowUp />
      </span>
      <div className="footer_first">
        <img src="images/PyA-Logo.png" alt="logo" />
        <div className="footer_btn_title_box">
          <p>
            aqui va texto
          </p>
          
        </div>
      </div>
      <div className="footer_last">
        <span>Accesos Rapidos</span>
        <div className="footer_link_box">
          <Link to={"/basket"}>Bolsa</Link>
          <Link to={"/favorite"}>Favoritos</Link>
        </div>
      </div>
    </footer>
  );
}
