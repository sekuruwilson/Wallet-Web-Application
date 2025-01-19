import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/dashboardcss.css'; // Corrected import path

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [selectedAccount, setSelectedAccount] = useState('');

    useEffect(() => {
        fetchTransactions();
        fetchAccounts();
    }, []);

    const fetchTransactions = async () => {
        const response = await axios.get('http://localhost:3000/api/transactions'); // Updated URL
        setTransactions(response.data);
    };

    const fetchAccounts = async () => {
        const response = await axios.get('http://localhost:3000/api/accounts'); // Updated URL
        setAccounts(response.data);
    };

    const handleAccountChange = (e:any) => {
        setSelectedAccount(e.target.value);
    };

    const filteredTransactions:Transaction[] = selectedAccount
        ? transactions.filter((transaction:  {id:string})=> transaction.id === selectedAccount)
        : transactions;

    return (
        <div>
            <header>
                <h1>Transactions</h1>
            </header>
            <main>
                <label htmlFor="account-select">Select Account:</label>
                <select id="account-select" value={selectedAccount} onChange={handleAccountChange}>
                    <option value="">All Accounts</option>
                    {accounts.map(account => (
                        <option key={account.id} value={account.id}>
                            {account.name}
                        </option>
                    ))}
                </select>
                <ul id="transaction-list">
                    {filteredTransactions.map(transaction => (
                        <li key={transaction.id}>
                            {transaction.type}: ${transaction.amount} - {transaction.description}
                        </li>
                    ))}
                </ul>
            </main>
            <footer>
                <p>&copy; 2023 Code of Africa GmbH</p>
            </footer>
        </div>
    );
};

export default Transactions;
