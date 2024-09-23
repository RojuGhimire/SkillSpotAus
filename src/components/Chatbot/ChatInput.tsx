import React, { useState } from 'react';

interface ChatInputProps {
  addMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ addMessage }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      addMessage(input);
      setInput(''); // Clear input after sending the message
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center p-2 border-t border-gray-300">
      <input
        type="text"
        className="w-full p-2 rounded-md border border-gray-300 focus:outline-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button type="submit" className="ml-2 bg-primary text-white px-4 py-2 rounded-md">
        Send
      </button>
    </form>
  );
};

export default ChatInput;
