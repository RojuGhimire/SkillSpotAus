import React from 'react';

interface MessageProps {
  messages: { user: string; text: string }[];
}

const ChatMessages: React.FC<MessageProps> = ({ messages }) => {
  return (
    <div className="space-y-2">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`p-2 rounded-md ${
            msg.user === 'user' ? 'bg-primary text-white self-end' : 'bg-gray-200 text-gray-700 self-start'
          }`}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
