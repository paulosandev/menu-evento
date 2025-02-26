// src/App.jsx
import React, { useState } from 'react';
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
    alert("¡Pedido confirmado! Gracias por tu compra."); // Mensaje de confirmación al usuario
    // Aquí iría la lógica para enviar el pedido a un backend o guardarlo localmente, etc. (próximos pasos)
  };


  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {isWelcomeVisible ? (
        <WelcomeScreen onStartApp={handleStartApp} />
      ) : (
        <> {/* Fragment para agrupar elementos sin un div extra */}
          <header className="bg-white shadow-md py-4 px-6 sm:px-8 lg:px-10">
            <div className="container mx-auto flex justify-between items-center">
              <div className="font-bold text-xl text-gray-800">[Nombre de tu Cafetería]</div> {/* Nombre de la cafetería en el header */}
              <button onClick={toggleCart} className="relative"> {/* Botón del carrito */}
                [Image of Icono de Carrito Aquí - Reemplaza con tu Icono SVG o Icon Component]
                {/*  Aquí iría tu icono de carrito SVG o component  */}
                <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2.1m7.9-.1l-.3 1m6.4 7h-13m18-3v-1.4a.5.5 0 00-.1-.3L19 5a.5.5 0 00-.5-.5H4.5a.5.5 0 00-.5.5L3 12l1.5 7a.5.5 0 00 .5.5H18a.5.5 0 00 .5-.5V13m0 0v-3.5m0 0h-1l-1-5m-5 5v-3.5m0 0h-1l-1-5m-5 5v-3.5m0 0h-1l-1-5" />
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
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            onCheckout={handleOpenOrderForm} // Pasa handleOpenOrderForm como prop onCheckout
          />

          <footer className="text-center mt-8 sm:mt-12 text-gray-500 text-sm py-4">
            <p>© {new Date().getFullYear()} Cafetería App. Todos los derechos reservados.</p>
          </footer>
        </>
      )}
      <OrderForm
        isOpen={isOrderFormOpen}
        onClose={handleCloseOrderForm}
        onSubmit={handleOrderSubmit}
      />
    </div>
  );
}

export default App;