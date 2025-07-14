import React from 'react';
import Card from './Card';
import { csCareers, cnitCareers, ComputerScienceIcon, NetworkingIcon } from '../constants';
import { Career } from '../types';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">{children}</h2>
);

const DemandIndicator: React.FC<{ demand: 'Very High' | 'High' | 'Medium' }> = ({ demand }) => {
  const demandStyles = {
    'Very High': { color: 'bg-green-400', text: 'Very High' },
    'High': { color: 'bg-yellow-400', text: 'High' },
    'Medium': { color: 'bg-orange-400', text: 'Medium' },
  };
  const { color, text } = demandStyles[demand];
  return <div className={`w-3.5 h-3.5 rounded-full ${color}`} title={`Demand: ${text}`}></div>;
};

const CareerChart: React.FC<{ careers: Career[], maxSalary: number }> = ({ careers, maxSalary }) => (
  <div className="space-y-5">
    {careers.map((career) => {
      const barWidth = (career.avgSalary / maxSalary) * 100;
      return (
        <div key={career.title} className="group" aria-label={`${career.title}: Average Salary ${career.salaryFormatted}, Projected Growth ${career.growth * 100}%`}>
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-sm font-medium text-gray-200">{career.title}</span>
            <span className="text-sm font-mono text-cyan-300">{career.salaryFormatted}</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex-grow bg-gray-700/80 rounded-full h-3.5">
              <div
                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${barWidth}%` }}
                role="progressbar"
                aria-valuenow={career.avgSalary}
                aria-valuemin={0}
                aria-valuemax={maxSalary}
              ></div>
            </div>
            <div className="flex items-center space-x-2 w-24 flex-shrink-0 justify-end">
                <DemandIndicator demand={career.demand} />
                <span className="text-xs font-mono text-green-400 w-14 text-right" title={`Projected Annual Growth: ${career.growth * 100}%`}>
                  +{Math.round(career.growth * 100)}%
                </span>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);


const CareersSalary: React.FC = () => {
  // Combine all careers to find the absolute max salary for consistent scaling
  const allCareers = [...csCareers, ...cnitCareers];
  const maxSalary = Math.max(...allCareers.map(c => c.avgSalary), 0);

  return (
    <section>
      <SectionTitle>Careers, Salaries &amp; Growth</SectionTitle>
       <div className="max-w-4xl mx-auto mb-8 px-4">
        <div className="flex justify-end items-center flex-wrap gap-x-4 gap-y-2 text-xs text-gray-400">
            <span>Demand Level:</span>
            <span className="flex items-center"><div className="w-3 h-3 rounded-full bg-green-400 mr-1.5"></div>Very High</span>
            <span className="flex items-center"><div className="w-3 h-3 rounded-full bg-yellow-400 mr-1.5"></div>High</span>
            <span className="flex items-center"><div className="w-3 h-3 rounded-full bg-orange-400 mr-1.5"></div>Medium</span>
            <span className="text-gray-500 hidden sm:inline">|</span>
            <span className="flex items-center text-green-400 font-mono">
              +%
              <span className="text-gray-400 ml-1.5 font-sans"> = Projected Growth</span>
            </span>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <div className="flex items-center mb-6">
            <ComputerScienceIcon className="w-8 h-8 mr-3 text-cyan-400" />
            <h3 className="text-2xl font-bold text-cyan-400">CS Careers</h3>
          </div>
          <CareerChart careers={csCareers} maxSalary={maxSalary} />
        </Card>
        <Card>
          <div className="flex items-center mb-6">
            <NetworkingIcon className="w-8 h-8 mr-3 text-teal-400" />
            <h3 className="text-2xl font-bold text-teal-400">CNIT Careers</h3>
          </div>
          <CareerChart careers={cnitCareers} maxSalary={maxSalary} />
        </Card>
      </div>
    </section>
  );
};

export default CareersSalary;
