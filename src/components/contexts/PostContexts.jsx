import axios from "axios";
import { createContext, useEffect, useState } from "react";


const PostContexts = createContext();
const PostProvider = ({ children }) => {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
      axios.get("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts?limit=20&page=1").then((resp) => {
        setBlog(resp.data);       
    });
}, []);

return (
    <PostContexts.Provider value={{blog}}>
        {children}
    </PostContexts.Provider>
);
};


export {PostContexts, PostProvider};