import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AppNavbar from '../components/AppNavbar';
import './AppLayout.css';

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="app-layout-main">
        <AppNavbar />
        <main className="app-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
