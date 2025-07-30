import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainPanel from './MainPanel';
import WalletPanel from './WalletPanel';
import LeaderboardPanel from './LeaderboardPanel';
import ProfilePanel from './ProfilePanel';
import AIMentor from './AIMentor';

interface DashboardProps {
  user: any;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  const [activePanel, setActivePanel] = useState<'battle' | 'scores' | 'leaderboard' | 'rewards' | 'profile'>('battle');
  const [showAIMentor, setShowAIMentor] = useState(false);

  const renderMainContent = () => {
    switch (activePanel) {
      case 'battle':
        return <MainPanel user={user} onShowMentor={() => setShowAIMentor(true)} />;
      case 'scores':
        return <div className="p-6 bg-white rounded-2xl">Scores panel coming soon!</div>;
      case 'leaderboard':
        return <LeaderboardPanel />;
      case 'rewards':
        return <WalletPanel user={user} />;
      case 'profile':
        return <ProfilePanel user={user} />;
      default:
        return <MainPanel user={user} onShowMentor={() => setShowAIMentor(true)} />;
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
      <Sidebar 
        activePanel={activePanel} 
        setActivePanel={setActivePanel}
        user={user}
        onLogout={onLogout}
      />
      
      <main className="flex-1 p-4 md:p-6 overflow-auto">
        <div className="max-w-7xl mx-auto">
          {renderMainContent()}
        </div>
      </main>

      {showAIMentor && (
        <AIMentor 
          onClose={() => setShowAIMentor(false)}
          user={user}
        />
      )}
    </div>
  );
};

export default Dashboard;