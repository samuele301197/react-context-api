import { Link } from "react-router-dom";

const Contatti = () => {
    return (
        <main>
        <Link className="btn btn-primary m-2" to={"/home"}>Home</Link>
        <Link className="btn btn-success m-2" to={"/ourpost"}>OurPost</Link>
            <h1><strong>I nostri Contatti</strong></h1>
        </main>
    );
};

export default Contatti;