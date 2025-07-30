import React, { useState, useEffect } from 'react';
import { X, Bot, Send, Lightbulb, BookOpen, Target } from 'lucide-react';

interface AIMentorProps {
  onClose: () => void;
  user: any;
}

const AIMentor: React.FC<AIMentorProps> = ({ onClose, user }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: `Great battle, ${user.username}! 🎉 I noticed you did really well with the math questions but struggled a bit with geography. Would you like some tips to improve?`
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const suggestions = [
    { icon: <Lightbulb className="w-4 h-4" />, text: "Give me study tips" },
    { icon: <BookOpen className="w-4 h-4" />, text: "Explain the missed questions" },
    { icon: <Target className="w-4 h-4" />, text: "Set learning goals" }
  ];

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      content: message
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'ai',
        content: getAIResponse(message)
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const getAIResponse = (userMessage: string) => {
    const responses = {
      'give me study tips': "Here are some effective study strategies:\n\n1. 📚 Use spaced repetition - review topics at increasing intervals\n2. 🧩 Break complex topics into smaller chunks\n3. 📝 Create mind maps to visualize connections\n4. 🎯 Practice with EduBattle daily to reinforce learning\n5. 👥 Study with friends and explain concepts to each other\n\nWhich subject would you like specific tips for?",
      'explain the missed questions': "Let me break down the questions you missed:\n\n🌍 **Geography Question**: Nigeria's capital is Abuja, not Lagos. Lagos is the largest city and former capital, but Abuja became the capital in 1991.\n\n💡 **Memory tip**: Think 'A-bu-ja' = 'A-bout Justice and Administration' - it was chosen as capital for better governance!\n\nWould you like more geography facts or tips for other subjects?",
      'set learning goals': "Great idea! Let's set some achievable goals:\n\n🎯 **Short-term (This Week)**:\n- Win 3 more battles\n- Improve geography score by 20%\n- Learn 10 new facts daily\n\n🏆 **Long-term (This Month)**:\n- Reach Level 6\n- Earn 100 more tokens\n- Master at least 2 subjects\n\nShall we start with focusing on geography this week?"
    };

    const lowercaseMessage = userMessage.toLowerCase();
    for (const [key, response] of Object.entries(responses)) {
      if (lowercaseMessage.includes(key)) {
        return response;
      }
    }

    return "That's a great question! I'm here to help you improve your learning. You can ask me about study tips, subject explanations, or setting learning goals. What would you like to explore? 🤖✨";
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full h-[600px] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold">AI Mentor</h3>
              <p className="text-sm opacity-90">Your Learning Assistant</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl ${
                  message.type === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {message.type === 'ai' && (
                  <div className="flex items-center space-x-2 mb-2">
                    <Bot className="w-4 h-4 text-purple-500" />
                    <span className="text-xs font-medium text-purple-500">AI Mentor</span>
                  </div>
                )}
                <p className="text-sm whitespace-pre-line">{message.content}</p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 p-3 rounded-2xl">
                <div className="flex items-center space-x-2">
                  <Bot className="w-4 h-4 text-purple-500" />
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Suggestions */}
        <div className="px-4 py-2 border-t border-gray-100">
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(suggestion.text)}
                className="flex items-center space-x-1 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
              >
                {suggestion.icon}
                <span>{suggestion.text}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputMessage)}
              placeholder="Ask me anything about learning..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button
              onClick={() => handleSendMessage(inputMessage)}
              className="px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMentor;