import React from "react";
import "./MovieCard.css"
function MovieCard(props) {
  return (
    <div className="card">
      <img src={props.url} />
      <h4>Author : {props.author}</h4>
    </div>
  );
}

export default MovieCard;
