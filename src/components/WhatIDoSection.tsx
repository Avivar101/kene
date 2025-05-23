import React from 'react';

interface Service {
  title: string;
  description: string;
  icon: string;
}

const WhatIDoSection: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Web Development',
      description: 'Building modern, responsive websites with React and Next.js',
      icon: '💻'
    },
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive user interfaces and experiences',
      icon: '🎨'
    },
    {
      title: 'Consulting',
      description: 'Helping businesses optimize their digital presence',
      icon: '📈'
    }
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          What I Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;