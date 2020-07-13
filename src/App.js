import React from "react";
import MovieList from "./MovieList";
import Footer from "./components/Footer";
import LandingPage from "./LandingPage";

class App extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <LandingPage />
        <MovieList />
        <Footer />
      </div>
    );
  }
}

export default App;
