import { useState } from "react";
import DashHeader from "../components/DashboardHeader";
import Sidebar from "./Sidebar";
import { Navigate, Outlet } from "react-router";

export function DashboardLayout() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const user = JSON.parse(localStorage.getItem("auth") as any);

    if (!user?.id) {
        return <Navigate to="/login" replace={true} />;
    }
    return (
        <div>
            <DashHeader />
            <Sidebar toggle={handleClick} style="hidden lg:flex" />
            <div className="bg-white h-screen ml-52 pt-20">
                <Outlet />
            </div>
        </div>
    );
}