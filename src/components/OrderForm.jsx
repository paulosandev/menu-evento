import React, { useState } from 'react';

const OrderForm = ({ isOpen, onClose, onSubmit, cartItems }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Evitar múltiples envíos si ya está en proceso
        if (isSubmitting) return;
        
        setIsSubmitting(true);
        setFormErrors({});
        
        const formData = new FormData(event.target);
        const orderDetails = {
            nombrePapaMama: formData.get('nombrePapaMama'),
            grado: formData.get('grado'),
            nombreAlumno: formData.get('nombreAlumno'),
            telefonoContacto: formData.get('telefonoContacto'),
            notasPedido: formData.get('notasPedido'),
            cartItems: cartItems,
        };

        // Generamos un ID único para este pedido
        const orderIdempotencyKey = Date.now().toString() + '-' + Math.random().toString(36).substr(2, 9);
        
        fetch('http://localhost:8000/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Idempotency-Key': orderIdempotencyKey, // Clave de idempotencia
            },
            body: JSON.stringify(orderDetails),
        })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(errorData => {
                        throw new Error(JSON.stringify(errorData));
                    });
                }
                return response.json();
            })
            .then(data => {
                console.log('Pedido registrado exitosamente:', data);
                // QUITAMOS ESTE ALERT PARA EVITAR DUPLICACIÓN
                // alert('Gracias por tu pedido. Nos comunicaremos contigo para validar el método de pago');
                onSubmit(orderDetails); // App.jsx se encargará de mostrar la alerta
                onClose();
            })
            .catch(error => {
                console.error('Error al registrar el pedido:', error);
                try {
                    const errorDetails = JSON.parse(error.message);
                    if (errorDetails && errorDetails.errors) {
                        const errors = {};
                        Object.entries(errorDetails.errors).forEach(([field, messages]) => {
                            errors[field] = messages[0]; // Tomar solo el primer mensaje de error por campo
                        });
                        setFormErrors(errors);
                        
                        // Mostrar alerta con errores
                        let errorMessages = Object.values(errorDetails.errors).flat().join('\n');
                        alert('Error en el pedido:\n' + errorMessages);
                    } else {
                        alert('Error al procesar el pedido. Por favor, intenta de nuevo.');
                    }
                } catch (e) {
                    alert('Error al procesar el pedido. Por favor, intenta de nuevo.');
                }
            })
            .finally(() => {
                setIsSubmitting(false); // Restaurar estado, permitiendo nuevos envíos
            });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity flex justify-center items-center p-4">
            <div className="bg-white rounded-lg p-6 shadow-xl transform transition-transform duration-300 w-full max-w-md" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">Formulario de Pedido</h3>
                    <button 
                        onClick={onClose} 
                        className="text-gray-500 hover:text-gray-700"
                        disabled={isSubmitting}
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="nombrePapaMama" className="block text-sm font-medium text-gray-700">Nombre del papá/mamá:</label>
                        <input 
                            type="text" 
                            id="nombrePapaMama" 
                            name="nombrePapaMama" 
                            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${formErrors.nombrePapaMama ? 'border-red-500' : ''}`}
                            required 
                            disabled={isSubmitting}
                        />
                        {formErrors.nombrePapaMama && (
                            <p className="text-red-500 text-xs mt-1">{formErrors.nombrePapaMama}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="grado" className="block text-sm font-medium text-gray-700">Grado:</label>
                        <input 
                            type="text" 
                            id="grado" 
                            name="grado" 
                            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${formErrors.grado ? 'border-red-500' : ''}`}
                            required 
                            disabled={isSubmitting}
                        />
                        {formErrors.grado && (
                            <p className="text-red-500 text-xs mt-1">{formErrors.grado}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="nombreAlumno" className="block text-sm font-medium text-gray-700">Nombre del alumno:</label>
                        <input 
                            type="text" 
                            id="nombreAlumno" 
                            name="nombreAlumno" 
                            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${formErrors.nombreAlumno ? 'border-red-500' : ''}`}
                            required 
                            disabled={isSubmitting}
                        />
                        {formErrors.nombreAlumno && (
                            <p className="text-red-500 text-xs mt-1">{formErrors.nombreAlumno}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="telefonoContacto" className="block text-sm font-medium text-gray-700">Teléfono de contacto:</label>
                        <input 
                            type="tel" 
                            id="telefonoContacto" 
                            name="telefonoContacto" 
                            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${formErrors.telefonoContacto ? 'border-red-500' : ''}`}
                            required 
                            disabled={isSubmitting}
                        />
                        {formErrors.telefonoContacto && (
                            <p className="text-red-500 text-xs mt-1">{formErrors.telefonoContacto}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="notasPedido" className="block text-sm font-medium text-gray-700">Notas del pedido (opcional):</label>
                        <textarea 
                            id="notasPedido" 
                            name="notasPedido" 
                            rows="3" 
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            disabled={isSubmitting}
                        ></textarea>
                    </div>

                    <div>
                        <p className="text-sm text-gray-700">
                            <strong>Nota:</strong> Tu comida estará lista en la hora de receso, las bebidas serán preparadas al momento. Después de recibir tu pedido, nos comunicaremos contigo para validar el método de pago.
                        </p>
                    </div>

                    <div className="mt-6 flex justify-end space-x-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded-md text-gray-600 hover:text-gray-800 border border-gray-300"
                            disabled={isSubmitting}
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className={`${isSubmitting ? 'bg-blue-400' : 'bg-blue-500 hover:bg-blue-700'} text-white font-bold py-2 px-4 rounded flex items-center`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Procesando...
                                </>
                            ) : 'Confirmar Pedido'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OrderForm;