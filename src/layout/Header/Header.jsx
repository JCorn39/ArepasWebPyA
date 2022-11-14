import React, { useContext, useEffect, useRef } from "react";
import "./Header.css";
import { AiOutlineShopping } from "react-icons/ai";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";
import { HiOutlineUserAdd } from "react-icons/hi";
import {
  ProductContext,
  ProductDispath
} from "../../components/Context/ContextProvider";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";

function Header() {
  const { state } = useContext(ProductContext);
  const { dispath } = useContext(ProductDispath);
  // Get location for hide & show SearchBar Component
  const location = useLocation();
  const { pathname } = location;

  // run only if state changes and Not Mount
  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) {
      setTimeout(() => {
        dispath({ type: "REMOVE_CLASS" });
      }, 1000);
    } else {
      didMount.current = true;
    }
  }, [dispath, state.favorites]);

  return (
    <header className="header">
      <nav className="nav">
        <Link to={"/"} className="logo">
          Arepas con todo y algo más. PyA
          <img src="images/PyA-Logo.png" width={50} height={50} alt="logo" />
        </Link>
        
        <div className="search_header">{pathname === "/" && <SearchBar />}</div>
        <div className="icon_Sopping_box">
          <Link to={"/basket"} className="shoppe_icon_box">
            <AiOutlineShopping className="shop_icon" />
            {state.basket.length > 0 && (
              <span className="badge_shope">{state.basket.length}</span>
            )}
          </Link>
          <Link
            to={"/favorite"}
            className={`mark_icon_box ${state.isFavorite ? "tada" : ""}`}
          >
            <BsFillBookmarkHeartFill className="mark_icon" />
            {state.favorites.length > 0 && (
              <span className="badge_mark">{state.favorites.length}</span>
            )}
          </Link>
          <Link to={"/register"} className="shoppe_icon_box">
            <HiOutlineUserAdd className="mark_icon"/>
          </Link>
          <Link to={"/login"} className="shoppe_icon_box">
          
          <HiOutlineUserCircle className="login_icon" />
          </Link>
          

        </div>
      </nav>
    </header>
  );
}

export default Header;
