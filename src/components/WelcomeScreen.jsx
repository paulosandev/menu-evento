// src/components/WelcomeScreen.jsx
import React from 'react';

const WelcomeScreen = ({ onStartApp }) => {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center p-6">
            <div className="mb-8">
                <img src="public\images\app\logo.png" alt="logo"/>
                <h1 className="text-3xl font-bold text-gray-800 mt-4 text-center">
                    Bienvenido a Tochpan Café
                </h1>
            </div>
            <button
                onClick={onStartApp}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
            >
                Iniciar Pedido
            </button>
            <p className="text-gray-500 text-sm mt-4">¡Descubre nuestro menú y realiza tu pedido!</p>
        </div>
    );
};

export default WelcomeScreen;