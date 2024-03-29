import React, { Component } from 'react'
import  styled from 'styled-components';
import Overdrive from 'react-overdrive'
import {Poster} from './Movie'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';
export default class MovieDetails extends Component {
    state={
        movie:{}
    }
    async componentDidMount(){
        try{
            const responde = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=13a5ef1068217a896d3bfb3b8cffdf6b&language=en-US`)
            const movie = await responde.json()
           this.setState({movie})

        }catch(e){
            console.log(e);
        }
        
    }
    render() {
        const {movie} = this.state
        if(!movie.id) return null;
        return (
           <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
               <MovieInfo>
                  <Overdrive>
                      <Poster src={`${POSTER_PATH}${movie.poster_path}`}/>
                   </Overdrive>
                   <div>
                       {this.state.movie.title?(<h1>hello</h1>):<h3>hi</h3>}
                       <h1>{movie.title}</h1>
                       <h3>{movie.release_date}</h3>
                       <p>{movie.overview}</p>
                    
                   </div>
                
               </MovieInfo>

           </MovieWrapper>
        )
    }
}
const MovieWrapper = styled.div`
position: relative;
padding-top:50vh;
background:url(${props=>props.backdrop}) no-repeat;
background-size:cover;
`;
const MovieInfo = styled.div`
background:white;
text-align:left;
padding:2rem 10%;
display:flex;
>div{
    margin-left:20px;
}img{
    position :relative;
    top:-5rem;
}

`
