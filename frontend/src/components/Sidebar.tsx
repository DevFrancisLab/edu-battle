import React from 'react';
import { Swords, BarChart3, Trophy, Gift, User, LogOut, Sparkles, Coins } from 'lucide-react';

interface SidebarProps {
  activePanel: string;
  setActivePanel: (panel: 'battle' | 'scores' | 'leaderboard' | 'rewards' | 'profile') => void;
  user: any;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePanel, setActivePanel, user, onLogout }) => {
  const menuItems = [
    { id: 'battle', icon: Swords, label: 'Start Battle', color: 'text-red-400' },
    { id: 'scores', icon: BarChart3, label: 'My Scores', color: 'text-blue-400' },
    { id: 'leaderboard', icon: Trophy, label: 'Leaderboard', color: 'text-yellow-400' },
    { id: 'rewards', icon: Gift, label: 'My Rewards', color: 'text-green-400' },
    { id: 'profile', icon: User, label: 'Profile', color: 'text-purple-400' }
  ];

  return (
    <div className="w-80 bg-white/10 backdrop-blur-md border-r border-white/20 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-white/20">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">EduBattle</h1>
            <p className="text-yellow-200 text-sm">Dashboard</p>
          </div>
        </div>
        
        {/* User Info */}
        <div className="bg-white/10 rounded-2xl p-4">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-xl">
              {user.avatar}
            </div>
            <div>
              <h3 className="font-bold text-white">{user.username}</h3>
              <p className="text-yellow-200 text-sm">Level {user.level}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Coins className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 font-bold">{user.tokens}</span>
            </div>
            <div className="text-green-400 text-sm">Online</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActivePanel(item.id as any)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    activePanel === item.id
                      ? 'bg-white/20 text-white scale-105'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${item.color}`} />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/20">
        <button
          onClick={onLogout}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-white/70 hover:bg-red-500/20 hover:text-red-300 transition-all duration-300"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;