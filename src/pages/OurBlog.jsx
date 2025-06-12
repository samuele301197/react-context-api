import { useEffect, useState } from 'react';
import axios from "axios";
import { BrowserRouter } from 'react-router-dom';
import Card from '../components/Card';

const OurBlog = () => {
const [blog, setBlog] = useState([]);
useEffect(() => {
    axios.get("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts").then((resp) => {
        setBlog(resp.data);
        
    });
}, []);
return(
    <>
        <h1 className='text-center'>Lista Post</h1>
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

export default OurBlog