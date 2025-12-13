import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  // Dummy user data - will be replaced with actual auth later
  const isLoggedIn = false; // Change to true to see logged-in state
  const username = 'John Doe';

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon"><img src="./logo.png" alt="" /></span>
          <span className="logo-text">BrainBridge</span>
        </Link>

        <div className="navbar-menu">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/read" className="navbar-link">Browse Projects</Link>
          
          {isLoggedIn ? (
            <>
              <Link to="/projects/create" className="navbar-link">Create Project</Link>
              <Link to="/chat" className="navbar-link">Chat</Link>
              <Link to="/ai-chat" className="navbar-link">AI Assistant</Link>
              <div className="navbar-user">
                <Link to="/settings" className="navbar-link">{username}</Link>
                <Link to="/logout" className="btn btn-outline btn-small">Logout</Link>
              </div>
            </>
          ) : (
            <div className="navbar-auth">
              <Link to="/login" className="btn btn-outline btn-small">Login</Link>
              <Link to="/register" className="btn btn-primary btn-small">Sign Up</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

