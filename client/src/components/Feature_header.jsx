import React from 'react';

// Data for all core feature cards
const features = [
  // === ROW 1: CORE FEATURES ===
  {
    title: 'Smart Mentor-Mentee Matching',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ), // Connection icon
    description: 'AI-powered BridgeScore algorithm finds your perfect match based on goals, interests, and compatibility.',
  },
  {
    title: 'Real-Time Mentorship Rooms',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ), // Chat Bubble icon
    description: 'Connect instantly through dedicated virtual spaces for seamless collaboration and guidance.',
  },
  {
    title: 'Gamified BridgeCoins & Badges',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 10 12 13 15 10"/>
      </svg>
    ), // Badge/Reward icon
    description: 'Earn rewards for mentoring, grow your reputation, and unlock exclusive opportunities.',
  },
  // === ROW 2: NEW FEATURES (ADDED) ===
  {
    title: 'Micro-Mentorships',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ), // Clock icon
    description: 'Quick 15-minute sessions perfect for busy schedules and focused problem-solving.',
  },
  {
    title: 'Digital Mentorship Portfolios',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ), // Shield/Vault icon (Used a lock/vault icon for credentials)
    description: 'Build verified credentials showcasing your impact as a mentor or mentee.',
  },
  {
    title: 'Mood-Based Matching',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A7 7 0 0 0 12 4a7 7 0 0 0-10 2.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/>
      </svg>
    ), // Heart icon (Used a solid heart/love icon for empathy)
    description: 'Connect with mentors who understand your current state and can provide empathetic guidance.',
  },
];

/**
 * Renders the Core Features Header section using the dark application theme.
 */
const FeatureHeader = () => {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-gray-100">
          Core Features That Make <span className="text-blue-500">BridgeUp</span> Unique
        </h2>

        {/* Feature Cards Grid (Now 6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl transition-all duration-300 ease-in-out hover:shadow-blue-500/30 hover:border-blue-500 hover:scale-[1.02] cursor-pointer h-full"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-xl bg-blue-900/40 border-2 border-blue-700/50">
                  {feature.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-gray-100">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeatureHeader;
