import React, { useState } from 'react';
import { X, CreditCard, Copy, ExternalLink } from 'lucide-react';

interface CryptoModalProps {
  onClose: () => void;
}

const CryptoModal: React.FC<CryptoModalProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'deposit' | 'withdraw'>('deposit');
  const [selectedCrypto, setSelectedCrypto] = useState('USDT');

  const walletAddresses = {
    USDT: '0x742d35Cc6A5026b449f8F8b7B4b36B2b6B5c4e8d',
    USDC: '0x742d35Cc6A5026b449f8F8b7B4b36B2b6B5c4e8d'
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-3">
            <CreditCard className="w-6 h-6 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-800">Crypto Wallet</h3>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
          <button
            onClick={() => setActiveTab('deposit')}
            className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
              activeTab === 'deposit'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Deposit
          </button>
          <button
            onClick={() => setActiveTab('withdraw')}
            className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
              activeTab === 'withdraw'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Withdraw
          </button>
        </div>

        {/* Crypto Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Cryptocurrency
          </label>
          <div className="grid grid-cols-2 gap-3">
            {['USDT', 'USDC'].map((crypto) => (
              <button
                key={crypto}
                onClick={() => setSelectedCrypto(crypto)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedCrypto === crypto
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-bold text-gray-800">{crypto}</div>
                <div className="text-sm text-gray-500">
                  {crypto === 'USDT' ? 'Tether' : 'USD Coin'}
                </div>
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'deposit' && (
          <div className="space-y-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="text-sm text-yellow-800">
                <strong>Note:</strong> Only send {selectedCrypto} on the Polygon network to this address. 
                Minimum deposit: $5 USD equivalent.
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Deposit Address ({selectedCrypto})
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={walletAddresses[selectedCrypto as keyof typeof walletAddresses]}
                  readOnly
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm"
                />
                <button
                  onClick={() => copyToClipboard(walletAddresses[selectedCrypto as keyof typeof walletAddresses])}
                  className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-bold text-gray-800 mb-2">Exchange Rate</h4>
              <div className="text-sm text-gray-600">
                1 {selectedCrypto} = 500 EduBattle Tokens
              </div>
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <ExternalLink className="w-4 h-4" />
              <span>Track your transaction on</span>
              <a href="#" className="text-blue-600 hover:underline">PolygonScan</a>
            </div>
          </div>
        )}

        {activeTab === 'withdraw' && (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="text-sm text-blue-800">
                <strong>Available to withdraw:</strong> 75 tokens ($0.15 USD equivalent)
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Withdrawal Address
              </label>
              <input
                type="text"
                placeholder="Enter your wallet address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount (Tokens)
              </label>
              <input
                type="number"
                placeholder="Minimum 50 tokens"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="text-sm text-red-800">
                <strong>Note:</strong> Minimum withdrawal is 50 tokens ($0.10 USD). 
                Network fees will be deducted from your withdrawal amount.
              </div>
            </div>

            <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
              Request Withdrawal
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CryptoModal;