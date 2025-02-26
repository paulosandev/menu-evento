// src/components/ProductModal.jsx
import React from 'react';
import CustomizationOptions from './CustomizationOptions';

const ProductModal = ({ isOpen, onClose, product, onOptionChange, onAddToCart }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity flex justify-center items-center p-4">
            <div className="bg-white rounded-lg p-6 shadow-xl transform transition-transform duration-300" onClick={e => e.stopPropagation()} >
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{product.name} - Personalizar</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <CustomizationOptions
                    product={product} // **CORRECCIÓN: Pasar la prop 'product' completa**
                    onOptionChange={onOptionChange}
                    onAddToCart={onAddToCart} // Pass onAddToCart to CustomizationOptions
                />

                <div className="mt-6 flex justify-end space-x-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-md text-gray-600 hover:text-gray-800 border border-gray-300"
                    >
                        Cancelar
                    </button>
                    {/* The "Añadir al Carrito" button is now in CustomizationOptions.jsx */}
                </div>
            </div>
        </div>
    );
};

export default ProductModal;