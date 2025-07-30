import React from 'react';
import { Trophy, Medal, Award, Crown } from 'lucide-react';

const LeaderboardPanel: React.FC = () => {
  const topPlayers = [
    { rank: 1, username: 'BrainMaster_Pro', tokens: 2450, level: 12, avatar: '👑', badge: 'Champion' },
    { rank: 2, username: 'QuizQueen_99', tokens: 1980, level: 10, avatar: '🏆', badge: 'Expert' },
    { rank: 3, username: 'MathWizard_X', tokens: 1755, level: 9, avatar: '🧙‍♂️', badge: 'Genius' },
    { rank: 4, username: 'ScienceStar_21', tokens: 1520, level: 8, avatar: '⭐', badge: 'Scholar' },
    { rank: 5, username: 'HistoryHero_456', tokens: 1340, level: 8, avatar: '📚', badge: 'Scholar' },
    { rank: 6, username: 'GeoExplorer_77', tokens: 1150, level: 7, avatar: '🌍', badge: 'Explorer' },
    { rank: 7, username: 'LangLord_88', tokens: 985, level: 7, avatar: '🗣️', badge: 'Explorer' },
    { rank: 8, username: 'ArtAce_555', tokens: 820, level: 6, avatar: '🎨', badge: 'Apprentice' },
    { rank: 9, username: 'MusicMaestro_12', tokens: 750, level: 6, avatar: '🎵', badge: 'Apprentice' },
    { rank: 10, username: 'TechTitan_2023', tokens: 680, level: 5, avatar: '💻', badge: 'Novice' }
  ];

  const categories = [
    { name: 'Mathematics', leader: 'MathWizard_X', icon: '🔢' },
    { name: 'Science', leader: 'ScienceStar_21', icon: '🔬' },
    { name: 'History', leader: 'HistoryHero_456', icon: '📚' },
    { name: 'Geography', leader: 'GeoExplorer_77', icon: '🌍' }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Trophy className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Medal className="w-6 h-6 text-amber-600" />;
      default:
        return <Award className="w-6 h-6 text-blue-500" />;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return 'from-yellow-400 to-yellow-600';
      case 2:
        return 'from-gray-300 to-gray-500';
      case 3:
        return 'from-amber-400 to-amber-600';
      default:
        return 'from-blue-400 to-blue-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <div className="flex items-center space-x-3 mb-4">
          <Trophy className="w-8 h-8 text-yellow-400" />
          <h2 className="text-3xl font-bold text-white">Global Leaderboard</h2>
        </div>
        <p className="text-white/80">See how you rank against the best EduBattle players worldwide!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top 3 Podium */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Top Champions</h3>
          
          <div className="flex justify-center items-end space-x-4 mb-8">
            {/* 2nd Place */}
            <div className="text-center">
              <div className="w-16 h-20 bg-gradient-to-t from-gray-300 to-gray-500 rounded-t-lg flex items-end justify-center pb-2 mb-2">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <div className="text-2xl mb-1">{topPlayers[1].avatar}</div>
              <div className="font-bold text-sm text-gray-800">{topPlayers[1].username}</div>
              <div className="text-xs text-gray-600">{topPlayers[1].tokens} tokens</div>
            </div>

            {/* 1st Place */}
            <div className="text-center">
              <div className="w-16 h-24 bg-gradient-to-t from-yellow-400 to-yellow-600 rounded-t-lg flex items-end justify-center pb-2 mb-2">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <div className="text-3xl mb-1">{topPlayers[0].avatar}</div>
              <div className="font-bold text-sm text-gray-800">{topPlayers[0].username}</div>
              <div className="text-xs text-gray-600">{topPlayers[0].tokens} tokens</div>
            </div>

            {/* 3rd Place */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-t from-amber-400 to-amber-600 rounded-t-lg flex items-end justify-center pb-2 mb-2">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <div className="text-2xl mb-1">{topPlayers[2].avatar}</div>
              <div className="font-bold text-sm text-gray-800">{topPlayers[2].username}</div>
              <div className="text-xs text-gray-600">{topPlayers[2].tokens} tokens</div>
            </div>
          </div>

          {/* Full Rankings */}
          <div className="space-y-3">
            {topPlayers.map((player) => (
              <div
                key={player.rank}
                className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 hover:scale-102 ${
                  player.rank <= 3
                    ? `bg-gradient-to-r ${getRankColor(player.rank)} text-white`
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    {getRankIcon(player.rank)}
                    <span className={`text-lg font-bold ${player.rank <= 3 ? 'text-white' : 'text-gray-700'}`}>
                      #{player.rank}
                    </span>
                  </div>
                  <div className="text-2xl">{player.avatar}</div>
                  <div>
                    <div className={`font-bold ${player.rank <= 3 ? 'text-white' : 'text-gray-800'}`}>
                      {player.username}
                    </div>
                    <div className={`text-sm ${player.rank <= 3 ? 'text-white/80' : 'text-gray-600'}`}>
                      Level {player.level} • {player.badge}
                    </div>
                  </div>
                </div>
                <div className={`text-right ${player.rank <= 3 ? 'text-white' : 'text-gray-700'}`}>
                  <div className="font-bold text-lg">{player.tokens}</div>
                  <div className={`text-sm ${player.rank <= 3 ? 'text-white/80' : 'text-gray-500'}`}>tokens</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Leaders */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Subject Champions</h3>
            <div className="space-y-4">
              {categories.map((category, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="text-xl">{category.icon}</div>
                    <div>
                      <div className="font-medium text-gray-800">{category.name}</div>
                      <div className="text-sm text-gray-600">{category.leader}</div>
                    </div>
                  </div>
                  <Trophy className="w-5 h-5 text-yellow-500" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Your Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Current Rank</span>
                <span className="font-bold text-orange-600">#47</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Tokens</span>
                <span className="font-bold text-yellow-600">150</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Win Rate</span>
                <span className="font-bold text-green-600">68%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Battles Won</span>
                <span className="font-bold text-blue-600">23</span>
              </div>
            </div>
            
            <div className="mt-6 p-3 bg-blue-50 rounded-lg text-center">
              <div className="text-sm text-blue-800">
                <strong>Next Goal:</strong> Reach Top 40 (+8 more tokens needed)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPanel;