import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";

const GuestLayout = () => {
    return (
        <>
        <AppHeader />
        <main className="container">
            <Outlet /> 
        </main>      
        </>
    );
};

export default GuestLayout;