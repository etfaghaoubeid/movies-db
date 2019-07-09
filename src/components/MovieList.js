import React, { Component } from 'react'
import Movie  from '../components/Movie'
import styled from 'styled-components'

 class MovieList extends Component {
     state = {
         movies:[]
     }
     async componentDidMount(){
         const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=13a5ef1068217a896d3bfb3b8cffdf6b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
         const {results} = await res.json()
         this.setState({movies:results})
         
     }
    render() {
        return (
           <MovieGrid>
               {this.state.movies.map(movie=>(<Movie key={movie.id} movie={movie}/>))}
           </MovieGrid>
        )
    }
}

export default MovieList;

const MovieGrid = styled.div`
  display:grid;
  padding:1rem;
  grid-template-columns:repeat(6,1fr);
  grid-row-gap:1rem;

`;
