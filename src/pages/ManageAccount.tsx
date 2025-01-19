import React, { useState } from 'react';
import axios from 'axios';

const ManageAccount = () => {
    const [accountName, setAccountName] = useState('');
    const [accountType, setAccountType] = useState('');

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const newAccount = { name: accountName, type: accountType };
        await axios.post('http://localhost:3000/api/accounts', newAccount); // Assuming there's an endpoint for managing accounts
        // Reset form or handle success
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Manage Account</h2>
            <input type="text" placeholder="Account Name" value={accountName} onChange={(e) => setAccountName(e.target.value)} required />
            <input type="text" placeholder="Account Type" value={accountType} onChange={(e) => setAccountType(e.target.value)} required />
            <button type="submit">Add Account</button>
        </form>
    );
};

export default ManageAccount;
