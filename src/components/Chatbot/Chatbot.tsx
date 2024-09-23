import { useState } from 'react';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle state for open/close
  const [messages, setMessages] = useState<{ user: string; text: string }[]>([]);

  const addMessage = (message: string) => {
    setMessages([...messages, { user: 'user', text: message }]);
    setTimeout(() => {
      setMessages((prev) => [...prev, { user: 'bot', text: 'How can I assist you?' }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-5 right-5">
      {/* Profile Icon */}
      {!isOpen && (
        <button 
          className="bg-primary text-white p-4 rounded-full shadow-lg"
          onClick={() => setIsOpen(true)} // Open chatbot on click
        >
          <img src="/cou.png" alt="Chat" className="w-8 h-8"/>
        </button>
      )}

      {/* Chatbot window */}
      {isOpen && (
        <div className="w-80 sm:w-96 bg-white shadow-lg rounded-lg border border-gray-300">
          <div className="bg-primary text-white p-4 flex justify-between items-center">
            <h3 className="text-lg font-bold">Chat with us</h3>
            <button 
              className="text-sm" 
              onClick={() => setIsOpen(false)} // Close chatbot
            >
              Close
            </button>
          </div>
          <div className="bg-gray-50 p-4 h-80 overflow-y-auto">
            <ChatMessages messages={messages} />
          </div>
          <ChatInput addMessage={addMessage} />
        </div>
      )}
    </div>
  );
};

export default Chatbot;
