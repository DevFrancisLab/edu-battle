import React, { useState } from 'react';
import { Play, Users, Trophy, Gift, Phone, Facebook, Twitter, Instagram, Sparkles } from 'lucide-react';
import LoginModal from './LoginModal';

interface LandingPageProps {
  onLogin: (userData: any) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const gameSteps = [
    {
      icon: <Users className="w-12 h-12 text-yellow-400" />,
      title: "Challenge",
      description: "Invite a friend or get matched with players worldwide!"
    },
    {
      icon: <Trophy className="w-12 h-12 text-green-400" />,
      title: "Answer",
      description: "Play live educational quiz battles and show your knowledge!"
    },
    {
      icon: <Gift className="w-12 h-12 text-pink-400" />,
      title: "Earn",
      description: "Win tokens, airtime, badges and climb the leaderboard!"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative overflow-hidden bg-white/10 backdrop-blur-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center transform rotate-12 animate-bounce">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">EduBattle</h1>
                <p className="text-yellow-200 text-sm">Learn. Compete. Win!</p>
              </div>
            </div>
            <button 
              onClick={() => setShowLoginModal(true)}
              className="px-6 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
            >
              Login
            </button>
          </div>
        </div>
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-300/20 rounded-full animate-pulse delay-1000"></div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              The Most Fun Way to 
              <span className="text-yellow-300 block">Learn & Compete!</span>
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Join thousands of students in epic educational battles. Learn while having fun, 
              earn rewards, and become the ultimate knowledge champion!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button 
                onClick={() => setShowLoginModal(true)}
                className="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold text-xl rounded-full hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-yellow-400/50 flex items-center space-x-2"
              >
                <Play className="w-6 h-6 group-hover:animate-bounce" />
                <span>Play Now!</span>
              </button>
              
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-white">Or dial: <strong>*123#</strong></span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-yellow-300">50K+</div>
                <div className="text-white">Active Players</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-green-300">1M+</div>
                <div className="text-white">Questions Answered</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-pink-300">₦2M+</div>
                <div className="text-white">Rewards Earned</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">How EduBattle Works</h3>
            <p className="text-xl text-white/80">Three simple steps to educational glory!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {gameSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-3xl">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 transform hover:rotate-12 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-4">{step.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {index < gameSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Why Choose EduBattle?</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Real-time Battles", desc: "Live competitions with friends", color: "from-blue-400 to-blue-600" },
              { title: "Earn Rewards", desc: "Tokens, airtime & badges", color: "from-green-400 to-green-600" },
              { title: "AI Mentor", desc: "Personal learning assistant", color: "from-purple-400 to-purple-600" },
              { title: "Mobile & USSD", desc: "Play anywhere, anytime", color: "from-pink-400 to-pink-600" }
            ].map((feature, index) => (
              <div key={index} className={`bg-gradient-to-br ${feature.color} p-6 rounded-2xl text-white transform hover:scale-105 transition-all duration-300`}>
                <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                <p className="text-sm opacity-90">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">EduBattle</span>
              </div>
              <p className="text-gray-400">Making learning fun and competitive for everyone!</p>
            </div>
            
            <div>
              <h5 className="text-lg font-bold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">How to Play</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Leaderboard</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Rewards</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-bold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">USSD: *123#</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-bold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
                <Twitter className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
                <Instagram className="w-6 h-6 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EduBattle. All rights reserved. Made with ❤️ for learners everywhere.</p>
          </div>
        </div>
      </footer>

      {showLoginModal && (
        <LoginModal 
          onClose={() => setShowLoginModal(false)} 
          onLogin={onLogin}
        />
      )}
    </div>
  );
};

export default LandingPage;