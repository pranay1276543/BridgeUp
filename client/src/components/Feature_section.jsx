import React from 'react';

// Data for the four campus impact feature cards
const impactFeatures = [
  {
    title: 'Fosters community and collaboration across all year levels',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.887 6.908-1.004L12 2l3.078 6.231 6.908 1.004-4.993 4.887 1.179 6.873z"/>
      </svg>
    ), // Star/Sparkle icon (Represents community)
  },
  {
    title: 'Recognizes mentorship as valuable leadership experience',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12V2L4 5v15c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5l-8-3z"/>
        <path d="M12 22V12m0-10l8 3-8 3-8-3 8-3z"/>
      </svg>
    ), // Badge/Ribbon icon (Represents recognition/leadership)
  },
  {
    title: 'Encourages holistic growth and inclusive learning',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 7L18 12L13 17M6 12H18"/>
      </svg>
    ), // Arrow/Growth icon
  },
  {
    title: 'Provides colleges with real-time engagement insights',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2" ry="2"/><circle cx="7" cy="6" r="3"/><circle cx="17" cy="6" r="3"/>
      </svg>
    ), // Brain/Insights icon
  },
];

/**
 * Renders the Campus Impact Feature section using the dark application theme.
 */
const FeatureSection = () => {
  return (
    // Switched to dark background (bg-gray-900) and white text
    <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-gray-100">
          Impacting Campus Culture
        </h2>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impactFeatures.map((feature, index) => (
            <div 
              key={index} 
              // Card background is gray-800 to stand out from gray-900 body
              className="p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl text-left 
                transition-all duration-300 ease-in-out hover:shadow-blue-500/30 hover:border-blue-500 hover:scale-[1.02] cursor-pointer"
            >
              
              {/* Icon */}
              <div className="mb-4">
                {/* Icon wrapper uses blue theme for visibility */}
                <div className="p-3 inline-block rounded-xl bg-blue-900/30 border-2 border-blue-700/50">
                  {feature.icon}
                </div>
              </div>
              
              {/* Content */}
              <p className="text-xl font-semibold mb-2 text-gray-100">
                {feature.title}
              </p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
