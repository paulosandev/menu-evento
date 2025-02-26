import React from 'react';

const OrderForm = ({ isOpen, onClose, onSubmit, cartItems }) => { // Recibe cartItems como prop
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const orderDetails = {
            nombrePapaMama: formData.get('nombrePapaMama'),
            grado: formData.get('grado'),
            nombreAlumno: formData.get('nombreAlumno'),
            telefonoContacto: formData.get('telefonoContacto'),
            notasPedido: formData.get('notasPedido'),
            cartItems: cartItems, // **Incluye cartItems aquí**
        };

        // **Petición Fetch al backend Laravel**
        fetch('https://tt-services-staging.up.railway.app/api/orders ', { // **Asegúrate de que la URL coincide con tu backend (puede ser http://localhost:8000/orders si tu backend corre en el puerto 8000)**
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderDetails), // Convierte orderDetails y cartItems a JSON
        })
            .then(response => {
                if (!response.ok) {
                    // Si la respuesta no es ok, intentar leer el JSON de error (si lo hay)
                    return response.json().then(errorData => {
                        // Lanzar una excepción con los detalles del error para que el catch la capture
                        throw new Error(JSON.stringify(errorData));
                    });
                }
                return response.json(); // Si es ok, parsear la respuesta JSON
            })
            .then(data => {
                console.log('Pedido registrado exitosamente:', data);
                alert(' Gracias por tu pedido. Nos comunicaremos contigo para validar el metodo de pago');
                onSubmit(orderDetails); // Llama a la función onSubmit para limpiar el carrito en App.jsx
                onClose(); // Cierra el formulario
            })
            .catch(error => {
                console.error('Error al registrar el pedido:', error);
                try {
                    const errorDetails = JSON.parse(error.message); // Intenta parsear el mensaje de error como JSON
                    if (errorDetails && errorDetails.errors) {
                        // Mostrar errores de validación específicos al usuario (puedes mejorar esta parte visualmente)
                        let errorMessages = Object.values(errorDetails.errors).flat().join('\n');
                        alert('Error en el pedido:\n' + errorMessages);
                    } else {
                        // Si no son errores de validación, muestra un error genérico
                        alert('Error al procesar el pedido. Por favor, intenta de nuevo.');
                    }
                } catch (e) {
                    // Si el mensaje de error no es JSON, mostrar un error genérico
                    alert('Error al procesar el pedido. Por favor, intenta de nuevo.');
                }
            });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity flex justify-center items-center p-4">
            <div className="bg-white rounded-lg p-6 shadow-xl transform transition-transform duration-300 w-full max-w-md" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">Formulario de Pedido</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4"> {/*  onSubmit AHORA LLAMA A handleSubmit */}
                    <div>
                        <label htmlFor="nombrePapaMama" className="block text-sm font-medium text-gray-700">Nombre del papá/mamá:</label>
                        <input type="text" id="nombrePapaMama" name="nombrePapaMama" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" required />
                    </div>
                    <div>
                        <label htmlFor="grado" className="block text-sm font-medium text-gray-700">Grado:</label>
                        <input type="text" id="grado" name="grado" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" required />
                    </div>
                    <div>
                        <label htmlFor="nombreAlumno" className="block text-sm font-medium text-gray-700">Nombre del alumno:</label>
                        <input type="text" id="nombreAlumno" name="nombreAlumno" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" required />
                    </div>
                    <div>
                        <label htmlFor="telefonoContacto" className="block text-sm font-medium text-gray-700">Teléfono de contacto:</label>
                        <input type="tel" id="telefonoContacto" name="telefonoContacto" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" required />
                    </div>
                    <div>
                        <label htmlFor="notasPedido" className="block text-sm font-medium text-gray-700">Notas del pedido (opcional):</label>
                        <textarea id="notasPedido" name="notasPedido" rows="3" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"></textarea>
                    </div>

                    <div> {/*  AQUI REINTRODUCIMOS EL PÁRRAFO DE LA NOTA INFORMATIVA */}
                        <p className="text-sm text-gray-700">
                            **Nota:** Tu comida estará lista en la hora de receso, las bebidas serán preparadas al momento. Despues de recibir tu pedido, nos comunicaremos contigo para validar el metodo de pago.
                        </p>
                    </div>

                    <div className="mt-6 flex justify-end space-x-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded-md text-gray-600 hover:text-gray-800 border border-gray-300"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Confirmar Pedido
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OrderForm;