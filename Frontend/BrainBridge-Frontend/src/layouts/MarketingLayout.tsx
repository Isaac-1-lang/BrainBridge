import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './MarketingLayout.css';

const MarketingLayout = () => {
  return (
    <div className="marketing-layout">
      <Navbar />
      <main className="marketing-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
