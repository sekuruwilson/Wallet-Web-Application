import { Link } from "react-router-dom"
import DataTable from "../components/Table"
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { useEffect } from "react";
import { fetchApiData } from "../redux/features";

export default function Categories() {
    const dispatch = useAppDispatch();
    const data = useAppSelector((state) => state.api);

    const columns = [{
        Header: 'Category',
        accessor: 'name'

    }]

    useEffect(()=>{
       dispatch(fetchApiData('/categories'))
    },[])

    console.log(data)

    return (
        <div>
            <Link to="/dashboard/categories/add">
                <button className="bg-primary text-white p-2 rounded-md hover:opacity-80 my-3">
                    Add Category
                </button>
            </Link>
            
            <DataTable columns={columns} data={
                data.categories?.data ?? []
            } placeholder="Search Categories" />
        </div>
    )
}