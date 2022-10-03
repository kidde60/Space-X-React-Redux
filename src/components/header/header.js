import { NavLink } from "react-router-dom";
const logo = require('../../images/planet.png')


const Header = () => {
  return (
    <nav>
      <header>
        <div className="navbar">
          <div>
            <img className="logo" src={logo} alt="Space X logo" />
          </div>
          <ul className="navList">
            <li className="navLink"><NavLink to="/">Rokets</NavLink></li>
            <li className="navLink"><NavLink to="/missions">Missions</NavLink></li>
            <li className="navLink"><NavLink to="/profile">Profile</NavLink></li>
          </ul>
        </div>
      </header>
    </nav>
  )

}

export default Header;