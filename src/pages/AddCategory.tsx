import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { createApiData } from '../redux/features';
import { toast } from 'react-toastify';

const AddCategory = () => {
    const dispatch = useAppDispatch();
    const data = useAppSelector((state) => state.api);
    const [categoryName, setCategoryName] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await dispatch(createApiData({
                url: '/categories',
                body: {
                    name: categoryName
                }
            })).unwrap()
            setCategoryName('') 
            toast.success('Category added successfully');
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error:any) {
            console.log(error)
            toast.error(error.message);
        }

    };

    return (
        <form onSubmit={handleSubmit} className='bg-gray-100 p-4 rounded-lg w-1/2 flex flex-col gap-3'>
            <h2 className='text-md font-bold leading'>Add Category</h2>
            <input type="text" className='border-2 px-2 py-1' placeholder="Category Name" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} required />
            <button type="submit" className='bg-primary text-white py-2 px-4 rounded-md hover:opacity-80'>Add Category</button>
        </form>
    );
};

export default AddCategory;
