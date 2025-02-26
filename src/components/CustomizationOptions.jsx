// src/components/CustomizationOptions.jsx
import React, { useState, useEffect } from 'react';

const CustomizationOptions = ({ product, onOptionChange, onAddToCart }) => {
    const [selectedOptions, setSelectedOptions] = useState({});
    const [isAddToCartEnabled, setIsAddToCartEnabled] = useState(false);

    useEffect(() => {
        // Verificar si product y product.options existen antes de continuar
        if (!product || !product.options) { // **COMPROBACIÓN DE SEGURIDAD AÑADIDA**
            setIsAddToCartEnabled(true); // Si no hay opciones, habilitar "Añadir al carrito" por defecto (o podrías deshabilitarlo, dependiendo de tu lógica)
            return; // Salir del useEffect si product o product.options no están definidos
        }

        // Verificar si todas las opciones obligatorias están seleccionadas
        const areRequiredOptionsSelected = product.options.every(optionGroup => {
            if (optionGroup.type === 'radio') {
                return selectedOptions[optionGroup.groupName] !== undefined;
            }
            if (optionGroup.type === 'checkbox') {
                return Array.isArray(selectedOptions[optionGroup.groupName]) && selectedOptions[optionGroup.groupName].length > 0;
            }
            return true;
        });
        setIsAddToCartEnabled(areRequiredOptionsSelected); // **CORRECCIÓN IMPORTANTE: Usar 'areRequiredOptionsSelected' (nombre correcto de la variable)**
    }, [selectedOptions, product]); // Dependencia cambiada a 'product' para re-verificar al cambiar de producto


    const handleOptionChangeLocal = (groupName, optionValue, choice, isChecked) => {
        onOptionChange(groupName, optionValue, choice, isChecked);
        if (choice.type === 'radio') {
            setSelectedOptions(prevOptions => ({
                ...prevOptions,
                [groupName]: optionValue
            }));
        } else if (choice.type === 'checkbox') {
            setSelectedOptions(prevOptions => {
                const currentSelection = prevOptions[groupName] || [];
                if (isChecked) {
                    return { ...prevOptions, [groupName]: [...currentSelection, optionValue] };
                } else {
                    return { ...prevOptions, [groupName]: currentSelection.filter(item => item !== optionValue) };
                }
            });
        }
    };


    const handleAddToCartClick = () => {
        onAddToCart(selectedOptions);
        setSelectedOptions({});
        setIsAddToCartEnabled(false);
    };


    return (
        <div className="mt-4 p-4 border rounded-md bg-gray-100">
            <h4 className="font-semibold mb-3 text-gray-700">Personalización:</h4>
            {product && product.options && product.options.map((optionGroup, index) => ( // Comprobación aquí también para evitar errores si product o product.options son null
                <div key={index} className="mb-3">
                    {optionGroup.groupName && <h5 className="font-medium text-gray-600 mb-2">{optionGroup.groupName}:</h5>}
                    {optionGroup.type === 'radio' && (
                        <div className="space-y-2">
                            {optionGroup.choices.map((choice) => (
                                <div key={choice.value} className="flex items-center">
                                    <input
                                        type="radio"
                                        id={choice.value}
                                        name={optionGroup.groupName}
                                        value={choice.value}
                                        className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                        onChange={(e) => handleOptionChangeLocal(optionGroup.groupName, e.target.value, choice)}
                                        checked={selectedOptions[optionGroup.groupName] === choice.value}
                                    />
                                    <label htmlFor={choice.value} className="ml-2 text-sm text-gray-700 flex items-center">
                                        {choice.image && (
                                            <img src={choice.image} alt={choice.name} className="h-8 w-8 rounded-full mr-2" />
                                        )}
                                        <span>{choice.name} {choice.price > 0 ? `(+ $${choice.price})` : ''}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                    {optionGroup.type === 'checkbox' && (
                        <div className="space-y-2">
                            {optionGroup.choices.map((choice) => (
                                <div key={choice.value} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={choice.value}
                                        name={optionGroup.groupName}
                                        value={choice.value}
                                        className="form-checkbox h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        onChange={(e) => handleOptionChangeLocal(optionGroup.groupName, e.target.value, choice, e.target.checked)}
                                        checked={selectedOptions[optionGroup.groupName]?.includes(choice.value)}
                                    />
                                    <label htmlFor={choice.value} className="ml-2 text-sm text-gray-700 flex items-center">
                                        {choice.image && (
                                            <img src={choice.image} alt={choice.name} className="h-8 w-8 rounded-full mr-2" />
                                        )}
                                        <span>{choice.name} {choice.price > 0 ? `(+ $${choice.price})` : ''}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
            <button
                onClick={handleAddToCartClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!isAddToCartEnabled}
            >
                Añadir al carrito
            </button>
        </div>
    );
};

export default CustomizationOptions;