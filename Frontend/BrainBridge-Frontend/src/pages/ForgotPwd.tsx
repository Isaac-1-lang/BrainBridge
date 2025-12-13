import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ForgotPwd.css';

const ForgotPwd = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Password reset requested for:', email);
      // Simulate password reset
      setIsSubmitted(true);
      setTimeout(() => {
        navigate('/code-sent');
      }, 1000);
    }
  };

  if (isSubmitted) {
    return (
      <div className="forgot-pwd-page">
        <div className="forgot-pwd-container">
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>Reset Link Sent!</h2>
            <p>Please check your email for password reset instructions.</p>
            <Link to="/code-sent" className="btn btn-primary">
              Continue
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="forgot-pwd-page">
      <div className="forgot-pwd-container">
        <div className="forgot-pwd-card">
          <h1>Forgot Password?</h1>
          <p className="forgot-pwd-subtitle">
            Enter your email address and we'll send you a link to reset your password.
          </p>

          <form onSubmit={handleSubmit} className="forgot-pwd-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-full">
              Send Reset Link
            </button>
          </form>

          <div className="forgot-pwd-footer">
            <p>Remember your password? <Link to="/login">Sign in</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPwd;

