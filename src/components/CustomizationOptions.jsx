// src/components/CustomizationOptions.jsx
import React from 'react';

const CustomizationOptions = ({ options, onOptionChange }) => {
    if (!options || options.length === 0) {
        return null;
    }

    return (
        <div className="mt-4 p-4 border rounded-md bg-gray-100">
            <h4 className="font-semibold mb-3 text-gray-700">Personalización:</h4>
            {options.map((optionGroup, index) => (
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
                                        onChange={(e) => onOptionChange(optionGroup.groupName, e.target.value, choice)}
                                    />
                                    <label htmlFor={choice.value} className="ml-2 text-sm text-gray-700">{choice.name} {choice.price > 0 ? `(+ $${choice.price})` : ''}</label>
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
                                        value={choice.value}
                                        className="form-checkbox h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        onChange={(e) => onOptionChange(optionGroup.groupName, e.target.value, choice, e.target.checked)}
                                    />
                                    <label htmlFor={choice.value} className="ml-2 text-sm text-gray-700">{choice.name} {choice.price > 0 ? `(+ $${choice.price})` : ''}</label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CustomizationOptions;