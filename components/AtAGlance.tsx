
import React from 'react';
import Card from './Card';
import { ComputerScienceIcon, NetworkingIcon } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">{children}</h2>
);

const AtAGlance: React.FC = () => {
  return (
    <section>
      <SectionTitle>At a Glance: Two Paths in Technology</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <div className="flex items-center mb-4">
            <ComputerScienceIcon className="w-8 h-8 mr-3 text-cyan-400" />
            <h3 className="text-2xl font-bold text-cyan-400">Computer Science (CS)</h3>
          </div>
          <div className="space-y-4 text-gray-300">
            <div>
              <h4 className="font-semibold text-white">Core Question:</h4>
              <p>"What problems can we solve with computing?"</p>
            </div>
            <div>
              <h4 className="font-semibold text-white">Philosophy:</h4>
              <p>Focuses on algorithms, software systems, and innovation through computing.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white">Focus:</h4>
              <p>Software development, AI, data structures, and problem-solving.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white">Work Style:</h4>
              <p>Logical, innovative, and "problem-facing."</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center mb-4">
            <NetworkingIcon className="w-8 h-8 mr-3 text-teal-400" />
            <h3 className="text-2xl font-bold text-teal-400">Computer Networking & Infrastructure (CNIT)</h3>
          </div>
          <div className="space-y-4 text-gray-300">
            <div>
              <h4 className="font-semibold text-white">Core Question:</h4>
              <p>"How do we build, operate, and secure the network?"</p>
            </div>
            <div>
              <h4 className="font-semibold text-white">Philosophy:</h4>
              <p>Emphasizes technical mastery—designing and securing digital infrastructure.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white">Focus:</h4>
              <p>Protocols, hardware, cybersecurity, and system performance.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white">Work Style:</h4>
              <p>Technical, detail-oriented, and "machine-facing."</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AtAGlance;
