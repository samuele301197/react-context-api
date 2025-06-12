import { NavLink } from "react-router-dom";

const AppHeader = () => {
    return (
        <header>
            <nav>
                <ul className="list-unstyled d-flex justify-content-center">
                    <li className="m-5">
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    <li className="m-5">
                        <NavLink to="/contatti">Contatti</NavLink>  
                    </li>
                    <li className="m-5">
                        <NavLink to="/ourblog">Our Post</NavLink>   
                    </li>
                </ul>
            </nav>
        </header>
    );
};


export default AppHeader;