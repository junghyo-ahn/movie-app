import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';

class Movie extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    }
    
    render() {
        return (
            <div className="Movie">
                <div className="Movie__Columns">
                    <MoviePoster poster={this.props.poster} alt={this.props.title}/>
                </div>
                <div className="Movie__Columns">
                    <h1>{this.props.title}</h1>
                    <div className="Movie_Genres">
                        {this.props.genres ? this.props.genres.map((genre, index) => <MovieGenre genre={genre} key={index} />) : ""}
                    </div>
                    <div className="Movie__Synopsys">
                        <LinesEllipsis
                            text={this.props.synopsis}
                            maxLine='3'
                            ellipsis='...'
                            trimRight
                            basedOn='letters'
                        />
                    </div>
                </div>
            </div>
        )
    }
}

class MoviePoster extends Component {
    render() {
        return(
        <img alt={this.props.alt} src={this.props.poster} className="Movie__Poster" />
        )
    }
}

class MovieGenre extends Component {
    render() {
        return (
            <span className="Movie__Genre">{this.props.genre} </span>
        )
    }
}

export default Movie