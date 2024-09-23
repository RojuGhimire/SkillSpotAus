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
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex p-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        className="flex-grow border rounded-l-lg p-2"
      />
      <button type="submit" className="bg-primary text-white rounded-r-lg p-2">
        Send
      </button>
    </form>
  );
};

export default ChatInput;
