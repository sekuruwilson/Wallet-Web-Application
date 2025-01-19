import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/dashboardcss.css'; // Corrected import path

const Budget = () => {
    const [budgets, setBudgets] = useState<Budget[]>([]);
    const [category_id, setCategoryId] = useState('');
    const [amount, setAmount] = useState('');
    const [notify, setNotify] = useState(false);

    useEffect(() => {
        fetchBudgets();
    }, []);


    const fetchBudgets = async () => {
        const response = await axios.get('http://localhost:3000/api/budgets'); // Updated URL
        setBudgets(response.data);
    };

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        const newBudget = { category_id, amount, notify };
        await axios.post('http://localhost:3000/api/budgets', newBudget); // Updated URL
        fetchBudgets(); // Refresh budgets after adding a new one
    };

    return (
        <div>
            <header>
                <h1>Budgets</h1>
            </header>
            <main>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Category ID" value={category_id} onChange={(e) => setCategoryId(e.target.value)} required />
                    <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
                    <label>
                        Notify when exceeded:
                        <input type="checkbox" checked={notify} onChange={(e) => setNotify(e.target.checked)} />
                    </label>
                    <button type="submit">Add Budget</button>
                </form>
                <ul id="budget-list">
                    {budgets.map(budget => (
                        <li key={budget.id}>
                            Category: {budget.categoryId
                            } - Amount: ${budget.amount}
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

export default Budget;
