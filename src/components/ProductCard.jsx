// src/components/ProductCard.jsx
import React, { useState } from 'react';
import CustomizationOptions from './CustomizationOptions';

const ProductCard = ({ product }) => {
    const [isCustomizableVisible, setIsCustomizableVisible] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState({}); // Estado para las opciones seleccionadas

    const handleAddToCart = () => {
        console.log(`Producto "${product.name}" añadido al carrito con opciones:`, selectedOptions); // Aquí ya tendremos las opciones seleccionadas
        if (product.options.length > 0) {
            setIsCustomizableVisible(true);
        } else {
            // Lógica para añadir al carrito directamente si no hay opciones
        }
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
                            delete updatedOptions[groupName]; // Eliminar el grupo si no quedan checkboxes seleccionados
                        }
                    }
                }
            }
            return updatedOptions;
        });
    };


    return (
        <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col h-full">
            <img src={product.image} alt={product.name} className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-md mb-3 sm:mb-4" /> {/* Ajuste de altura de imagen */}
            <div className="flex-grow"> {/* Para que la info del producto empuje el botón hacia abajo */}
                <h3 className="font-semibold text-lg sm:text-xl mb-1 sm:mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-2 sm:mb-3">{product.description}</p>
                <p className="font-bold text-base sm:text-lg">Precio: ${product.price.toFixed(2)}</p>
                {product.options.length > 0 && (
                    <p className="text-sm text-gray-500 mt-1 sm:mt-2">Personalizable</p>
                )}
            </div>
            <button
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={handleAddToCart}
            >
                Añadir al Carrito
            </button>

             {isCustomizableVisible && product.options.length > 0 && (
                 <CustomizationOptions
                     options={product.options}
                     onOptionChange={handleOptionChange}
                 />
             )}
        </div>
    );
};

export default ProductCard;