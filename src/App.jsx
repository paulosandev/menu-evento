// src/App.jsx
import React, { useState } from 'react';
import { productsData } from './data/products';
import ProductGrid from './components/ProductGrid';
import CategoryTabs from './components/CategoryTabs';
import ShoppingCart from './components/ShoppingCart';
import WelcomeScreen from './components/WelcomeScreen'; // Importa WelcomeScreen

function App() {
    const [isWelcomeVisible, setIsWelcomeVisible] = useState(true); // Estado para controlar la pantalla de bienvenida
    const [isCartOpen, setIsCartOpen] = useState(false); // Estado para controlar si el carrito está abierto
    const [cartItems, setCartItems] = useState([]);
    const categories = [...new Set(productsData.map(product => product.category))];
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    const filteredProducts = activeCategory === 'Todos'
        ? productsData.flatMap(cat => cat.items)
        : productsData.find(cat => cat.category === activeCategory)?.items || [];

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


    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            {isWelcomeVisible ? (
                <WelcomeScreen onStartApp={handleStartApp} /> // Renderiza WelcomeScreen si isWelcomeVisible es true
            ) : (
                <> {/* Fragment para agrupar elementos sin un div extra */}
                    <header className="bg-white shadow-md py-4 px-6 sm:px-8 lg:px-10">
                        <div className="container mx-auto flex justify-between items-center">
                            <div className="font-bold text-xl text-gray-800">Tochpan Café</div> {/* Nombre de la cafetería en el header */}
                            <button onClick={toggleCart} className="relative"> {/* Botón del carrito */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
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
                        />
                        <ProductGrid products={filteredProducts} onAddToCart={handleAddToCart} />
                    </div>

                    <ShoppingCart
                        cartItems={cartItems}
                        onRemoveFromCart={handleRemoveFromCart}
                        onUpdateQuantity={handleUpdateQuantity}
                        isOpen={isCartOpen} // Puedes pasar isOpen para controlar la visibilidad desde aquí si lo deseas
                        onClose={() => setIsCartOpen(false)} //  Función para cerrar el carrito
                    />

                    <footer className="text-center mt-8 sm:mt-12 text-gray-500 text-sm py-4">
                        <p>© {new Date().getFullYear()} Cafetería App. Todos los derechos reservados.</p>
                    </footer>
                </>
            )}
        </div>
    );
}

export default App;