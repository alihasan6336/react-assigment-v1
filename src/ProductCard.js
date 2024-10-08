import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, deleteProduct }) => {
    const handleDelete = () => {
        deleteProduct(product.id);
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default ProductCard;