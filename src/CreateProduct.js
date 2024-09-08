import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateProduct = ({ addProduct }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = { id: Date.now(), name, description, price: parseFloat(price) };

        try {
            addProduct(newProduct);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="create-product">
            <h1>Create New Product</h1>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </div>
                <button type="submit">Create Product</button>
            </form>
        </div>
    );
};

export default CreateProduct;