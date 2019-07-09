import React from 'react';
import './App.css';
import {connect } from 'react-redux'
import Login from './Login';
import MovieList from './components/MovieList';

class App extends React.Component {
  componentDidMount(){}
  render(){
    return (
      <div className="App">
        <h1>hello</h1>
        <Login/>
        <MovieList/>
      </div>
    );

  }
 
}

export default  connect (null,null)(App);
