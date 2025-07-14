
import React from 'react';
import Header from './components/Header';
import AtAGlance from './components/AtAGlance';
import DeepDive from './components/DeepDive';
import CareersSalary from './components/CareersSalary';
import FutureOutlook from './components/FutureOutlook';
import Quiz from './components/Quiz';
import NextSteps from './components/NextSteps';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8 md:px-8 md:py-12">
        <div className="space-y-16">
          <AtAGlance />
          <DeepDive />
          <CareersSalary />
          <FutureOutlook />
          <Quiz />
          <NextSteps />
        </div>
      </main>
      <footer className="text-center py-8 text-gray-500">
        <p>&copy; 2024 Tech Career Crossroads. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
