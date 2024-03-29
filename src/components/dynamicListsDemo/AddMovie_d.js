import React, { Component } from 'react';

class AddMovie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            director: "",
            hasOscar: false,
            IMDbRating: ""
        }
    }

    handleTitleInput = (event) => {
        this.setState({
            title: event.target.value
        })
    };

    handleDirectorInput = (event) => {
        this.setState({
            director: event.target.value
        })
    };

    handleHasOscarsCheck = (event) => {
        this.setState({
            hasOscars: event.target.type === 'checkbox' ? event.target.checked : event.target.value
        })
    };

    handleRating = (event) => {
        this.setState({
            IMDbRating: event.target.value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.addTheMovie(this.state);
        this.setState({
            title: '',
            director: '',
            hasOscars: false,
            IMDbRating: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Title:</label>
                    <input type="text" name="title" value={this.state.title} onChange={(e) => this.handleTitleInput(e)} />

                    <label>Director:</label>
                    <input type="text" name="director" value={this.state.director} onChange={(e) => this.handleDirectorInput(e)} />

                    <label>Oscar Awarded:</label>
                    <input type="checkbox" name="hasOscars" checked={this.state.hasOscars} onChange={(e) => this.handleHasOscarsCheck(e)} />

                    <label>IMDb Rating:</label>
                    <input type="text" name="IMDbRating" value={this.state.IMDbRating} onChange={(e) => this.handleRating(e)} />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default AddMovie;
