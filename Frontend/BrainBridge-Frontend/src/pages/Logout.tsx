import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate logout - will be replaced with actual logout logic later
    console.log('Logging out...');
    
    // Clear any dummy auth data
    // In real app: clear tokens, cookies, etc.
    
    // Redirect after a brief moment
    const timer = setTimeout(() => {
      navigate('/');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="logout-page">
      <div className="logout-container">
        <div className="logout-card">
          <div className="logout-icon">👋</div>
          <h1>Logging Out...</h1>
          <p>You have been successfully logged out.</p>
          <p className="redirect-message">Redirecting to home page...</p>
        </div>
      </div>
    </div>
  );
};

export default Logout;

