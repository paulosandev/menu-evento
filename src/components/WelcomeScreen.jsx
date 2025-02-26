// src/components/WelcomeScreen.jsx
import React from 'react';

const WelcomeScreen = ({ onStartApp }) => {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center p-6 text-center"> {/* Añadido text-center para centrar texto */}
            <div className="mb-8 max-w-sm"> {/* Añadido max-w-sm para limitar el ancho del logo en pantallas grandes */}
                [Image of Logo de tu Cafetería Aquí - Reemplaza con tu Logo]
                {/*  Aquí iría el logo de tu cafetería. Puedes usar un componente <img /> */}
                <h1 className="text-3xl font-bold text-gray-800 mt-4">
                    Bienvenido a [Nombre de tu Cafetería]
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