import React from 'react'
import styled from 'styled-components'
import Overdrive from 'react-overdrive'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const  Movie=({movie})=> {
    return (
        <Link to ={`/${movie.id}`}>
            <Overdrive id={`${movie.id}`}>
                <Poster src={`${POSTER_PATH}${movie.poster_path}`}></Poster>
            </Overdrive>
        </Link>
       
        
    )
}

export default  Movie;
 Movie.propTypes={
     movie:PropTypes.shape({
         tittle:PropTypes.string.isRequired
     }).isRequired
 };
export const Poster = styled.img`
box-shadow:0 0 2rem black;

`;