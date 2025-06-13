import { NavLink } from "react-router-dom";

const AppHeader = () => {
    return (
        <header>
            <nav>
                <ul className="list-unstyled d-flex justify-content-center">
                    <li className="m-5">
                        <NavLink className="btn btn-primary" to="/home">Home</NavLink>
                    </li>
                    <li className="m-5">
                        <NavLink className="btn btn-warning" to="/contatti">Contatti</NavLink>  
                    </li>
                    <li className="m-5">
                        <NavLink className="btn btn-success" to="/ourpost">Our Post</NavLink>   
                    </li>
                    <li className="m-5">
                        <NavLink className="btn btn-secondary" to="/create-post">Create Post</NavLink>   
                    </li>
                </ul>
            </nav>
        </header>
    );
};


export default AppHeader;