import React, { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import "./ChatBot.css";


const ChatBot = ({ closeChat }) => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const respond = (msg) => {
    msg = msg.toLowerCase();
    if (msg.includes("weather")) {
      return "Click on the Weather tab to check the city weather.";
    }
    if (msg.includes("aqi") || msg.includes("air")) {
      return "Go to the AQI page to check Air Quality Index.";
    }
    if (msg.includes("hello") || msg.includes("hi")) {
      return "Hello! How can I assist you today?";
    }
    return "I can help you with weather information and air quality data. Try asking about Weather or AQI!";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const botMsg = { sender: "bot", text: respond(input) };

    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <p>AI Assistant</p>
        <button className="close-btn" onClick={closeChat} aria-label="Close chat">
          <HiXMark />
        </button>
      </div>

      <div className="chat-area">
        {messages.map((msg, index) => (
          <p
            key={index}
            className={msg.sender === "bot" ? "bot-msg" : "user-msg"}
          >
            {msg.text}
          </p>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend} aria-label="Send message">Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
