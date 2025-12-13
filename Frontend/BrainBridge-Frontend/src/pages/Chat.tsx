import { useState } from 'react';
import './Chat.css';

const Chat = () => {
  const [message, setMessage] = useState('');
  
  // Dummy chat messages - will be replaced with API/WebSocket later
  const messages = [
    {
      id: 1,
      sender: 'John Doe',
      content: 'Hey everyone! Working on a new React project. Anyone want to collaborate?',
      timestamp: '2025-12-13 10:30 AM',
      isOwn: false
    },
    {
      id: 2,
      sender: 'You',
      content: 'I\'d love to help! What kind of project is it?',
      timestamp: '2025-12-13 10:32 AM',
      isOwn: true
    },
    {
      id: 3,
      sender: 'Jane Smith',
      content: 'Count me in too!',
      timestamp: '2025-12-13 10:33 AM',
      isOwn: false
    },
    {
      id: 4,
      sender: 'John Doe',
      content: 'It\'s an e-commerce platform. I\'ll share the details soon!',
      timestamp: '2025-12-13 10:35 AM',
      isOwn: false
    }
  ];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      console.log('Sending message:', message);
      // Simulate sending message
      alert('Message sent! (Dummy action - will integrate with backend/WebSocket later)');
      setMessage('');
    }
  };

  return (
    <div className="chat-page">
      <div className="chat-container">
        <div className="chat-header">
          <h1>Community Chat</h1>
          <p>Connect with developers and discuss projects</p>
        </div>

        <div className="chat-messages">
          {messages.map(msg => (
            <div key={msg.id} className={`message ${msg.isOwn ? 'own-message' : ''}`}>
              <div className="message-header">
                <strong>{msg.sender}</strong>
                <span className="message-time">{msg.timestamp}</span>
              </div>
              <div className="message-content">{msg.content}</div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSend} className="chat-input-form">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="chat-input"
          />
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;

