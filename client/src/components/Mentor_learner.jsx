import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; // Import the raw Context object

/**
 * Renders the standalone selector for the user's role (Mentor or Mentee).
 * It relies entirely on the global state managed by AppContext.
 */
const MentorLearner = () => {
  // Use useContext to access the shared state and setter function
  const { isNeedingMentor, setIsNeedingMentor } = useContext(AppContext);

  return (
    // Component is centered within its container, using the dark background color
    <div className="flex justify-center items-center p-4 bg-gray-900 mb-0">
      <div className="flex space-x-4">
        
        {/* I need a mentor button */}
        <button
          onClick={() => setIsNeedingMentor(true)}
          className={`
            px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-xl
            ${
              isNeedingMentor
                ? 'bg-blue-600 text-white shadow-blue-600/50 hover:bg-blue-700' // Active style
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white' // Inactive style
            }
          `}
        >
          I need a mentor
        </button>
        
        {/* I want to mentor button */}
        <button
          onClick={() => setIsNeedingMentor(false)}
          className={`
            px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-xl
            ${
              !isNeedingMentor
                ? 'bg-blue-600 text-white shadow-blue-600/50 hover:bg-blue-700' // Active style
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white' // Inactive style
            }
          `}
        >
          I want to mentor
        </button>
      </div>
    </div>
  );
};

export default MentorLearner;
