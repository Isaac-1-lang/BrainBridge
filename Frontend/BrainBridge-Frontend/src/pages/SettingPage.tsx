import { useState } from 'react';
import './SettingPage.css';

const SettingPage = () => {
  // Dummy user data - will be replaced with API call later
  const [userData, setUserData] = useState({
    firstName: 'NIYOBYOSE',
    lastName: 'Isaac Precieux',
    email: 'isaprecieux@gmail.com',
    username: 'Isaac-1-lang',
    profileImageUrl: ''
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updating profile:', userData);
    alert('Profile updated successfully! (Dummy action - will integrate with backend later)');
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Changing password');
    alert('Password changed successfully! (Dummy action - will integrate with backend later)');
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  return (
    <div className="settings-page">
      <div className="container">
        <h1>Settings</h1>

        <div className="settings-sections">
          <div className="card">
            <h2>Profile Information</h2>
            <form onSubmit={handleProfileUpdate} className="settings-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    value={userData.firstName}
                    onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    value={userData.lastName}
                    onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={userData.email}
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  value={userData.username}
                  onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="profileImageUrl">Profile Image URL</label>
                <input
                  type="url"
                  id="profileImageUrl"
                  value={userData.profileImageUrl}
                  onChange={(e) => setUserData({ ...userData, profileImageUrl: e.target.value })}
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </form>
          </div>

          <div className="card">
            <h2>Change Password</h2>
            <form onSubmit={handlePasswordChange} className="settings-form">
              <div className="form-group">
                <label htmlFor="currentPassword">Current Password</label>
                <input
                  type="password"
                  id="currentPassword"
                  value={passwordData.currentPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="newPassword">New Password</label>
                <input
                  type="password"
                  id="newPassword"
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm New Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Change Password
              </button>
            </form>
          </div>

          <div className="card">
            <h2>Account Preferences</h2>
            <div className="preferences">
              <label className="checkbox-label">
                <input type="checkbox" defaultChecked />
                Email notifications for new comments
              </label>
              <label className="checkbox-label">
                <input type="checkbox" defaultChecked />
                Email notifications for project likes
              </label>
              <label className="checkbox-label">
                <input type="checkbox" />
                Weekly project summary email
              </label>
            </div>
          </div>

          <div className="card danger-zone">
            <h2>Danger Zone</h2>
            <p>Once you delete your account, there is no going back. Please be certain.</p>
            <button className="btn btn-danger">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;

