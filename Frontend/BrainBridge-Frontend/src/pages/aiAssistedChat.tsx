import { useState } from 'react';
import './AiAssistedChat.css';

const AiAssistedChat = () => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Dummy AI chat history - will be replaced with API call later
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      content: 'Hello! I\'m your AI coding assistant. How can I help you with your project today?',
      timestamp: '2025-12-13 10:00 AM'
    },
    {
      id: 2,
      role: 'user',
      content: 'Can you help me optimize my React component?',
      timestamp: '2025-12-13 10:01 AM'
    },
    {
      id: 3,
      role: 'assistant',
      content: 'Of course! I\'d be happy to help you optimize your React component. Could you share the component code or describe what specific optimizations you\'re looking for?',
      timestamp: '2025-12-13 10:01 AM'
    }
  ]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    const userMessage = {
      id: messages.length + 1,
      role: 'user' as const,
      content: message,
      timestamp: new Date().toLocaleString()
    };

    setMessages([...messages, userMessage]);
    setMessage('');
    setIsLoading(true);

    // Simulate AI response - will be replaced with API call later
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        role: 'assistant' as const,
        content: `I understand you're asking about: "${userMessage.content}". This is a dummy response. In the future, this will be powered by an AI API that provides real coding assistance.`,
        timestamp: new Date().toLocaleString()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="ai-chat-page">
      <div className="ai-chat-container">
        <div className="ai-chat-header">
          <div className="ai-header-content">
            <div className="ai-icon">🤖</div>
            <div>
              <h1>AI Coding Assistant</h1>
              <p>Get help with your code, debugging, and best practices</p>
            </div>
          </div>
        </div>

        <div className="ai-chat-messages">
          {messages.map(msg => (
            <div key={msg.id} className={`ai-message ${msg.role === 'user' ? 'user-message' : 'assistant-message'}`}>
              <div className="message-avatar">
                {msg.role === 'user' ? '👤' : '🤖'}
              </div>
              <div className="message-bubble">
                <div className="message-content">{msg.content}</div>
                <div className="message-timestamp">{msg.timestamp}</div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="ai-message assistant-message">
              <div className="message-avatar">🤖</div>
              <div className="message-bubble">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSend} className="ai-chat-input-form">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask me anything about coding..."
            className="ai-chat-input"
            disabled={isLoading}
          />
          <button type="submit" className="btn btn-primary" disabled={isLoading || !message.trim()}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default AiAssistedChat;

