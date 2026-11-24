import { NavLink, Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="brand-logo" aria-label="Recipe Vault Home">
          <span className="logo-icon" aria-hidden="true">🍳</span>
          <span className="brand-name">Recipe Vault</span>
        </Link>

        <nav className="site-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                end
              >
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/recipes/add"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                + Add Recipe
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
