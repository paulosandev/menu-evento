// src/components/ShoppingCart.jsx
import React from 'react';

const ShoppingCart = ({ cartItems, onRemoveFromCart, onUpdateQuantity, isOpen, onClose, onCheckout }) => { // Recibe onCheckout
    if (!isOpen) {
        return null;
    }

    if (!cartItems || cartItems.length === 0) {
        return (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity flex justify-end">
                <div className="bg-white shadow-md rounded-lg p-4 w-full sm:w-96 h-screen max-h-screen overflow-y-auto transform transition-transform duration-300 translate-x-0" >
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-gray-800">Carrito de Compras</h2>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="p-4 text-gray-600 text-center">
                        El carrito está vacío.
                    </div>
                </div>
            </div>
        );
    }

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            let itemPrice = item.product.price;
            if (item.options) {
                for (const groupName in item.options) {
                    itemPrice += item.options[groupName].price || 0;
                }
            }
            return total + itemPrice * item.quantity;
        }, 0);
    };

    const total = calculateTotal();

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity flex justify-end">
            <div className="bg-white shadow-md rounded-lg p-4 w-full sm:w-96 h-screen max-h-screen overflow-y-auto transform transition-transform duration-300 translate-x-0" >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">Carrito de Compras</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index} className="flex py-2 border-b last:border-b-0">
                            <img
                                src={item.product.image}
                                alt={item.product.name}
                                className="h-16 w-16 object-cover rounded-md mr-4"
                            />
                            <div className="flex-grow">
                                <h3 className="font-medium text-gray-700">{item.product.name}</h3>
                                {item.options && (
                                    <div className="text-sm text-gray-500">
                                        {Object.entries(item.options).map(([groupName, option]) => (
                                            <div key={groupName}>
                                                {groupName}: {option.value} {option.price > 0 ? `(+ $${option.price})` : ''}
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <div className="flex items-center justify-between mt-2">
                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                                            className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                                        >
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                                            </svg>
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                                            className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                                        >
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => onRemoveFromCart(index)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="mt-6 py-2 border-t">
                    <div className="font-bold text-gray-800 text-right">
                        Total: ${total.toFixed(2)}
                    </div>
                    <div className="mt-4 flex justify-end">
                        <button onClick={onCheckout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> {/* Llama a onCheckout al hacer click */}
                            Hacer pedido
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;