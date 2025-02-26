// src/components/ProductGrid.jsx
import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onAddToCart }) => { // Recibe onAddToCart como prop
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} /> // Pasa onAddToCart a ProductCard
            ))}
        </div>
    );
};

export default ProductGrid;