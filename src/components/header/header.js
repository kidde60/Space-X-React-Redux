/* eslint-disable */
import { NavLink } from 'react-router-dom';
const logo = require('../../images/planet.png')

const Header = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'underline' : 'none',
    };
  };

  return (
    <nav>
      <header>
        <div className="navbar">
          <div>
            <img className="logo" src={logo} alt="Space X logo" />
          </div>
          <ul className="navList">
            <li className="navLink"><NavLink style={navLinkStyle} to="/">Rokets</NavLink></li>
            <li className="navLink"><NavLink style={navLinkStyle} to="/missions">Missions</NavLink></li>
            <li className="navLink"><NavLink style={navLinkStyle} to="/profile">Profile</NavLink></li>
          </ul>
        </div>
      </header>
    </nav>
  );
};

export default Header;
