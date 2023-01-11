import { NavLink } from "react-router-dom";

const Nav = () => {
    return(
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="home">
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to="products">
                Nos produits
              </NavLink>
            </li>
            <li>
              <NavLink to="contact">
                Nous trouver
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    
    )
}

export default Nav