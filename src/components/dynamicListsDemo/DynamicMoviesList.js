import React, { Component } from "react";
import ImprovedCard from "./ImprovedCard";
import AddMovie from './AddMovie';


class DynamicMoviesList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          title: "The Godfather",
          director: "Francis Coppola",
          hasOscars: true,
          IMDbRating: 9.2
        },
        {
          title: "Star Wars",
          director: "Rian Johnson",
          hasOscars: true,
          IMDbRating: 8.7
        },
        {
          title: "The Shawshank Redemption",
          director: "Frank Darabont",
          hasOscars: false,
          IMDbRating: 9.3
        }
      ],
      showOscarAwarded: false
    };
  };

  toggleMovies = () => {
    this.setState({ showOscarAwarded: !this.state.showOscarAwarded })
  };

  filteredMovies;

  deleteMovieHandler = movieIndex => {
    const moviesCopy = [...this.state.movies];

    const indexDelete = this.state.movies.indexOf(this.filteredMovies[movieIndex]);

    moviesCopy.splice(indexDelete, 1);
    this.setState({
      movies: moviesCopy
    });
  };

  addMovieHandler = (theMovie) => {
    const moviesCopy = [...this.state.movies];
    moviesCopy.push(theMovie);
    this.setState({
      movies: moviesCopy
    })
  }

  addHarryPotterHandler = () => {
    this.setState({
      movies: [
        {
          title: "Harry Potter",
          director: "David Yates",
          hasOscars: false,
          IMDbRating: 9.8
        },
        ...this.state.movies
      ]
    });
  };

  render() {
    //console.log(this.state.movies);
    const { showOscarAwarded } = this.state;

    this.filteredMovies = this.state.movies.filter(theMovie => theMovie.hasOscars == showOscarAwarded);

    return (
      <div>
        <AddMovie addTheMovie={this.addMovieHandler} />
        <button onClick={this.addHarryPotterHandler}>Add Harry Potter</button>
        {
          this.filteredMovies.map((oneMovie, index) => {
            return (
              <ImprovedCard
                key={index}
                {...oneMovie}
                clickToDelete={() => this.deleteMovieHandler(index)}
              />
            );
          })
        }
        <button onClick={() => this.toggleMovies()}>
          {showOscarAwarded ? 'Hide Oscar Awarded' : 'Show Oscar Awarded'}
        </button>
      </div>
    );
  }
}

export default DynamicMoviesList;
