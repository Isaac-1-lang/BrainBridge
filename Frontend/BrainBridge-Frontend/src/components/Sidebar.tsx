import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

interface NavItem {
  path: string;
  label: string;
  icon?: string;
}

const navItems: NavItem[] = [
  { path: '/dashboard', label: 'Dashboard', icon: '📊' },
  { path: '/projects', label: 'Projects', icon: '📁' },
  { path: '/ideas', label: 'Ideas', icon: '💡' },
  { path: '/teams', label: 'Teams', icon: '👥' },
  { path: '/analytics', label: 'Analytics', icon: '📈' },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Link to="/dashboard" className="sidebar-logo">
          <img src="/logo.png" alt="BrainBridge" />
          <span>BrainBridge</span>
        </Link>
      </div>
      
      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + '/');
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-nav-item ${isActive ? 'active' : ''}`}
            >
              {item.icon && <span className="sidebar-nav-icon">{item.icon}</span>}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <Link to="/settings" className="sidebar-nav-item">
          <span className="sidebar-nav-icon">⚙️</span>
          <span>Settings</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
