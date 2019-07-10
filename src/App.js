import React from 'react';
import './App.css';
import {connect } from 'react-redux'
import {Switch ,Route,Link} from 'react-router-dom'
import logo from'./logo.svg';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

class App extends React.Component {
  componentDidMount(){}
  render(){
    return (
      <div className="app">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
      <Switch>
        <Route exact path ="/"component={MovieList} />
        <Route path="/:id" component={MovieDetails}/>
      </Switch>
    </div>
    );

  }
 
}

export default  connect (null,null)(App);
