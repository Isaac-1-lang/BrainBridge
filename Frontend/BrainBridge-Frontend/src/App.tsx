import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MarketingLayout from './layouts/MarketingLayout';
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateProject from './pages/CreateProject';
import ReadProject from './pages/ReadProject';
import UpdateProject from './pages/UpdateProject';
import DeleteProject from './pages/DeleteProject';
import Chat from './pages/Chat';
import AiAssistedChat from './pages/aiAssistedChat';
import SettingPage from './pages/SettingPage';
import ForgotPwd from './pages/ForgotPwd';
import CodeSent from './pages/CodeSent';
import Read from './pages/Read';
import Logout from './pages/Logout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Marketing Routes */}
        <Route element={<MarketingLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPwd />} />
          <Route path="/code-sent" element={<CodeSent />} />
        </Route>

        {/* App Routes */}
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Read />} />
          <Route path="/projects/create" element={<CreateProject />} />
          <Route path="/projects/:id" element={<ReadProject />} />
          <Route path="/projects/:id/edit" element={<UpdateProject />} />
          <Route path="/projects/:id/delete" element={<DeleteProject />} />
          <Route path="/ideas" element={<Read />} />
          <Route path="/teams" element={<Read />} />
          <Route path="/analytics" element={<Read />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/ai-chat" element={<AiAssistedChat />} />
          <Route path="/settings" element={<SettingPage />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
