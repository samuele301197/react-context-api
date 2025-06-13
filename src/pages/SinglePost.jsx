import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error(err));
  }, [id]);

    if (!post) return <p>Caricamento...</p>;

  return (
    <div className="container my-4">
      <Link to="/ourpost" className="btn btn-secondary mb-3">← Torna ai post</Link>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default SinglePost;
