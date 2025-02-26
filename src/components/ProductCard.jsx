// src/components/ProductCard.jsx
import React, { useState } from 'react';
import ProductModal from './ProductModal';

const ProductCard = ({ product, onAddToCart }) => { // Recibe onAddToCart como prop
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState({});

    const handleAddToCartButton = () => {
        if (product.options?.length > 0) {
            setIsModalOpen(true);
        } else {
            handleAddToCart(); // Llama a handleAddToCart (local) para productos no personalizables
        }
    };

    const handleAddToCart = () => {
        onAddToCart(product, selectedOptions); // Llama a la función onAddToCart que viene del padre (App.jsx)
        setIsModalOpen(false);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleOptionChange = (groupName, optionValue, choice, isChecked) => {
        setSelectedOptions(prevOptions => {
            let updatedOptions = {...prevOptions};
            if (choice.type === 'radio') {
                updatedOptions[groupName] = { value: optionValue, price: choice.price };
            } else if (choice.type === 'checkbox') {
                if (isChecked) {
                    if (!updatedOptions[groupName]) {
                        updatedOptions[groupName] = [];
                    }
                    updatedOptions[groupName].push({ value: optionValue, price: choice.price });
                } else {
                    if (updatedOptions[groupName]) {
                        updatedOptions[groupName] = updatedOptions[groupName].filter(opt => opt.value !== optionValue);
                        if (updatedOptions[groupName].length === 0) {
                            delete updatedOptions[groupName];
                        }
                    }
                }
            }
            return updatedOptions;
        });
    };


    return (
        <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col h-full">
            <img src={product.image} alt={product.name} className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-md mb-3 sm:mb-4" />
            <div className="flex-grow">
                <h3 className="font-semibold text-lg sm:text-xl mb-1 sm:mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-2 sm:mb-3">{product.description}</p>
                <p className="font-bold text-base sm:text-lg">Precio: ${product.price}</p>
                {product.options?.length > 0 && (
                    <p className="text-sm text-gray-500 mt-1 sm:mt-2">Personalizable</p>
                )}
            </div>
            <button
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={handleAddToCartButton}
            >
                Añadir al Carrito
            </button>

            <ProductModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                product={product}
                onOptionChange={handleOptionChange}
                onAddToCart={handleAddToCart} // Pasa la función handleAddToCart (local) al modal
            />
        </div>
    );
};

export default ProductCard;