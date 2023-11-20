import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import CB from "../../assets/img/codeBusters.png"

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          
          <li className="mx-1">
            <Link to="/profile" style={{marginRight: '10px'}}>
              Dashboard
            </Link>
          </li>
          {/* <li className="mx-1">
            <Link to="/free">
              Free Software
            </Link>
          </li> */}
          {/* <li className="mx-1">
            <Link to="/resume">
              Resume Builder
            </Link>
          </li> */}
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
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()} style={{marginRight: '10px'}}>
              Logout
            </a>
          </li> 
          <li className="mx-1">
            <Link to="/settings">
              Settings
            </Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup" style={{marginRight: '10px'}}>
              Signup
            </Link>
          </li>
          <li className="mx-1" >
            <Link to="/login" style={{marginRight: '10px'}}>
              Login
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/resume" style={{marginRight: '10px'}}>
              Resume Builder
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/services" style={{marginRight: '10px'}}>
              Services
            </Link>
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
