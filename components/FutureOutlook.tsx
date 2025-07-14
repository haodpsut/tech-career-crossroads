
import React from 'react';
import Card from './Card';
import { ComputerScienceIcon, NetworkingIcon } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">{children}</h2>
);

const FutureOutlook: React.FC = () => {
  return (
    <section>
      <SectionTitle>Future Outlook (5-10 Years)</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <div className="flex items-center mb-6">
            <ComputerScienceIcon className="w-8 h-8 mr-3 text-cyan-400" />
            <h3 className="text-2xl font-bold text-cyan-400">The Future of CS</h3>
          </div>
          <p className="text-gray-300">
            The demand for CS professionals will continue to surge, driven by advancements in <strong>Artificial Intelligence, Quantum Computing, and decentralized systems (Web3)</strong>. Specialization will be key, with deep expertise in areas like AI ethics, large-scale data engineering, and specialized software for IoT and robotics becoming highly valuable.
          </p>
        </Card>
        <Card>
          <div className="flex items-center mb-6">
            <NetworkingIcon className="w-8 h-8 mr-3 text-teal-400" />
            <h3 className="text-2xl font-bold text-teal-400">The Future of CNIT</h3>
          </div>
          <p className="text-gray-300">
            The backbone of technology will grow more complex with the expansion of <strong>5G/6G networks, Edge Computing, and the Internet of Things (IoT)</strong>. Cybersecurity will become even more critical, leading to high demand for experts in Zero Trust architecture, cloud security, and IoT device protection. Automation of network operations (NetDevOps) will be a standard skill.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default FutureOutlook;
