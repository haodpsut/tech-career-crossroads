
import React from 'react';
import Card from './Card';
import { csCurriculum, cnitCurriculum, csSkills, cnitSkills, ComputerScienceIcon, NetworkingIcon } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">{children}</h2>
);

const List: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-2 list-disc list-inside text-gray-400">
    {items.map((item, index) => <li key={index}>{item}</li>)}
  </ul>
);

const DeepDive: React.FC = () => {
  return (
    <section>
      <SectionTitle>Deep Dive: Curriculum & Skills</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <div className="flex items-center mb-6">
            <ComputerScienceIcon className="w-8 h-8 mr-3 text-cyan-400" />
            <h3 className="text-2xl font-bold text-cyan-400">Computer Science</h3>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Core Philosophy</h4>
              <p>Embraces abstraction and algorithmic thinking to create software that solves complex problems and drives innovation.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Typical Curriculum</h4>
              <List items={csCurriculum} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Key Skill Development</h4>
              <List items={csSkills} />
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center mb-6">
            <NetworkingIcon className="w-8 h-8 mr-3 text-teal-400" />
            <h3 className="text-2xl font-bold text-teal-400">Networking & Infrastructure</h3>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Core Philosophy</h4>
              <p>Focuses on the tangible hardware and protocols that form the backbone of all digital communication, ensuring reliability and security.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Typical Curriculum</h4>
              <List items={cnitCurriculum} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Key Skill Development</h4>
              <List items={cnitSkills} />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DeepDive;
