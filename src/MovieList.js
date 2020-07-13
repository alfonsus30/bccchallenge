import React from "react";
import axios from "axios";
import "./MovieList.css";
import MovieCard from "./components/MovieCard";
class MovieList extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    axios.get(`https://picsum.photos/v2/list`).then((res) => {
      console.log(res);
      this.setState({ movies: res.data });
    });
  }

  render() {
    const movieList = this.state.movies.map((movie) => (
      <MovieCard
        author={movie.author}
        url={movie.download_url}
        key={movie.id}
      />
    ));
    return (
      <div className="movie-content">
        <h2>Recommended Pictures for You</h2>
        <div className="movie_list">{movieList}</div>
      </div>
    );
  }
}

export default MovieList;
