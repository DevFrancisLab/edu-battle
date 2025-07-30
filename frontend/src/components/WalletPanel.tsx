import React, { useState } from 'react';
import { Wallet, CreditCard, Smartphone, Plus, ArrowUpDown, Gift } from 'lucide-react';
import MpesaModal from './MpesaModal';
import CryptoModal from './CryptoModal';

interface WalletPanelProps {
  user: any;
}

const WalletPanel: React.FC<WalletPanelProps> = ({ user }) => {
  const [showMpesaModal, setShowMpesaModal] = useState(false);
  const [showCryptoModal, setShowCryptoModal] = useState(false);

  const rewards = [
    { id: 1, name: '₦100 Airtime', cost: 50, icon: '📱', type: 'airtime' },
    { id: 2, name: '₦200 Airtime', cost: 90, icon: '📱', type: 'airtime' },
    { id: 3, name: 'Winner Badge', cost: 25, icon: '🏆', type: 'badge' },
    { id: 4, name: 'Study Boost', cost: 75, icon: '⚡', type: 'boost' },
  ];

  const transactions = [
    { type: 'earned', amount: '+15', description: 'Battle Victory vs Sarah_123', time: '2 hours ago' },
    { type: 'spent', amount: '-50', description: '₦100 Airtime Redeemed', time: '1 day ago' },
    { type: 'earned', amount: '+20', description: 'Tournament Bonus', time: '2 days ago' },
  ];

  return (
    <div className="space-y-6">
      {/* Wallet Overview */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <div className="flex items-center space-x-3 mb-6">
          <Wallet className="w-6 h-6 text-yellow-400" />
          <h2 className="text-2xl font-bold text-white">My Wallet</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 text-white">
            <div className="text-3xl font-bold mb-2">{user.tokens}</div>
            <div className="text-yellow-100">EduBattle Tokens</div>
          </div>
          
          <div className="bg-gradient-to-r from-green-400 to-teal-500 rounded-2xl p-6 text-white">
            <div className="text-3xl font-bold mb-2">₦250</div>
            <div className="text-green-100">Airtime Earned</div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl p-6 text-white">
            <div className="text-3xl font-bold mb-2">Level {user.level}</div>
            <div className="text-purple-100">Current Rank</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Deposit/Withdraw */}
        <div className="bg-white rounded-2xl p-6 shadow-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Manage Funds</h3>
          
          <div className="space-y-4">
            <button
              onClick={() => setShowMpesaModal(true)}
              className="w-full flex items-center justify-between p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-all duration-300 border-2 border-green-200 hover:border-green-300"
            >
              <div className="flex items-center space-x-3">
                <Smartphone className="w-6 h-6 text-green-600" />
                <div className="text-left">
                  <div className="font-bold text-gray-800">M-Pesa Deposit</div>
                  <div className="text-sm text-gray-600">Add tokens via M-Pesa STK Push</div>
                </div>
              </div>
              <Plus className="w-5 h-5 text-green-600" />
            </button>

            <button
              onClick={() => setShowCryptoModal(true)}
              className="w-full flex items-center justify-between p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-all duration-300 border-2 border-blue-200 hover:border-blue-300"
            >
              <div className="flex items-center space-x-3">
                <CreditCard className="w-6 h-6 text-blue-600" />
                <div className="text-left">
                  <div className="font-bold text-gray-800">Crypto Wallet</div>
                  <div className="text-sm text-gray-600">USDT/USDC deposits & withdrawals</div>
                </div>
              </div>
              <ArrowUpDown className="w-5 h-5 text-blue-600" />
            </button>
          </div>
        </div>

        {/* Rewards Store */}
        <div className="bg-white rounded-2xl p-6 shadow-xl">
          <div className="flex items-center space-x-2 mb-6">
            <Gift className="w-6 h-6 text-purple-600" />
            <h3 className="text-xl font-bold text-gray-800">Rewards Store</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {rewards.map((reward) => (
              <div key={reward.id} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-all duration-300">
                <div className="text-2xl mb-2 text-center">{reward.icon}</div>
                <div className="text-sm font-bold text-gray-800 text-center mb-1">{reward.name}</div>
                <div className="text-center">
                  <button
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      user.tokens >= reward.cost
                        ? 'bg-green-500 text-white hover:bg-green-600'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={user.tokens < reward.cost}
                  >
                    {reward.cost} Tokens
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-2xl p-6 shadow-xl">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Recent Transactions</h3>
        
        <div className="space-y-4">
          {transactions.map((transaction, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  transaction.type === 'earned' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {transaction.type === 'earned' ? (
                    <Plus className="w-5 h-5 text-green-600" />
                  ) : (
                    <ArrowUpDown className="w-5 h-5 text-red-600" />
                  )}
                </div>
                <div>
                  <div className="font-medium text-gray-800">{transaction.description}</div>
                  <div className="text-sm text-gray-500">{transaction.time}</div>
                </div>
              </div>
              <div className={`font-bold ${
                transaction.type === 'earned' ? 'text-green-600' : 'text-red-600'
              }`}>
                {transaction.amount}
              </div>
            </div>
          ))}
        </div>
      </div>

      {showMpesaModal && <MpesaModal onClose={() => setShowMpesaModal(false)} />}
      {showCryptoModal && <CryptoModal onClose={() => setShowCryptoModal(false)} />}
    </div>
  );
};

export default WalletPanel;