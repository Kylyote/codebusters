import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import CB from "../../assets/img/codeBusters.png"
import Main from '../LoginModal'
import LanguageMain from "../LanguageModal";

function Nav() {
  
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="nav-content" style={{listStyleType: 'none'}}>
          
          <li className="mx-1">
            <Link to="/free" style={{marginRight: '10px'}}>
              Free Software
            </Link>
          </li> 
          <li className="mx-1" >
            <Link to="/services" style={{marginRight: '10px'}}>
              Services
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/home" style={{marginRight: '10px'}}>
              Products
            </Link>
          </li>
          {/* <li className="mx-1">
            <Link to="/settings">
              Settings
            </Link>
          </li> */}
          <li className="mx-2">
            <Link to="/profile">
              Dashboard
            </Link>
          </li>
          <li className="mx-1" style={{listStyleType: 'none'}}>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()} style={{marginLeft: '10px'}}>
              Logout
            </a>
          </li> 
        </ul>
      );
    } else {
      return (
        <ul className="flex-row nav-content">
          {/* <li className="mx-1">
            <Link to="/services" style={{marginRight: '10px'}}>
              Services
            </Link>
          </li> */}
          <li className="mx-1">
            <Main />
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
  <h1>
 <Link to="/">
   <span role="img" aria-label="shopping bag">
   <img style={{ width: '50px', height: '50px',marginRight: '10px' }} src={CB} alt="shopping bag" />
   </span>
    Code Busters
 </Link>
</h1>



      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
