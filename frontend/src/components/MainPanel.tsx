import React, { useState } from 'react';
import { Play, Users, Clock, Zap, Brain, Target } from 'lucide-react';
import BattleModal from './BattleModal';

interface MainPanelProps {
  user: any;
  onShowMentor: () => void;
}

const MainPanel: React.FC<MainPanelProps> = ({ user, onShowMentor }) => {
  const [showBattleModal, setShowBattleModal] = useState(false);

  const battleModes = [
    {
      id: 'quick',
      title: 'Quick Battle',
      description: 'Jump into a random match',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      players: '1v1',
      time: '5 min',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 'friends',
      title: 'Challenge Friends',
      description: 'Invite friends to battle',
      icon: <Users className="w-8 h-8 text-blue-400" />,
      players: '1v1',
      time: '10 min',
      color: 'from-blue-400 to-purple-500'
    },
    {
      id: 'tournament',
      title: 'Tournament',
      description: 'Compete in larger battles',
      icon: <Target className="w-8 h-8 text-green-400" />,
      players: '8 players',
      time: '30 min',
      color: 'from-green-400 to-teal-500'
    }
  ];

  const subjects = [
    { name: 'Mathematics', icon: '🔢', level: 'Intermediate' },
    { name: 'Science', icon: '🔬', level: 'Beginner' },
    { name: 'History', icon: '📚', level: 'Advanced' },
    { name: 'Geography', icon: '🌍', level: 'Intermediate' }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Welcome back, {user.username}! 🎉
            </h2>
            <p className="text-white/80">Ready for your next educational adventure?</p>
          </div>
          <div className="hidden md:block">
            <div className="text-right">
              <div className="text-2xl font-bold text-yellow-400">{user.tokens} Tokens</div>
              <div className="text-white/60">Level {user.level}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Battle Modes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {battleModes.map((mode) => (
          <div key={mode.id} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="text-center">
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${mode.color} mb-4`}>
                {mode.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{mode.title}</h3>
              <p className="text-gray-600 mb-4">{mode.description}</p>
              
              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <span className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{mode.players}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{mode.time}</span>
                </span>
              </div>
              
              <button
                onClick={() => setShowBattleModal(true)}
                className={`w-full py-3 bg-gradient-to-r ${mode.color} text-white font-bold rounded-xl hover:scale-105 transform transition-all duration-300 flex items-center justify-center space-x-2`}
              >
                <Play className="w-5 h-5" />
                <span>Start Battle</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Subject Progress */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <div className="flex items-center space-x-2 mb-6">
          <Brain className="w-6 h-6 text-purple-400" />
          <h3 className="text-2xl font-bold text-white">Your Learning Progress</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {subjects.map((subject, index) => (
            <div key={index} className="bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
              <div className="text-2xl mb-2">{subject.icon}</div>
              <h4 className="font-bold text-white mb-1">{subject.name}</h4>
              <p className="text-white/60 text-sm mb-2">{subject.level}</p>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${Math.random() * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <h3 className="text-2xl font-bold text-white mb-4">Recent Battles</h3>
        <div className="space-y-3">
          {[
            { opponent: 'Sarah_123', subject: 'Math', result: 'Won', tokens: '+15', time: '2 hours ago' },
            { opponent: 'Alex_99', subject: 'Science', result: 'Lost', tokens: '-5', time: '1 day ago' },
            { opponent: 'Mike_Pro', subject: 'History', result: 'Won', tokens: '+20', time: '2 days ago' }
          ].map((battle, index) => (
            <div key={index} className="flex items-center justify-between bg-white/10 rounded-xl p-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  {battle.opponent[0]}
                </div>
                <div>
                  <div className="font-bold text-white">{battle.opponent}</div>
                  <div className="text-white/60 text-sm">{battle.subject} • {battle.time}</div>
                </div>
              </div>
              <div className="text-right">
                <div className={`font-bold ${battle.result === 'Won' ? 'text-green-400' : 'text-red-400'}`}>
                  {battle.result}
                </div>
                <div className={`text-sm ${battle.tokens.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {battle.tokens}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showBattleModal && (
        <BattleModal 
          onClose={() => setShowBattleModal(false)}
          onComplete={onShowMentor}
          user={user}
        />
      )}
    </div>
  );
};

export default MainPanel;