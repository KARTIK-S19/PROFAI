"use client";

import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const CoraChat = () => {
  const [messages, setMessages] = useState([
    { sender: 'cora', text: 'Hi! I am Cora. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });

    const interval = setInterval(async () => {
      try {
        const response = await axios.post(process.env.NEXT_PUBLIC_RELEVANCE_WEBHOOK_URL);
        const reply = response.data?.reply;
        if (reply) {
          setMessages(prev => [
            ...prev.filter(msg => msg.text !== 'Cora is Typing...'),
            { sender: 'cora', text: reply }
          ]);
        }
      } catch (err) {
        console.log("Polling Error:", err.message);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const webhookURL = process.env.NEXT_PUBLIC_RELEVANCE_WEBHOOK_URL;
    setMessages(prev => [
      ...prev,
      { sender: 'user', text: input },
      { sender: 'cora', text: 'Cora is Typing...' }
    ]);
    setInput('');

    try {
      await axios.post(webhookURL, { message: input });
      console.log("✅ Webhook sent successfully");
    } catch (err) {
      console.error("❌ Sending Error:", err.message);
      setMessages(prev => [
        ...prev.filter(msg => msg.text !== 'Cora is Typing...'),
        { sender: 'cora', text: "Sorry, something went wrong." }
      ]);
    }
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full w-16 h-16 shadow-lg text-3xl cursor-pointer z-[1001] flex items-center justify-center hover:bg-blue-700"
        >
          💬
        </button>
      )}
      {open && (
        <div className="fixed bottom-8 right-8 z-[1002] shadow-2xl">
          <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-blue-900 rounded-2xl border border-gray-700 w-[370px] h-[500px] flex flex-col overflow-hidden">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2.5 right-2.5 bg-white/10 text-xl text-gray-300 rounded-full w-8 h-8 flex items-center justify-center hover:bg-white/20"
            >
              ×
            </button>
            <div className="flex-1 p-4 overflow-y-auto mt-8">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex mb-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={
                      msg.sender === 'user'
                        ? 'bg-gradient-to-br from-blue-700 to-blue-500 text-white rounded-2xl px-4 py-2 max-w-[260px]'
                        : 'bg-gray-700/80 text-gray-100 rounded-2xl px-4 py-2 max-w-[260px]'
                    }
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSend} className="flex border-t border-gray-700 p-3 bg-gray-900/90">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border border-gray-700 rounded-lg px-3 py-2 bg-gray-800/80 text-gray-100"
              />
              <button
                type="submit"
                className="bg-gradient-to-br from-blue-700 to-blue-500 text-white rounded-lg px-5 py-2 ml-2"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CoraChat;
