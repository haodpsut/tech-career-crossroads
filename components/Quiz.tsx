
import React, { useState } from 'react';
import Card from './Card';
import { quizQuestions } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">{children}</h2>
);

const Quiz: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, 'cs' | 'cnit' | null>>({});
  const [result, setResult] = useState<string | null>(null);

  const handleAnswerChange = (questionId: number, value: 'cs' | 'cnit') => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    setResult(null); // Reset result if an answer is changed
  };

  const calculateResult = () => {
    const csCount = Object.values(answers).filter(v => v === 'cs').length;
    const cnitCount = Object.values(answers).filter(v => v === 'cnit').length;

    if (csCount === 0 && cnitCount === 0) {
        setResult("Please answer at least one question to see your path.");
        return;
    }

    if (csCount > cnitCount) {
      setResult("You seem to be leaning towards Computer Science! Your interest in building, creating, and problem-solving through code aligns perfectly with the CS path.");
    } else if (cnitCount > csCount) {
      setResult("Your path points towards Networking & Infrastructure! Your curiosity about how systems connect and remain secure is a hallmark of a great CNIT professional.");
    } else {
      setResult("It's a tie! You have a balanced interest in both creating software and managing the infrastructure it runs on. You might enjoy hybrid roles like DevOps or Site Reliability Engineering.");
    }
  };

  return (
    <section>
      <SectionTitle>Which Path is Yours?</SectionTitle>
      <Card className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {quizQuestions.map(q => (
            <div key={q.id}>
              <p className="font-semibold text-lg mb-4 text-white">{q.id}. {q.question}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {q.options.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => handleAnswerChange(q.id, opt.value)}
                    className={`p-4 rounded-lg text-left transition-all duration-200 border-2 ${answers[q.id] === opt.value ? 'bg-cyan-500/20 border-cyan-500 text-white' : 'bg-gray-700/50 border-gray-600 hover:border-cyan-400/50 hover:bg-gray-700'}`}
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <div className="text-center pt-4">
            <button
              onClick={calculateResult}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              See My Path
            </button>
          </div>
          {result && (
            <div className="mt-8 p-4 bg-gray-700/50 border border-gray-600 rounded-lg text-center">
              <p className="text-lg text-gray-200">{result}</p>
            </div>
          )}
        </div>
      </Card>
    </section>
  );
};

export default Quiz;
