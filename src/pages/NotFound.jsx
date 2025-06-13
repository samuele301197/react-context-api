import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
        <h1>404 Not Found</h1>
        <Link to="/home" className="btn btn-primary mt-3">Torna alla Home</Link>       
        </>
 
    )
}



export default NotFound;