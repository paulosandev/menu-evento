// src/App.jsx
import React, { useState, useEffect, useRef } from 'react'; // Importa useRef
import { productsData } from './data/products';
import ProductGrid from './components/ProductGrid';
import CategoryTabs from './components/CategoryTabs';
import ShoppingCart from './components/ShoppingCart';
import WelcomeScreen from './components/WelcomeScreen';
import OrderForm from './components/OrderForm'; // Importa OrderForm

function App() {
    const [isWelcomeVisible, setIsWelcomeVisible] = useState(true);
    const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false); // Estado para controlar si el carrito está abierto
    const [cartItems, setCartItems] = useState([]);
    const categories = [...new Set(productsData.map(product => product.category))];
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const filteredProducts = activeCategory === 'Todos'
        ? productsData.flatMap(cat => cat.items)
        : productsData.find(cat => cat.category === activeCategory)?.items || [];

    const [showScrollButton, setShowScrollButton] = useState(false); // Estado para mostrar/ocultar el botón de scroll
    const categoryTabsRef = useRef(null); // Crea una ref para CategoryTabs


    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    const handleAddToCart = (product, selectedOptions) => {
        const existingItemIndex = cartItems.findIndex(item => item.product.id === product.id && JSON.stringify(item.options) === JSON.stringify(selectedOptions));
        if (existingItemIndex > -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity += 1;
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, { product: product, quantity: 1, options: selectedOptions }]);
        }
        console.log("Producto añadido al carrito:", product.name, "con opciones:", selectedOptions);
    };

    const handleRemoveFromCart = (indexToRemove) => {
        setCartItems(cartItems.filter((_, index) => index !== indexToRemove));
    };

    const handleUpdateQuantity = (itemIndex, newQuantity) => {
        if (newQuantity > 0) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[itemIndex].quantity = newQuantity;
            setCartItems(updatedCartItems);
        } else {
            handleRemoveFromCart(itemIndex);
        }
    };

    const handleStartApp = () => {
        setIsWelcomeVisible(false); // Oculta la pantalla de bienvenida y muestra la app principal
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen); // Alterna la visibilidad del carrito
    };

    const handleOpenOrderForm = () => {
        setIsOrderFormOpen(true); // Abre el formulario de pedido
        setIsCartOpen(false); // Cierra el carrito al abrir el formulario
    };

    const handleCloseOrderForm = () => {
        setIsOrderFormOpen(false); // Cierra el formulario de pedido
        setIsCartOpen(false); // Cierra el carrito al cancelar el formulario -  **Cierra el carrito también**
    };

    const handleOrderSubmit = (orderDetails) => {
        console.log("Pedido Confirmado:", orderDetails, "Productos:", cartItems);
        setIsOrderFormOpen(false); // Cierra el formulario después de enviar
        setCartItems([]); // Vacía el carrito después de confirmar el pedido
        setIsCartOpen(false); // Cierra el carrito también
        alert("Gracias por tu pedido. Nos comunicaremos contigo para validar el metodo de pago"); // Mensaje de confirmación al usuario
        // Aquí iría la lógica para enviar el pedido a un backend o guardarlo localmente, etc. (próximos pasos)
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Para un scroll suave
        });
    };

    // **useEffect para el scroll event listener y botón "Subir"**
    useEffect(() => {
        const handleScroll = () => {
            // Muestra el botón cuando el usuario ha scrolleado más allá de la altura de CategoryTabs (ajusta este valor según necesites)
            if (categoryTabsRef.current) { // Usa categoryTabsRef.current para acceder al elemento
                const categoryTabsHeight = categoryTabsRef.current.offsetHeight;
                if (window.scrollY > categoryTabsHeight) {
                    setShowScrollButton(true);
                } else {
                    setShowScrollButton(false);
                }
            } else {
                setShowScrollButton(false); // Ocultar el botón si CategoryTabs no se encuentra
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Limpia el event listener al desmontar el componente
    }, []);


    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            {isWelcomeVisible ? (
                <WelcomeScreen onStartApp={handleStartApp} />
            ) : (
                <> {/* Fragment para agrupar elementos sin un div extra */}
                    <header className="bg-white shadow-md py-4 px-6 sm:px-8 lg:px-10 sticky top-0 z-10"> {/* **Header Sticky** - Añadido sticky, top-0 y z-10 */}
                        <div className="container mx-auto flex justify-between items-center">
                            <div className="max-w-md">
                                <h1>Tochpan app</h1>
                            </div>
                            <button onClick={toggleCart} className="relative"> {/* Botón del carrito */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>

                                {cartItems.length > 0 && (
                                    <span className="absolute top-[-5px] right-[-5px] bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                                        {cartItems.length}
                                    </span>
                                )}
                            </button>
                        </div>
                    </header>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 flex-grow">
                        <CategoryTabs
                            categories={categories}
                            activeCategory={activeCategory}
                            onCategoryChange={handleCategoryChange}
                            className="category-tabs" // **Clase identificativa para CategoryTabs**
                            ref={categoryTabsRef} // **Pasa la ref a CategoryTabs**
                        />
                        <ProductGrid products={filteredProducts} onAddToCart={handleAddToCart} />
                    </div>

                    <ShoppingCart
                        cartItems={cartItems}
                        onRemoveFromCart={handleRemoveFromCart}
                        onUpdateQuantity={handleUpdateQuantity}
                        isOpen={isCartOpen}
                        onClose={() => setIsCartOpen(false)}
                        onCheckout={handleOpenOrderForm} // Pasa handleOpenOrderForm como prop onCheckout
                    />

                    <footer className="text-center mt-8 sm:mt-12 text-gray-500 text-sm py-4">
                        <p>© {new Date().getFullYear()} Está es una app de <a href='https://espindolaestudio.com'>Espíndola Estudio</a> para Tochpan. Todos los derechos reservados.</p>
                    </footer>

                    {/* **Botón "Subir" - ICONO UNICODE** */}
                    {showScrollButton && (
                        <button
                            onClick={scrollToTop}
                            className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg z-20"
                            aria-label="Subir al inicio"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
</svg>

                        </button>
                    )}
                </>
            )}
            <OrderForm
                isOpen={isOrderFormOpen}
                onClose={handleCloseOrderForm}
                onSubmit={handleOrderSubmit}
                cartItems={cartItems} // **Pasa cartItems aquí**
            />
        </div>
    );
}

export default App;