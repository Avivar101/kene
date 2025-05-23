'use client';

import { useState } from 'react';
import { Message } from '@/types';

export default function ChatWidget() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: "Hi there! 👋 I'm the virtual assistant. How can I help you today?",
    },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const toggleChat = () => setChatOpen(prev => !prev);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setChatMessages(prev => [...prev, { sender: 'user', text: newMessage }]);
    setNewMessage('');

    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        {
          sender: 'bot',
          text:
            "Thanks for reaching out! I've recorded your message and I will get back to you soon. Is there anything specific about the portfolio you'd like to know?",
        },
      ]);
    }, 800);
  };

  return (
    <>
      {!chatOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-20 right-4 bg-indigo-600 text-white rounded-full p-3 shadow-lg z-50 hover:bg-indigo-700 transition-colors"
          aria-label="Open chat"
        >
          💬
        </button>
      )}

      {chatOpen && (
        <div className="fixed bottom-16 right-4 w-64 sm:w-80 bg-white rounded-lg shadow-xl z-50 flex flex-col max-h-96">
          {/* Header */}
          <div className="flex justify-between items-center p-3 border-b">
            <h3 className="font-medium">Chat with me</h3>
            <button onClick={toggleChat} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3" style={{ maxHeight: '300px' }}>
            {chatMessages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="border-t p-2 flex">
            <input
              type="text"
              value={newMessage}
              onChange={e => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 text-sm focus:outline-none"
            />
            <button
              type="submit"
              disabled={!newMessage.trim()}
              className="ml-2 bg-indigo-600 text-white rounded p-2 hover:bg-indigo-700"
            >
              ➤
            </button>
          </form>
        </div>
      )}
    </>
  );
}
