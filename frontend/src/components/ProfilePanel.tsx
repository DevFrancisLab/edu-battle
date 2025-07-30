import React, { useState } from 'react';
import { User, Edit3, Star, Trophy, Target, Calendar } from 'lucide-react';

interface ProfilePanelProps {
  user: any;
}

const ProfilePanel: React.FC<ProfilePanelProps> = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    username: user.username,
    bio: 'Learning enthusiast who loves educational challenges!',
    favoriteSubject: 'Mathematics',
    grade: 'Grade 8',
    school: 'Lagos International School'
  });

  const achievements = [
    { name: 'First Victory', icon: '🏆', description: 'Won your first battle', earned: true },
    { name: 'Math Master', icon: '🔢', description: 'Win 10 math battles', earned: true },
    { name: 'Speed Demon', icon: '⚡', description: 'Answer 5 questions in under 30 seconds', earned: true },
    { name: 'Social Butterfly', icon: '👥', description: 'Battle 25 different opponents', earned: false },
    { name: 'Knowledge Seeker', icon: '📚', description: 'Play in all subject categories', earned: false },
    { name: 'Streak Master', icon: '🔥', description: 'Win 5 battles in a row', earned: false }
  ];

  const stats = [
    { label: 'Total Battles', value: '34', icon: Target },
    { label: 'Battles Won', value: '23', icon: Trophy },
    { label: 'Current Streak', value: '3', icon: Star },
    { label: 'Days Active', value: '12', icon: Calendar }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <User className="w-6 h-6 text-purple-400" />
            <h2 className="text-2xl font-bold text-white">My Profile</h2>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center space-x-2 px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-all duration-300"
          >
            <Edit3 className="w-4 h-4" />
            <span>{isEditing ? 'Cancel' : 'Edit'}</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-4xl">
            {user.avatar}
          </div>
          
          <div className="flex-1 space-y-3">
            {isEditing ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={profile.username}
                  onChange={(e) => setProfile({...profile, username: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30"
                  placeholder="Username"
                />
                <textarea
                  value={profile.bio}
                  onChange={(e) => setProfile({...profile, bio: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 resize-none"
                  rows={2}
                  placeholder="Bio"
                />
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-white">{profile.username}</h3>
                <p className="text-white/80">{profile.bio}</p>
              </div>
            )}
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center space-x-1">
                <span className="text-yellow-400">Level:</span>
                <span className="text-white font-bold">{user.level}</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-green-400">Tokens:</span>
                <span className="text-white font-bold">{user.tokens}</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-blue-400">Rank:</span>
                <span className="text-white font-bold">#47</span>
              </div>
            </div>
          </div>
        </div>

        {isEditing && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
              value={profile.favoriteSubject}
              onChange={(e) => setProfile({...profile, favoriteSubject: e.target.value})}
              className="px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30"
            >
              <option value="Mathematics">Mathematics</option>
              <option value="Science">Science</option>
              <option value="History">History</option>
              <option value="Geography">Geography</option>
            </select>
            <input
              type="text"
              value={profile.grade}
              onChange={(e) => setProfile({...profile, grade: e.target.value})}
              className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30"
              placeholder="Grade Level"
            />
            <input
              type="text"
              value={profile.school}
              onChange={(e) => setProfile({...profile, school: e.target.value})}
              className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30"
              placeholder="School Name"
            />
          </div>
        )}

        {isEditing && (
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-xl text-center hover:scale-105 transition-all duration-300">
              <Icon className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-2xl p-6 shadow-xl">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Achievements</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                achievement.earned
                  ? 'border-green-300 bg-green-50'
                  : 'border-gray-200 bg-gray-50 opacity-60'
              }`}
            >
              <div className="text-center">
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <h4 className={`font-bold mb-1 ${achievement.earned ? 'text-green-700' : 'text-gray-600'}`}>
                  {achievement.name}
                </h4>
                <p className={`text-sm ${achievement.earned ? 'text-green-600' : 'text-gray-500'}`}>
                  {achievement.description}
                </p>
                {achievement.earned && (
                  <div className="mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      ✓ Earned
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Progress */}
      <div className="bg-white rounded-2xl p-6 shadow-xl">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Learning Progress</h3>
        
        <div className="space-y-4">
          {[
            { subject: 'Mathematics', progress: 75, color: 'blue' },
            { subject: 'Science', progress: 60, color: 'green' },
            { subject: 'History', progress: 45, color: 'purple' },
            { subject: 'Geography', progress: 30, color: 'orange' }
          ].map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">{item.subject}</span>
                <span className="text-sm text-gray-500">{item.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full bg-gradient-to-r ${
                    item.color === 'blue' ? 'from-blue-400 to-blue-600' :
                    item.color === 'green' ? 'from-green-400 to-green-600' :
                    item.color === 'purple' ? 'from-purple-400 to-purple-600' :
                    'from-orange-400 to-orange-600'
                  } transition-all duration-500`}
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel;