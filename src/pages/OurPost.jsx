import { useEffect, useState } from 'react';
import axios from "axios";
import { BrowserRouter } from 'react-router-dom';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const OurPost = () => {
const [blog, setBlog] = useState([]);
useEffect(() => {
    axios.get("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts").then((resp) => {
        setBlog(resp.data);
        
    });
}, []);
return(
    <>
        <h1 className='text-center'><strong>Lista Post</strong></h1>
        <Link className="btn btn-primary m-2" to={"/home"}>Home</Link>
        <Link className="btn btn-warning m-2" to={"/contatti"}>Contatti</Link>
    <div className="row row-cols-3 g-3 my-3">
    {blog.map((curBlog) => (
    <div key={curBlog.id} className="col">
    <Card character={curBlog}/>
    </div>
    ))}                
    </div>         
    </>
)

}

export default OurPost