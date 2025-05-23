'use client';

import { useState } from 'react';

const services = [
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    content:
      'Transforming raw data into actionable insights through statistical analysis and visualization techniques.',
  },
  {
    id: 'bi-development',
    title: 'BI Development',
    content:
      'Creating interactive dashboards and reports that help businesses make data-driven decisions.',
  },
  {
    id: 'python',
    title: 'Python Development',
    content:
      'Building custom data solutions, automation scripts, and machine learning models.',
  },
  {
    id: 'reports',
    title: 'Reports & Dashboards',
    content:
      'Designing clear, informative reports that communicate complex data effectively.',
  },
];

export default function WhatIDoSection() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setExpandedSection(prev => (prev === id ? null : id));
  };

  return (
    <section className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 text-center">What I Do</h2>
      <div className="grid gap-4 max-w-md mx-auto">
        {services.map(service => (
          <div key={service.id} className="border rounded-lg overflow-hidden">
            <button
              className="w-full flex justify-between items-center p-4 bg-white"
              onClick={() => toggleSection(service.id)}
            >
              <span className="font-medium">{service.title}</span>
              <span>{expandedSection === service.id ? '−' : '+'}</span>
            </button>
            {expandedSection === service.id && (
              <div className="p-4 bg-gray-50 border-t">
                <p className="text-gray-600">{service.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
