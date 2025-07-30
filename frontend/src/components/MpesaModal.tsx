import React, { useState } from 'react';
import { X, Smartphone, CheckCircle } from 'lucide-react';

interface MpesaModalProps {
  onClose: () => void;
}

const MpesaModal: React.FC<MpesaModalProps> = ({ onClose }) => {
  const [step, setStep] = useState<'input' | 'processing' | 'success'>('input');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    
    // Simulate M-Pesa STK Push
    setTimeout(() => {
      setStep('success');
      setTimeout(() => {
        onClose();
      }, 2000);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-3">
            <Smartphone className="w-6 h-6 text-green-600" />
            <h3 className="text-2xl font-bold text-gray-800">M-Pesa Deposit</h3>
          </div>
          {step === 'input' && (
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
          )}
        </div>

        {step === 'input' && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="0712345678"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount (KES)
              </label>
              <select
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              >
                <option value="">Select amount</option>
                <option value="50">KES 50 → 25 Tokens</option>
                <option value="100">KES 100 → 55 Tokens</option>
                <option value="200">KES 200 → 120 Tokens</option>
                <option value="500">KES 500 → 350 Tokens</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors"
            >
              Send STK Push
            </button>

            <div className="text-sm text-gray-500 text-center">
              You will receive an M-Pesa prompt on your phone to complete the payment.
            </div>
          </form>
        )}

        {step === 'processing' && (
          <div className="text-center py-8">
            <div className="animate-spin w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full mx-auto mb-6"></div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Processing Payment</h4>
            <p className="text-gray-600">Please check your phone and enter your M-Pesa PIN to complete the transaction.</p>
          </div>
        )}

        {step === 'success' && (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h4 className="text-xl font-bold text-gray-800 mb-2">Payment Successful!</h4>
            <p className="text-gray-600">Your tokens have been added to your wallet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MpesaModal;