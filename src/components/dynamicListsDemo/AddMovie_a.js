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

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Title:</label>
                    <input type="text" name="title" value={this.state.title} />

                    <label>Director:</label>
                    <input type="text" name="director" value={this.state.director} />

                    <label>Oscar Awarded:</label>
                    <input type="checkbox" name="hasOscars" checked={this.state.hasOscars} />

                    <label>IMDb Rating:</label>
                    <input type="text" name="IMDbRating" value={this.state.IMDbRating} />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default AddMovie;
