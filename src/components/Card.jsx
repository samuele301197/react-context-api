const Card = ({character}) => {
const { title, author, body, id } = character;
return(
    <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{author}</p>
                    <p className="card-text">{body}</p>
                </div>
        </div>
);
};

export default Card;