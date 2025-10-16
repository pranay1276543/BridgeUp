import React, { useState, useRef, useEffect } from 'react';
// Removed: import axios from 'axios'; 

// Define the static list of colleges (Name and Area)
const STATIC_COLLEGES = [
  { id: 'usict', name: 'USICT', area: 'Dwarka' },
  { id: 'usar', name: 'USAR', area: 'Karkardooma' },
  { id: 'bvcoe', name: 'BVCOE', area: 'Paschim Vihar' },
  { id: 'vips', name: 'VIPS', area: 'Pritampura' },
  { id: 'adgips', name: 'Adgips', area: 'Shastri Park' },
];

// Define the static list of degrees (New)
const STATIC_DEGREES = [
  { id: 'btech', name: 'BTech' },
  { id: 'ba', name: 'BA' },
  { id: 'bba', name: 'BBA' },
  { id: 'bca', name: 'BCA' },
  { id: 'bajmc', name: 'BAJMC' },
  { id: 'mtech', name: 'MTech' },
  { id: 'mca', name: 'MCA' },
];

const MentorRegister = () => {
  // State for all form fields
  const [formData, setFormData] = useState({
    fullName: '',
    collegeEmail: '',
    collegeNameInput: '', // College search input
    selectedCollege: null, // Selected College object
    degreeInput: '', // Degree search input (NEW)
    selectedDegree: null, // Selected Degree object (NEW)
    branch: '',
    certificates: [],
  });

  // College Search State
  const [collegeResults, setCollegeResults] = useState([]);
  const [showCollegeDropdown, setShowCollegeDropdown] = useState(false);
  
  // Degree Search State (NEW)
  const [degreeResults, setDegreeResults] = useState([]);
  const [showDegreeDropdown, setShowDegreeDropdown] = useState(false);

  // Refs to close dropdowns when clicking outside
  const searchCollegeRef = useRef(null);
  const searchDegreeRef = useRef(null); // NEW Ref

  // --- Theme Setup ---
  const inputClasses = "w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200 shadow-inner";
  const labelClasses = "block text-sm font-medium text-gray-300 mb-2 text-left";

  // --- College Search Logic (Static Filtering) ---
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

  // --- Degree Search Logic (Static Filtering - NEW) ---
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


  // --- Click outside dropdown handlers (Updated to handle both) ---
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
      // Clear selections if typing starts
      ...(name === 'collegeNameInput' && { selectedCollege: null }),
      ...(name === 'degreeInput' && { selectedDegree: null }), // NEW: Clear degree selection
    }));
    
    // Trigger static search functions
    if (name === 'collegeNameInput') {
        handleCollegeSearch(value);
    } else if (name === 'degreeInput') { // NEW: Trigger degree search
        handleDegreeSearch(value);
    }
  };

  const handleCollegeSelect = (college) => {
    setFormData(prev => ({
      ...prev,
      collegeNameInput: `${college.name}, ${college.area}`, // Display full name + area
      selectedCollege: college,
      
    }));
    setCollegeResults([]);
    setShowCollegeDropdown(false);
  };
  
  // NEW: Degree Select Handler
  const handleDegreeSelect = (degree) => {
    setFormData(prev => ({
      ...prev,
      degreeInput: degree.name,
      selectedDegree: degree,
      
    }));
    setDegreeResults([]);
    setShowDegreeDropdown(false);
  };
  
  const handleCertificateChange = (e) => {
    // Convert FileList to Array and merge with existing files
    const newFiles = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      certificates: [...prev.certificates, ...newFiles],
    }));
    e.target.value = null; 
  };
  
  const removeCertificate = (indexToRemove) => {
    setFormData(prev => ({
      ...prev,
      certificates: prev.certificates.filter((_, index) => index !== indexToRemove),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted (Static):", formData);
    alert("Registration data logged to console!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <div className="w-full max-w-xl p-8 bg-gray-800 rounded-2xl shadow-2xl border-t-4 border-blue-600">
        
        <h2 className="text-3xl font-bold text-white mb-2 text-center">Mentor Registration</h2>
        <p className="text-gray-400 text-center mb-8">Share your credentials to become a verified mentor.</p>

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
              placeholder="E.g., Jane Doe"
              required
            />
          </div>

          {/* 2) College Mail ID */}
          <div>
            <label htmlFor="collegeEmail" className={labelClasses}>2) College Mail ID</label>
            <input
              type="email"
              id="collegeEmail"
              name="collegeEmail"
              value={formData.collegeEmail}
              onChange={handleChange}
              className={inputClasses}
              placeholder="E.g., jane.doe@college.edu"
              required
            />
          </div>

          {/* 3) College Search (STATIC) */}
          <div ref={searchCollegeRef} className="relative">
            <label htmlFor="collegeNameInput" className={labelClasses}>3) Enter College</label>
            <input
              type="text"
              id="collegeNameInput"
              name="collegeNameInput"
              value={formData.collegeNameInput}
              onChange={handleChange}
              onFocus={() => handleCollegeSearch(formData.collegeNameInput)} // Trigger search on focus
              className={inputClasses}
              placeholder="Start typing your college name..."
              required
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
                      {college.name}, {college.area} {/* Display name and area */}
                    </li>
                  ))
                ) : (
                    <li className="px-4 py-2 text-gray-400">No colleges found. Try another keyword.</li>
                )}
              </ul>
            )}
            {formData.selectedCollege && (
                <p className="text-sm text-green-400 mt-2">Selected College: {formData.selectedCollege.name}, {formData.selectedCollege.area}</p>
            )}
          </div>
          
          {/* 4) Degree Search (STATIC - NEW) */}
          <div ref={searchDegreeRef} className="relative">
            <label htmlFor="degreeInput" className={labelClasses}>4) Enter Degree</label>
            <input
              type="text"
              id="degreeInput"
              name="degreeInput"
              value={formData.degreeInput}
              onChange={handleChange}
              onFocus={() => handleDegreeSearch(formData.degreeInput)} // Trigger search on focus
              className={inputClasses}
              placeholder="Start typing your degree (e.g., BTech, MCA)..."
              required
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
                    <li className="px-4 py-2 text-gray-400">No degrees found. Try another keyword.</li>
                )}
              </ul>
            )}
            {formData.selectedDegree && (
                <p className="text-sm text-green-400 mt-2">Selected Degree: {formData.selectedDegree.name}</p>
            )}
          </div>

          {/* 5) Branch (Kept as Select Dropdown) */}
          <div>
            <label htmlFor="branch" className={labelClasses}>5) Enter Branch</label>
            <select
              id="branch"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className={inputClasses}
              required
            >
              <option value="" disabled>Select your branch</option>
              <option value="none">None (For non-technical degrees)</option>
              <option value="CS">Computer Science</option>
              <option value="EE">Electrical Engineering</option>
              <option value="ME">Mechanical Engineering</option>
              <option value="Civil">Civil Engineering</option>
              <option value="Math">Mathematics</option>
              <option value="Arts">Arts/Humanities</option>
            </select>
          </div>

          {/* 6) Certificates (Multiple File Input) */}
          <div>
            <label htmlFor="certificates" className={labelClasses}>6) Enter Certificate (Multiple File Input)</label>
            <input
              type="file"
              id="certificates"
              name="certificates"
              onChange={handleCertificateChange}
              multiple // Allows multiple files to be selected
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
            />
            
            {/* Display list of uploaded certificates */}
            {formData.certificates.length > 0 && (
              <div className="mt-4 p-3 bg-gray-700 rounded-lg max-h-32 overflow-y-auto">
                <p className="text-sm font-semibold text-white mb-2">Uploaded Files:</p>
                <ul className="space-y-1">
                  {formData.certificates.map((file, index) => (
                    <li key={index} className="flex justify-between items-center text-xs text-gray-300 bg-gray-600 p-2 rounded">
                      <span>{file.name}</span>
                      <button
                        type="button"
                        onClick={() => removeCertificate(index)}
                        className="text-red-400 hover:text-red-500 font-bold ml-4"
                      >
                        &#x2715;
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg shadow-blue-500/50"
          >
            Register as Mentor
          </button>
        </form>
      </div>
    </div>
  );
};

export default MentorRegister;
