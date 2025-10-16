import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SelectLog = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  // State to track the currently selected option for visual feedback (optional)
  const [selectedOption, setSelectedOption] = useState(null);

  // Function to handle registration redirect
  const handleRegister = () => {
    setSelectedOption('register');
    navigate('/register'); // Redirects to /register
  };

  // Function to handle login redirect
  const handleLogin = () => {
    setSelectedOption('login');
    navigate('/login'); // Redirects to /login
  };

  // Tailwind classes for button styling based on selection
  const getButtonClasses = (option) => {
    const baseClasses = 'w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform';
    if (selectedOption === option) {
      // Selected state: Bright blue background, white text
      return `${baseClasses} bg-blue-600 text-white shadow-lg shadow-blue-500/50 hover:bg-blue-700 scale-[1.02]`;
    } else {
      // Unselected state: Dark background, light text, subtle border
      return `${baseClasses} bg-gray-700 text-gray-300 border border-gray-600 hover:bg-gray-600 hover:border-blue-500`;
    }
  };

  return (
    // Outer container ensures component fills the screen with dark theme
    <section className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      
      {/* Centered Card Container */}
      <div className="w-full max-w-md p-8 sm:p-10 bg-gray-800 rounded-2xl shadow-2xl text-center border-t-4 border-blue-600">
        
        <h2 className="text-4xl font-extrabold text-white mb-3">
          Join BridgeUp
        </h2>
        
        <p className="text-gray-400 text-lg mb-10">
          Unlock personalized mentorship by logging in or creating a new account.
        </p>

        {/* Buttons Grid */}
        <div className="flex flex-col space-y-4">
          
          <button
            onClick={handleRegister}
            className={getButtonClasses('register')}
          >
            Register Now
          </button>

          <p className="text-gray-500 font-medium my-2">
            — OR —
          </p>

          <button
            onClick={handleLogin}
            className={getButtonClasses('login')}
          >
            Log In
          </button>
        </div>
        
        {/* Footer/Help Text */}
        <p className="text-sm text-gray-500 mt-10">
          Need help? Contact support or see our <a href="#" className="text-blue-500 hover:underline">FAQ.</a>
        </p>
      </div>
    </section>
  );
};

export default SelectLog;
