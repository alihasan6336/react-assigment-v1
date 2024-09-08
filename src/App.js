import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails';
import HelpCenter from './HelpCenter';
import NavBar from './NavBar';
import NotFound from './NotFound';
import CreateProduct from './CreateProduct';
import './App.css';

const initialProducts = [
    { id: 1, name: 'Product 1', description: 'This is product 1', price: 29.99, image: '/Product_1.jpg' },
    { id: 2, name: 'Product 2', description: 'This is product 2', price: 49.99, image: '/Product_2.jpg' },
];

function App() {
    const [products, setProducts] = useState(initialProducts);

    const addProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    const deleteProduct = (productId) => {
        setProducts(products.filter(product => product.id !== productId));
    };

    return (
        <Router>
            <NavBar />
            <div className="App">
                <Routes>
                    <Route path="/" element={products.map(product => (
                        <ProductCard key={product.id} product={product} deleteProduct={deleteProduct} />
                    ))} />
                    <Route path="/product/:productId" element={<ProductDetails products={products} />} />
                    <Route path="/help" element={<HelpCenter />} />
                    <Route path="/create" element={<CreateProduct addProduct={addProduct} />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;