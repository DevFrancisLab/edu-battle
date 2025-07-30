import React, { useState, useEffect } from 'react';
import { X, Clock, Zap, Trophy } from 'lucide-react';

interface BattleModalProps {
  onClose: () => void;
  onComplete: () => void;
  user: any;
}

const BattleModal: React.FC<BattleModalProps> = ({ onClose, onComplete, user }) => {
  const [phase, setPhase] = useState<'matching' | 'battle' | 'results'>('matching');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const questions = [
    {
      question: "What is 15 × 8?",
      options: ["120", "125", "115", "130"],
      correct: 0
    },
    {
      question: "Which planet is closest to the Sun?",
      options: ["Venus", "Mercury", "Mars", "Earth"],
      correct: 1
    },
    {
      question: "What is the capital of Nigeria?",
      options: ["Lagos", "Kano", "Abuja", "Port Harcourt"],
      correct: 2
    }
  ];

  useEffect(() => {
    if (phase === 'matching') {
      const timer = setTimeout(() => setPhase('battle'), 3000);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === 'battle' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleNextQuestion();
    }
  }, [phase, timeLeft]);

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 10);
    }
    setTimeout(() => handleNextQuestion(), 1500);
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setTimeLeft(30);
    } else {
      setPhase('results');
      setTimeout(() => {
        onComplete();
        onClose();
      }, 3000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto">
        
        {phase === 'matching' && (
          <div className="p-8 text-center">
            <div className="animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-6"></div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Finding Your Opponent...</h3>
            <p className="text-gray-600">Please wait while we match you with a player of similar skill level.</p>
          </div>
        )}

        {phase === 'battle' && (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {user.username[0]}
                  </div>
                  <span className="font-bold">You: {score}</span>
                </div>
                <div className="text-gray-400">VS</div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    S
                  </div>
                  <span className="font-bold">Sarah_123: {Math.max(0, score - 5)}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-orange-500">
                <Clock className="w-5 h-5" />
                <span className="font-bold text-xl">{timeLeft}s</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {questions[currentQuestion].question}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={`p-4 rounded-xl text-left font-medium transition-all duration-300 ${
                      selectedAnswer === null
                        ? 'bg-gray-100 hover:bg-blue-100 hover:border-blue-300 border-2 border-transparent'
                        : selectedAnswer === index
                        ? index === questions[currentQuestion].correct
                          ? 'bg-green-100 border-2 border-green-500 text-green-700'
                          : 'bg-red-100 border-2 border-red-500 text-red-700'
                        : index === questions[currentQuestion].correct
                        ? 'bg-green-100 border-2 border-green-500 text-green-700'
                        : 'bg-gray-100 border-2 border-gray-300'
                    }`}
                  >
                    <span className="font-bold mr-2">{String.fromCharCode(65 + index)}.</span>
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {phase === 'results' && (
          <div className="p-8 text-center">
            <div className="mb-6">
              {score >= 20 ? (
                <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              ) : (
                <Zap className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              )}
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                {score >= 20 ? 'Victory!' : 'Good Try!'}
              </h3>
              <p className="text-xl text-gray-600 mb-4">Final Score: {score} points</p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-lg mb-2">Rewards Earned:</h4>
              <div className="flex justify-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-500">+{score >= 20 ? 15 : 5}</div>
                  <div className="text-sm text-gray-600">Tokens</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">+{score >= 20 ? 25 : 10}</div>
                  <div className="text-sm text-gray-600">XP</div>
                </div>
                {score >= 20 && (
                  <div className="text-center">
                    <div className="text-2xl">🏆</div>
                    <div className="text-sm text-gray-600">Winner Badge</div>
                  </div>
                )}
              </div>
            </div>
            
            <p className="text-gray-500">Your AI Mentor wants to chat about your performance!</p>
          </div>
        )}

        {phase !== 'results' && (
          <div className="px-6 pb-6">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BattleModal;