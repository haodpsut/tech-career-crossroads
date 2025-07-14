
import React from 'react';
import Card from './Card';
import { ComputerScienceIcon, NetworkingIcon } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">{children}</h2>
);

const NextSteps: React.FC = () => {
  return (
    <section>
      <SectionTitle>Chart Your Course: Next Steps</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <div className="flex items-center mb-6">
            <ComputerScienceIcon className="w-8 h-8 mr-3 text-cyan-400" />
            <h3 className="text-2xl font-bold text-cyan-400">For the Future CS Major</h3>
          </div>
          <ul className="space-y-3 list-disc list-inside text-gray-300">
            <li><strong>Build Projects:</strong> Create a personal website, a small mobile app, or contribute to an open-source project on GitHub.</li>
            <li><strong>Learn in Public:</strong> Start a blog or a portfolio to document your learning journey and showcase your work.</li>
            <li><strong>Master an IDE:</strong> Get comfortable with a professional development environment like VS Code or JetBrains IDEs.</li>
            <li><strong>Find Internships:</strong> Look for software development or web development internships to gain real-world experience.</li>
          </ul>
        </Card>
        <Card>
          <div className="flex items-center mb-6">
            <NetworkingIcon className="w-8 h-8 mr-3 text-teal-400" />
            <h3 className="text-2xl font-bold text-teal-400">For the Future CNIT Pro</h3>
          </div>
          <ul className="space-y-3 list-disc list-inside text-gray-300">
            <li><strong>Get Certified:</strong> Start with certifications like CompTIA Network+ or Cisco's CCNA to build a strong foundation.</li>
            <li><strong>Build a Home Lab:</strong> Use virtualization (like VirtualBox) or old hardware to practice setting up networks and servers.</li>
            <li><strong>Learn to Script:</strong> Master Python or Bash for automating network tasks. It's a highly sought-after skill.</li>
            <li><strong>Join Online Communities:</strong> Participate in forums and communities to learn from experienced professionals.</li>
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default NextSteps;
