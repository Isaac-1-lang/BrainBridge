import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
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
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPwd />} />
            <Route path="/code-sent" element={<CodeSent />} />
            <Route path="/projects/create" element={<CreateProject />} />
            <Route path="/projects/:id" element={<ReadProject />} />
            <Route path="/projects/:id/edit" element={<UpdateProject />} />
            <Route path="/projects/:id/delete" element={<DeleteProject />} />
            <Route path="/read" element={<Read />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/ai-chat" element={<AiAssistedChat />} />
            <Route path="/settings" element={<SettingPage />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
