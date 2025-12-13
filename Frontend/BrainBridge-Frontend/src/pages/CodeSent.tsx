import { Link } from 'react-router-dom';
import './CodeSent.css';

const CodeSent = () => {
  return (
    <div className="code-sent-page">
      <div className="code-sent-container">
        <div className="code-sent-card">
          <div className="success-icon">✉️</div>
          <h1>Check Your Email</h1>
          <p className="code-sent-message">
            We've sent a password reset link to your email address. Please check your inbox and follow the instructions to reset your password.
          </p>
          
          <div className="code-sent-info">
            <p><strong>Didn't receive the email?</strong></p>
            <ul>
              <li>Check your spam or junk folder</li>
              <li>Make sure you entered the correct email address</li>
              <li>Wait a few minutes and try again</li>
            </ul>
          </div>

          <div className="code-sent-actions">
            <Link to="/forgot-password" className="btn btn-outline">
              Resend Email
            </Link>
            <Link to="/login" className="btn btn-primary">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeSent;

