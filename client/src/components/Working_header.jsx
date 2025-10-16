import React from 'react';

// Data for the 3 steps in the process
const steps = [
  {
    title: 'Create Your Profile',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gray-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.88 6-3.88s5.97 1.89 6 3.88c-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
    ),
    description: "Tell us about your academic goals, challenges, and what kind of mentorship you're looking for.",
    details: [
      { text: 'University email verification', color: 'text-blue-500' },
      { text: 'Academic background matching', color: 'text-blue-500' },
      { text: 'Goal-based preferences', color: 'text-blue-500' },
    ],
    accentColor: 'border-blue-500'
  },
  {
    title: 'Get Matched Instantly',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gray-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm4.5 9.5c0 .83-.67 1.5-1.5 1.5h-2v2h-1.5v-2h-2v-1.5h2v-2h1.5v2h2c.83 0 1.5.67 1.5 1.5z"/></svg>
    ),
    description: 'Our AI algorithm connects you with the perfect senior mentor based on your field, goals, and learning style.',
    details: [
      { text: 'AI-powered matching', color: 'text-blue-500' },
      { text: 'Same major/field focus', color: 'text-blue-500' },
      { text: 'Availability alignment', color: 'text-blue-500' },
    ],
    accentColor: 'border-yellow-500'
  },
  {
    title: 'Start Learning',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-yellow-600" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
    ),
    description: 'Begin your mentorship journey with real-time chat, video calls, and structured learning sessions.',
    details: [
      { text: 'Real-time communication', color: 'text-yellow-500' },
      { text: 'Flexible scheduling', color: 'text-yellow-500' },
      { text: 'Progress tracking', color: 'text-yellow-500' },
    ],
    accentColor: 'border-yellow-600'
  },
];

const WorkingHeader = () => {
  return (
    // Dark background theme matching your other sections
    <section className="py-24 px-4 sm:px-8 lg:px-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Title and Subtitle */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-gray-100">
          Get Started in <span className="text-blue-500">3 Simple Steps</span>
        </h2>
        <p className="text-lg text-gray-400 mb-20 max-w-2xl mx-auto">
          From signup to your first mentorship session in under 5 minutes.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="p-8 bg-gray-800 rounded-xl shadow-2xl transition-transform transform hover:scale-[1.02] duration-300 border-t-4 border-b-4 border-transparent hover:border-blue-600"
            >
              
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-full bg-gray-700/50">
                  {step.icon}
                </div>
              </div>

              {/* Step Title */}
              <h3 className="text-2xl font-bold mb-4 text-gray-100">
                {step.title}
              </h3>
              
              {/* Step Description */}
              <p className="text-base text-gray-400 mb-6 min-h-[50px]">
                {step.description}
              </p>

              {/* Details List */}
              <ul className="text-left space-y-2 mt-4 inline-block">
                {step.details.map((detail, detailIndex) => (
                  <li 
                    key={detailIndex} 
                    className={`flex items-start text-sm font-medium ${detail.color}`}
                  >
                    <svg className={`w-4 h-4 mt-1 mr-2 fill-current ${detail.color}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                    {detail.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingHeader;
