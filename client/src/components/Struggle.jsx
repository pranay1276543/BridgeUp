import React, { useState } from 'react';

// Data for the three new challenge cards
const challenges = [
  {
    id: 'academic',
    title: 'Academic Struggles',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    description: 'Difficulty understanding complex concepts and improving grades',
  },
  {
    id: 'career',
    title: 'Career Uncertainty',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <polyline points="17 11 19 13 23 9" />
      </svg>
    ),
    description: 'Unsure about career paths and industry insights',
  },
  {
    id: 'networking',
    title: 'Networking Gaps',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10s-4 9-11 9-11-9-11-9" />
        <path d="M2 10c0-2 2-4 5-4s5 2 5 4" />
        <path d="M12 10c0-2 2-4 5-4s5 2 5 4" />
      </svg>
    ),
    description: 'Limited connections with experienced students and professionals',
  },
];

/**
 * Renders the "The Struggle is Real" section, highlighting key challenges
 * college students face using data cards and interactive challenge selection cards.
 */
const StruggleSection = () => {
  // State for tracking the selected challenge card
  const [selectedChallenge, setSelectedChallenge] = useState('academic');

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* === PART 1: The Struggle is Real (Metrics) === */}
        <h2 className="text-4xl font-extrabold mb-4 text-gray-100">
          The Struggle is Real for College Students
        </h2>
        <p className="text-lg text-gray-400 mb-16 max-w-2xl mx-auto">
          Traditional academic support systems are failing students when they need guidance most.
        </p>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">

          {/* Card 1: Lack of Guidance (Red Theme) */}
          <div className="p-8 rounded-xl shadow-2xl bg-gray-800 border-t-4 border-red-700 transition-transform transform hover:scale-[1.03] duration-300">
            <h3 className="text-5xl font-extrabold mb-4 text-red-500">73%</h3>
            <p className="text-sm font-semibold uppercase tracking-wide mb-4 text-red-200">of college juniors</p>
            <p className="text-base text-gray-300">
              struggle with career direction and lack guidance from experienced peers.
            </p>
          </div>

          {/* Card 2: High Cost (Yellow/Gold Theme) */}
          <div className="p-8 rounded-xl shadow-2xl bg-gray-800 border-t-4 border-yellow-600 transition-transform transform hover:scale-[1.03] duration-300">
            <h3 className="text-5xl font-extrabold mb-4 text-yellow-500">$50</h3>
            <p className="text-sm font-semibold uppercase tracking-wide mb-4 text-yellow-200">average tutoring cost</p>
            <p className="text-base text-gray-300">
              per hour makes personalized academic help unaffordable for most students.
            </p>
          </div>

          {/* Card 3: Limited Mentorship (Blue Theme) */}
          <div className="p-8 rounded-xl shadow-2xl bg-gray-800 border-t-4 border-blue-600 transition-transform transform hover:scale-[1.03] duration-300">
            <h3 className="text-5xl font-extrabold mb-4 text-blue-500">Limited</h3>
            <p className="text-sm font-semibold uppercase tracking-wide mb-4 text-blue-200">peer mentorship</p>
            <p className="text-base text-gray-300">
              opportunities leave students without relatable guidance from those who've been there.
            </p>
          </div>
        </div>

        {/* === PART 2: What challenges are you facing? (Interactive Selection) === */}
        <h2 className="text-3xl font-extrabold mb-12 text-gray-100">
          What challenges are you facing?
        </h2>

        {/* Challenge Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              onClick={() => setSelectedChallenge(challenge.id)}
              className={`
                p-6 rounded-xl shadow-lg bg-gray-800 cursor-pointer text-left h-full
                transition-all duration-300 ease-in-out
                ${
                  selectedChallenge === challenge.id
                    ? 'border-2 border-blue-600 ring-4 ring-blue-500/30' // Selected style
                    : 'border-2 border-gray-800 hover:border-gray-700' // Unselected style
                }
              `}
            >
              <div className="flex items-start mb-4">
                <span className={`transition-colors duration-300 ${selectedChallenge === challenge.id ? 'text-blue-500' : 'text-gray-400'}`}>
                    {/* Icon for the challenge */}
                    {challenge.icon}
                </span>
                <h3 className="text-xl font-semibold text-gray-100">{challenge.title}</h3>
              </div>
              <p className="text-sm text-gray-400 pl-9">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StruggleSection;
