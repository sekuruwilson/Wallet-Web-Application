import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/Accounts.css'; // Import a CSS file for styling

const Accounts = () => {
    const [accounts, setAccounts] = useState([]);
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [balance, setBalance] = useState('');
    const [category_id, setCategoryId] = useState(''); // New state for category ID

    useEffect(() => {
        fetchAccounts();
    }, []);

    const fetchAccounts = async () => {
        const response = await axios.get('http://localhost:3000/api/accounts');
        setAccounts(response.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newAccount = { name, type, balance, category_id }; // Include category ID in the new account
        await axios.post('http://localhost:3000/api/accounts', newAccount);
        fetchAccounts();
        // Reset form fields
        setName('');
        setType('');
        setBalance('');
        setCategoryId('');
    };

    return (
        <div className="accounts-container">
            <h1>Accounts</h1>
            <form onSubmit={handleSubmit} className="accounts-form">
                <div className="form-group">
                    <label htmlFor="name">Account Name:</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter account name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="type">Account Type:</label>
                    <input
                        type="text"
                        id="type"
                        placeholder="Enter account type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="balance">Balance:</label>
                    <input
                        type="number"
                        id="balance"
                        placeholder="Enter balance"
                        value={balance}
                        onChange={(e) => setBalance(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category_id">Category ID:</label>
                    <input
                        type="text"
                        id="category_id"
                        placeholder="Enter category ID"
                        value={category_id}
                        onChange={(e) => setCategoryId(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Add Account</button>
            </form>
            <h2>Existing Accounts</h2>
            <ul className="accounts-list">
                {accounts.map(account => (
                    <li key={account.id}>
                     Type:   {account.name}  - Balance: {account.balance}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Accounts;