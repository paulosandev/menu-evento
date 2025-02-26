// src/components/CategoryTabs.jsx
import React from 'react';

const CategoryTabs = ({ categories, activeCategory, onCategoryChange }) => {
    return (
        <div className="flex overflow-x-auto sm:justify-center space-x-2 sm:space-x-4 mb-4"> {/* Flex horizontal en movil, centrado en pantallas mayores */}
            {categories.map((category) => (
                <button
                    key={category}
                    className={`px-4 py-2 rounded-md text-sm sm:text-base font-medium transition-colors duration-200
                               ${activeCategory === category
                                   ? 'bg-blue-600 text-white hover:bg-blue-700'
                                   : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
                    onClick={() => onCategoryChange(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryTabs;