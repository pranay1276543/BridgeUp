import React, { useState, useRef, useEffect } from 'react';

// Define the static list of colleges (Name and Area)
const STATIC_COLLEGES = [
  { id: 'usict', name: 'USICT', area: 'Dwarka' },
  { id: 'usar', name: 'USAR', area: 'Karkardooma' },
  { id: 'bvcoe', name: 'BVCOE', area: 'Paschim Vihar' },
  { id: 'vips', name: 'VIPS', area: 'Pritampura' },
  { id: 'adgips', name: 'Adgips', area: 'Shastri Park' },
];

// Define the static list of degrees
const STATIC_DEGREES = [
  { id: 'btech', name: 'BTech' },
  { id: 'ba', name: 'BA' },
  { id: 'bba', name: 'BBA' },
  { id: 'bca', name: 'BCA' },
  { id: 'bajmc', name: 'BAJMC' },
  { id: 'mtech', name: 'MTech' },
  { id: 'mca', name: 'MCA' },
];

const LearnerRegister = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '', // Changed from collegeEmail to generic email
    password: '', // NEW: Added password field for registration
    collegeNameInput: '',
    selectedCollege: null,
    degreeInput: '',
    selectedDegree: null,
    branch: '',
  });

  // Search States
  const [collegeResults, setCollegeResults] = useState([]);
  const [showCollegeDropdown, setShowCollegeDropdown] = useState(false);
  const [degreeResults, setDegreeResults] = useState([]);
  const [showDegreeDropdown, setShowDegreeDropdown] = useState(false);

  // Refs
  const searchCollegeRef = useRef(null);
  const searchDegreeRef = useRef(null);

  // --- Theme Setup ---
  const inputClasses = "w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200 shadow-inner";
  const labelClasses = "block text-sm font-medium text-gray-300 mb-2 text-left";

  // --- Search Logic (Static Filtering) ---
  const handleCollegeSearch = (keyword) => {
    if (keyword.length > 0) {
      const filtered = STATIC_COLLEGES.filter(c => 
        c.name.toLowerCase().includes(keyword.toLowerCase()) || 
        c.area.toLowerCase().includes(keyword.toLowerCase())
      );
      setCollegeResults(filtered);
      setShowCollegeDropdown(true);
    } else {
      setCollegeResults([]);
      setShowCollegeDropdown(false);
    }
  };

  const handleDegreeSearch = (keyword) => {
    if (keyword.length > 0) {
      const filtered = STATIC_DEGREES.filter(d => 
        d.name.toLowerCase().includes(keyword.toLowerCase())
      );
      setDegreeResults(filtered);
      setShowDegreeDropdown(true);
    } else {
      setDegreeResults([]);
      setShowDegreeDropdown(false);
    }
  };

  // --- Click outside dropdown handlers ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchCollegeRef.current && !searchCollegeRef.current.contains(event.target)) {
        setShowCollegeDropdown(false);
      }
      if (searchDegreeRef.current && !searchDegreeRef.current.contains(event.target)) {
        setShowDegreeDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- Handlers ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'collegeNameInput' && { selectedCollege: null }),
      ...(name === 'degreeInput' && { selectedDegree: null }),
    }));
    
    if (name === 'collegeNameInput') {
        handleCollegeSearch(value);
    } else if (name === 'degreeInput') {
        handleDegreeSearch(value);
    }
  };

  const handleCollegeSelect = (college) => {
    setFormData(prev => ({
      ...prev,
      collegeNameInput: `${college.name}, ${college.area}`,
      selectedCollege: college,
    }));
    setCollegeResults([]);
    setShowCollegeDropdown(false);
  };
  
  const handleDegreeSelect = (degree) => {
    setFormData(prev => ({
      ...prev,
      degreeInput: degree.name,
      selectedDegree: degree,
    }));
    setDegreeResults([]);
    setShowDegreeDropdown(false);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Learner Form Data Submitted:", formData);
    alert("Learner Registration data logged to console!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <div className="w-full max-w-xl p-8 bg-gray-800 rounded-2xl shadow-2xl border-t-4 border-blue-600">
        
        <h2 className="text-3xl font-bold text-white mb-2 text-center">Learner Registration</h2>
        <p className="text-gray-400 text-center mb-8">Start learning today by creating your free account.</p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* 1) Full Name */}
          <div>
            <label htmlFor="fullName" className={labelClasses}>1) Enter Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={inputClasses}
              placeholder="E.g., John Smith"
              required
            />
          </div>

          {/* 2) Email ID (UPDATED LABEL) */}
          <div>
            <label htmlFor="email" className={labelClasses}>2) Enter Email ID</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClasses}
              placeholder="E.g., john.smith@example.com"
              required
            />
          </div>

          {/* 3) Password (NEW FIELD) */}
          <div>
            <label htmlFor="password" className={labelClasses}>3) Create Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Min 6 characters"
              required
            />
          </div>

          {/* 4) College Search */}
          <div ref={searchCollegeRef} className="relative">
            <label htmlFor="collegeNameInput" className={labelClasses}>4) Enter College (Optional)</label>
            <input
              type="text"
              id="collegeNameInput"
              name="collegeNameInput"
              value={formData.collegeNameInput}
              onChange={handleChange}
              onFocus={() => handleCollegeSearch(formData.collegeNameInput)}
              className={inputClasses}
              placeholder="Start typing your college name..."
            />
            
            {/* College Search Dropdown */}
            {showCollegeDropdown && formData.collegeNameInput.length > 0 && (
              <ul className="absolute z-10 w-full bg-gray-700 border border-gray-600 mt-1 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                {collegeResults.length > 0 ? (
                  collegeResults.map(college => (
                    <li
                      key={college.id}
                      className="px-4 py-2 cursor-pointer text-gray-200 hover:bg-blue-600 hover:text-white transition-colors text-left"
                      onClick={() => handleCollegeSelect(college)}
                    >
                      {college.name}, {college.area}
                    </li>
                  ))
                ) : (
                    <li className="px-4 py-2 text-gray-400">No colleges found.</li>
                )}
              </ul>
            )}
            {formData.selectedCollege && (
                <p className="text-sm text-green-400 mt-2">Selected College: {formData.selectedCollege.name}, {formData.selectedCollege.area}</p>
            )}
          </div>
          
          {/* 5) Degree Search */}
          <div ref={searchDegreeRef} className="relative">
            <label htmlFor="degreeInput" className={labelClasses}>5) Enter Degree (Optional)</label>
            <input
              type="text"
              id="degreeInput"
              name="degreeInput"
              value={formData.degreeInput}
              onChange={handleChange}
              onFocus={() => handleDegreeSearch(formData.degreeInput)}
              className={inputClasses}
              placeholder="Start typing your degree (e.g., BTech, MCA)..."
            />
            
            {/* Degree Search Dropdown */}
            {showDegreeDropdown && formData.degreeInput.length > 0 && (
              <ul className="absolute z-10 w-full bg-gray-700 border border-gray-600 mt-1 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                {degreeResults.length > 0 ? (
                  degreeResults.map(degree => (
                    <li
                      key={degree.id}
                      className="px-4 py-2 cursor-pointer text-gray-200 hover:bg-blue-600 hover:text-white transition-colors text-left"
                      onClick={() => handleDegreeSelect(degree)}
                    >
                      {degree.name}
                    </li>
                  ))
                ) : (
                    <li className="px-4 py-2 text-gray-400">No degrees found.</li>
                )}
              </ul>
            )}
            {formData.selectedDegree && (
                <p className="text-sm text-green-400 mt-2">Selected Degree: {formData.selectedDegree.name}</p>
            )}
          </div>

          {/* 6) Branch (Kept as Select Dropdown) */}
          <div>
            <label htmlFor="branch" className={labelClasses}>6) Enter Branch (Optional)</label>
            <select
              id="branch"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className={inputClasses}
            >
              <option value="">Select your branch/field</option>
              <option value="none">None (General Studies)</option>
              <option value="CS">Computer Science</option>
              <option value="EE">Electrical Engineering</option>
              <option value="ME">Mechanical Engineering</option>
              <option value="Civil">Civil Engineering</option>
              <option value="Math">Mathematics</option>
              <option value="Arts">Arts/Humanities</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg shadow-blue-500/50"
          >
            Register as Learner
          </button>
        </form>
      </div>
    </div>
  );
};

export default LearnerRegister;
