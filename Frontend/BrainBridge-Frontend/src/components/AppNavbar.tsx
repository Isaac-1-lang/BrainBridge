import { Link } from 'react-router-dom';
import './AppNavbar.css';

const AppNavbar = () => {
  // Dummy user data - will be replaced with actual auth
  const username = 'NIYOBYOSE Isaac Precieux';

  return (
    <nav className="app-navbar">
      <div className="app-navbar-content">
        <div className="app-navbar-search">
          <input
            type="text"
            placeholder="Search projects, ideas..."
            className="app-navbar-search-input"
          />
        </div>

        <div className="app-navbar-actions">
          <Link to="/chat" className="app-navbar-action">
            <span className="app-navbar-icon">💬</span>
          </Link>
          <Link to="/notifications" className="app-navbar-action">
            <span className="app-navbar-icon">🔔</span>
          </Link>
          <div className="app-navbar-user">
            <Link to="/settings" className="app-navbar-user-link">
              <span className="app-navbar-avatar">{username.charAt(0)}</span>
              <span>{username}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
