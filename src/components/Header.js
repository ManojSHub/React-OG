import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

import { Link } from "react-router";

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL} alt=""
        />
      </div>

      <div className="nav-items">
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About Us</Link></li>
          <li><Link to={"/contact"}>Contact Us</Link></li>
          <li>Cart</li>
          <li><button
            className="login-btn"
            onClick={()=>{
              btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
              console.log(btnNameReact);
            }}
          >{btnNameReact}</button></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
