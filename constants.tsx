import React from 'react';
import { Career, QuizQuestion } from './types';

export const ComputerScienceIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

export const NetworkingIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
  </svg>
);

export const csCurriculum: string[] = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Database Systems",
  "Artificial Intelligence & Machine Learning",
  "Web Development Frameworks",
  "Operating Systems",
  "Compiler Design"
];

export const cnitCurriculum: string[] = [
  "TCP/IP & Network Protocols",
  "Routing & Switching (Cisco/Juniper)",
  "Network Security & Firewalls",
  "Cloud Infrastructure (AWS/Azure)",
  "Wireless Networking Standards",
  "Linux/Windows Server Administration",
  "Ethical Hacking & Penetration Testing"
];

export const csSkills: string[] = ["Problem-Solving & Logic", "Python, Java, C++", "Software Architecture", "Algorithmic Thinking", "Data Modeling", "Version Control (Git)"];
export const cnitSkills: string[] = ["Network Troubleshooting", "Cisco IOS, Junos", "Packet Analysis (Wireshark)", "Firewall Configuration", "Virtualization (VMware)", "Scripting (Python, Bash)"];

export const csCareers: Career[] = [
    { title: "AI/ML Engineer", avgSalary: 140000, salaryFormatted: "$140,000", growth: 0.35, demand: "Very High" },
    { title: "Data Scientist", avgSalary: 130000, salaryFormatted: "$130,000", growth: 0.30, demand: "Very High" },
    { title: "Software Engineer", avgSalary: 120000, salaryFormatted: "$120,000", growth: 0.22, demand: "Very High" },
    { title: "Full-Stack Developer", avgSalary: 115000, salaryFormatted: "$115,000", growth: 0.25, demand: "High" },
    { title: "Game Developer", avgSalary: 105000, salaryFormatted: "$105,000", growth: 0.18, demand: "Medium" }
];

export const cnitCareers: Career[] = [
    { title: "Network Architect", avgSalary: 135000, salaryFormatted: "$135,000", growth: 0.15, demand: "High" },
    { title: "Cloud Engineer", avgSalary: 125000, salaryFormatted: "$125,000", growth: 0.28, demand: "Very High" },
    { title: "Cybersecurity Analyst", avgSalary: 110000, salaryFormatted: "$110,000", growth: 0.32, demand: "Very High" },
    { title: "Network Engineer", avgSalary: 100000, salaryFormatted: "$100,000", growth: 0.12, demand: "High" },
    { title: "Systems Administrator", avgSalary: 90000, salaryFormatted: "$90,000", growth: 0.08, demand: "Medium" }
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Which question sparks more of your curiosity?",
    options: [
      { text: "How can I build an application to solve a user's problem?", value: 'cs' },
      { text: "How do billions of devices talk to each other instantly?", value: 'cnit' }
    ]
  },
  {
    id: 2,
    question: "When a system fails, your first instinct is to check...",
    options: [
      { text: "The application logs for a bug in the code.", value: 'cs' },
      { text: "The server status and network connectivity.", value: 'cnit' }
    ]
  },
  {
    id: 3,
    question: "You're more excited by the idea of...",
    options: [
      { text: "Designing a clever algorithm to process data efficiently.", value: 'cs' },
      { text: "Building a secure and resilient network for a global company.", value: 'cnit' }
    ]
  },
  {
    id: 4,
    question: "Which project sounds more appealing?",
    options: [
      { text: "Creating a mobile app from scratch.", value: 'cs' },
      { text: "Setting up and securing a corporate cloud environment.", value: 'cnit' }
    ]
  }
];
