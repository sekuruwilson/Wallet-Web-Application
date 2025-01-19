import React, { useState } from 'react';
import axios from 'axios';
import './css/AddTransaction.css'; // Import a CSS file for styling

const AddExpense = () => {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('expense'); // Default to 'expense'
    const [accountId, setAccountId] = useState(1); // Example default account ID
    const [categoryId, setCategoryId] = useState(1); // Example default category ID

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newExpense = { account_id: accountId, category_id: categoryId, amount, type, description };
        try {
            await axios.post('http://localhost:3000/api/transactions', newExpense); // Adjust the endpoint as needed
            // Reset form or handle success
            setAmount('');
            setDescription('');
            setType('expense');
            setAccountId(1);
            setCategoryId(1);
            alert('Transaction added successfully!');
        } catch (error) {
            console.error('Error adding transaction:', error);
            alert('Failed to add transaction. Please try again.');
        }
    };

    return (
        <div className="add-expense-container">
            <h2>Add a New Transaction</h2>
            <form onSubmit={handleSubmit} className="add-expense-form">
                <div className="form-group">
                    <label htmlFor="type">Type:</label>
                    <select id="type" value={type} onChange={(e) => setType(e.target.value)} required>
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount:</label>
                    <input
                        type="number"
                        id="amount"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        placeholder="Enter description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="accountId">Account ID:</label>
                    <input
                        type="number"
                        id="accountId"
                        value={accountId}
                        onChange={(e) => setAccountId(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="categoryId">Category ID:</label>
                    <input
                        type="number"
                        id="categoryId"
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Add Transaction</button>
            </form>
        </div>
    );
};

export default AddExpense;