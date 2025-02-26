// src/App.jsx
import React, { useState } from 'react';
import { productsData } from './data/products';
import ProductGrid from './components/ProductGrid';
import CategoryTabs from './components/CategoryTabs';

function App() {
    const categories = [...new Set(productsData.map(product => product.category))];
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    const filteredProducts = activeCategory === 'Todos'
        ? productsData.flatMap(cat => cat.items)
        : productsData.find(cat => cat.category === activeCategory)?.items || [];

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
                <header className="text-center mb-6 sm:mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Pedidos Cafetería</h1>
                    <p className="text-gray-600 mt-2 sm:mt-3">¡Elige tus favoritos!</p>
                </header>

                <CategoryTabs
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryChange={handleCategoryChange}
                />
                <ProductGrid products={filteredProducts} />

                <footer className="text-center mt-8 sm:mt-12 text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Cafetería App. Todos los derechos reservados.</p>
                </footer>
            </div>
        </div>
    );
}

export default App;