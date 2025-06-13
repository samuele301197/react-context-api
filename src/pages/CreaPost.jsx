import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const initialFormData = {
    title: '',
    content: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendData = (e) => {
    e.preventDefault();

    axios
      .post('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', {
        ...formData,
        createdAt: new Date().toISOString()
      })
      .then((resp) => {
        if (resp.data.id) {
          setShowAlert(true);
          setFormData(initialFormData);
          navigate(`/ourpost/${resp.data.id}`);
        }
      })
      .catch((err) => {
        console.error("Errore durante l'invio del post:", err);
      });
  };

  return (
    <div className="container">
      <h1 className="my-4">Crea un nuovo Post</h1>

      {showAlert && (
        <div className="alert alert-success" role="alert">
          Post creato con successo!
        </div>
      )}

      <form onSubmit={sendData}>
        <div className="mb-3">
          <label className="form-label">Titolo</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contenuto</label>
          <textarea
            className="form-control"
            rows="5"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-success">
          Invia Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
