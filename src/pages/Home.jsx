import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main>
        <Link className="btn btn-warning m-2" to={"/contatti"}>Contatti</Link>
        <Link className="btn btn-success m-2" to={"/ourpost"}>OurPost</Link>
        <Link className="btn btn-secondary m-2" to={"/create-post"}>Create Post</Link>
            <h1 className="text-center"><strong>La nostra Home</strong></h1>
        </main>
    );
};

export default Home;