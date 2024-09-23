import React, { useState } from 'react';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import { CgClose } from 'react-icons/cg';

// Define Message interface
interface Message {
  user: 'user' | 'bot'; // Specify exact string types
  text: string;
}

const rplQA = [
  { question: "What skills do you have that are relevant to the job?", answer: "I have skills in project management, communication, and problem-solving." },
  // Add the rest of the questions and answers...
];

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]); // Use Message type

  const addMessage = (message: string) => {
    const userMessage: Message = { user: 'user', text: message };
    setMessages([...messages, userMessage]);

    const foundQA = rplQA.find(qa => qa.question.toLowerCase() === message.toLowerCase());
    const botMessage: Message = {
      user: 'bot',
      text: foundQA ? foundQA.answer : 'How can I assist you?'
    };

    setTimeout(() => {
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-5 z-50 right-5">
      {!isOpen && (
        <button 
          className="bg-primary text-white p-4 rounded-full shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          <img src="/cou.png" alt="Chat" className="w-8 h-8"/>
        </button>
      )}

      {isOpen && (
        <div className="w-80 sm:w-96 bg-white shadow-lg rounded-lg border border-gray-300">
          <div className="bg-primary text-white p-4 flex justify-between items-center">
            <h3 className="text-lg font-bold">Chat with us</h3>
            <button 
              className="text-sm" 
              onClick={() => setIsOpen(false)}
            >
              <CgClose className='h-8 w-8' />
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
