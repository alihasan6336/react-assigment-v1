import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails';
import HelpCenter from './HelpCenter';
import NavBar from './NavBar';
import './App.css';

const products = [
    { id: 1, name: 'Product 1', description: 'This is product 1', price: 29.99, image: '/Product_1.jpg' },
    { id: 2, name: 'Product 2', description: 'This is product 2', price: 49.99, image: '/Product_2.jpg' },
];

function App() {
    return (
        <Router>
            <NavBar />
            <div className="App">
                <Routes>
                    <Route path="/" element={products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))} />
                    <Route path="/product/:productId" element={<ProductDetails products={products} />} />
                    <Route path="/help" element={<HelpCenter />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
