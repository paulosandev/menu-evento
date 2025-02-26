// src/components/WelcomeScreen.jsx
import React from 'react';

const WelcomeScreen = ({ onStartApp }) => {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center p-6">
            <div className="mb-8 max-w-md">
                <img
                    src="images\app\logo.png"
                    alt="logo tochpan"
                    className="w-full h-auto"
                />
            </div>
            <button
                onClick={onStartApp}
                className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors duration-200 shadow-md"
            >
                Ordenar ahora
            </button>
        </div>
    );
};

export default WelcomeScreen;