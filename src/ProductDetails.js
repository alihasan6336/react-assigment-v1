import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
const ProductDetails = ({ products }) => {
    const { productId } = useParams();
    const product = products.find(p => p.id === parseInt(productId));

    return (
        <div className="product-details">
            <img src={product.image} alt={product.name} />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <h2>${product.price}</h2>
        </div>
    );
};

export default ProductDetails;
