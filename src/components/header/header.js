import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <nav>
      <header>
        <div>
            <div>
              <img src={"../../images/planet.png"} alt="Space X logo" />
            </div>
          <ul>
            <li><NavLink to="/">Rokets</NavLink></li>
            <li><NavLink to="/missions">Missions</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li>
          </ul>
        </div>
      </header>
    </nav>
  )

}

export default Header;