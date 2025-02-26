// src/components/OrderForm.jsx
import React from 'react';

const OrderForm = ({ isOpen, onClose, onSubmit }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const orderDetails = {
            nombrePapaMama: formData.get('nombrePapaMama'),
            grado: formData.get('grado'),
            nombreAlumno: formData.get('nombreAlumno'),
            telefonoContacto: formData.get('telefonoContacto'),
            notasPedido: formData.get('notasPedido'),
        };
        onSubmit(orderDetails); // Llama a la función onSubmit pasando los detalles del pedido
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

            <form onSubmit={handleSubmit} className="space-y-4"> {/*  onSubmit AHORA LLAMA A handleSubmit */}
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

                    <div> {/*  AQUI REINTRODUCIMOS EL PÁRRAFO DE LA NOTA INFORMATIVA */}
                        <p className="text-sm text-gray-700">
                            **Nota:** Tu comida estará lista en la hora de receso, las bebidas serán preparadas al momento.
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