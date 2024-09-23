import React from 'react';

interface Message {
  user: 'user' | 'bot';
  text: string;
}

interface ChatMessagesProps {
  messages: Message[];
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => {
  return (
    <div className="flex flex-col space-y-2">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex ${msg.user === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`p-2 rounded-lg max-w-xs ${
              msg.user === 'user' ? 'bg-primary text-white' : 'bg-gray-300 text-black'
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
