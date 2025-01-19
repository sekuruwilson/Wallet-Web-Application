import React, { useState } from 'react';
import axios from 'axios';

const SetBudget = () => {
    const [category_id, setCategoryId] = useState('');
    const [amount, setAmount] = useState('');
    const [notify, setNotify] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBudget = { category_id, amount, notify };
        await axios.post('http://localhost:3000/api/budgets', newBudget); // Assuming there's an endpoint for setting budgets
        // Reset form or handle success
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Set Budget</h2>
            <input type="text" placeholder="Category ID" value={category_id} onChange={(e) => setCategoryId(e.target.value)} required />
            <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            <label>
                Notify when exceeded:
                <input type="checkbox" checked={notify} onChange={(e) => setNotify(e.target.checked)} />
            </label>
            <button type="submit">Set Budget</button>
        </form>
    );
};

export default SetBudget;
