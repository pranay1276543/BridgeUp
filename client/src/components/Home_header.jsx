import React, { useState, useContext } from 'react'; // 1. ADD useContext to React import
import { assets } from '../assets/assets.js'; 
import { AppContext } from '../context/AppContext'; // 2. CHANGE to import AppContext (raw object)

const HomeHeader = () => {
    // 3. Use useContext and pass the AppContext object to it
    const { isNeedingMentor, setIsNeedingMentor } = useContext(AppContext);
 
    

    const classroomImage = assets.classroom || "https://placehold.co/800x600/1e293b/ffffff?text=Live+Mentorship+Session";

 
    const [isCardHovered, setIsCardHovered] = useState(false); // KEEP: This is local UI state

    // Tailwind CSS classes for the dynamic card transformation
    const cardTransformClasses = isCardHovered
      ? 'scale-[1.02] -rotate-1 transition duration-300 ease-in-out shadow-2xl shadow-blue-900/50'
      : 'scale-100 rotate-0 transition duration-300 ease-in-out shadow-xl';

    return (
      <div className="min-h-[90vh] bg-gray-900 text-white pt-10 pb-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Role Selection Buttons */}
          <div className="flex space-x-2 mb-16 justify-center lg:justify-start">
            <button
              onClick={() => setIsNeedingMentor(true)} // USE context setter
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                isNeedingMentor
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/50'
                  : 'bg-pink-800 text-gray-400 hover:bg-white-700'
              }`}
            >
              I need a mentor
            </button>
            <button
              onClick={() => setIsNeedingMentor(false)} // USE context setter
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                !isNeedingMentor
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/50'
                  : 'bg-pink-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              I want to mentor
            </button>
          </div>

          {/* Main Content Grid */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left Content (Text and CTAs) */}
            <div className="lg:w-1/2 w-full text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                Bridge the Gap <br className="hidden md:inline" />
                <span className="text-blue-500">Between</span>
              </h1>

              <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
                Get personalized guidance from experienced seniors in your field. Connect instantly, learn faster, and achieve your academic goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
                <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-xl transition-transform transform hover:-translate-y-0.5">
                  { isNeedingMentor? "Find Your Mentor":"Answer Question  "}
                </button>
                <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700 font-semibold rounded-lg transition-transform transform hover:-translate-y-0.5">
                  See How It Works
                </button>
              </div>

              {/* Feature Checklist */}
              <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-300 justify-center lg:justify-start">
                <span className="flex items-center text-green-400">
                  <svg className="w-4 h-4 mr-1 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                  Free to join
                </span>
                <span className="flex items-center text-green-400">
                  <svg className="w-4 h-4 mr-1 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                  Verified mentors
                </span>
                <span className="flex items-center text-green-400">
                  <svg className="w-4 h-4 mr-1 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                  24/7 support
                </span>
              </div>
            </div>

            {/* Right Content (Image Card with Zoom/Slant Hover Effect) */}
            <div className="lg:w-1/2 w-full flex justify-center lg:justify-end relative">
              
              {/* Active Mentors Badge */}
              <div className="absolute top-[-30px] right-1/2 translate-x-1/2 lg:right-4 lg:translate-x-0 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm z-10 shadow-lg">
                2,847 Active Mentors
              </div>

              {/* Main Card Container */}
              <div
                className={`w-full max-w-lg bg-gray-800 rounded-xl overflow-hidden ${cardTransformClasses}`}
                onMouseEnter={() => setIsCardHovered(true)}
                onMouseLeave={() => setIsCardHovered(false)}
              >
                
                {/* Image */}
                <div className="relative aspect-video">
                  <img
                    src={classroomImage}
                    alt="Students in a modern study area"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null; // prevents infinite loop
                      e.target.src = "https://placehold.co/800x600/1e293b/ffffff?text=Image+Loading+Error";
                    }}
                  />
                </div>

                {/* Card Footer Details */}
                <div className="p-5">
                  <p className="text-xl font-semibold mb-2">Interaction Between Senior and Junior</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Lets Grow Together</span>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HomeHeader;
