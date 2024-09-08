import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import Error from './Error';

const ProductDetails = ({ products }) => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = () => {
            const foundProduct = products.find(p => p.id === parseInt(productId));
            if (foundProduct) {
                setProduct(foundProduct);
            } else {
                setError('Invalid product ID or product not found.');
            }
        };

        fetchProduct();
    }, [productId, products]);

    if (error) {
        return <Error message={error} />;
    }

    if (!product) {
        return <div>Loading...</div>;
    }

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
