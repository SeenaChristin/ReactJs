import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");
    return(
        <div className="header">
          <div className="logo-container">
            <img className ="logo"
              src= {LOGO_URL}
             /> 
          </div>
          <div className="nav-items">
           <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About Us</li></Link>
            <Link to="/contact"><li>Contact Us</li></Link>
            <li>Cart</li>
            <button className="login"
            onClick={()=>{
              btnLogin == "Login"? setBtnLogin("Logout"): setBtnLogin("Login");
            }}
            >{btnLogin}</button>
           </ul>
          </div>
        </div>
    );
};

export default Header;