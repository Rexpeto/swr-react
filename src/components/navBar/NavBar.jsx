import { Link } from "react-router-dom";
import { publicRoutes } from "@/models";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo.svg" className="h-8 mr-3" alt="Vypers" />
          <span className="navbar-logo__title">Vypers</span>
        </Link>
        <button type="button" className="navbar-button">
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="navbar-links">
            <li>
              <NavLink
                to={publicRoutes.NOTUSINGSWR}
                className={({ isActive }) =>
                  isActive
                    ? "navbar-links__active"
                    : isActive
                    ? "navbar-links__active"
                    : "navbar-links__disabled"
                }
              >
                Not SWR
              </NavLink>
            </li>
            <li>
              <NavLink
                to={publicRoutes.USINGSWR}
                className={({ isActive }) =>
                  isActive
                    ? "navbar-links__active"
                    : isActive
                    ? "navbar-links__active"
                    : "navbar-links__disabled"
                }
              >
                SWR
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
