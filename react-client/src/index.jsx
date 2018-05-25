import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import axios from 'axios'
import config from '../../config.js'
import Search from './components/Search.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      movies: [] 
    }
  }
  
  
  //GET request will be sent when user types in a year  
  
  
  //
  
  handleSearch (input) {
    axios.get('https://api.themoviedb.org/3/discover/movie', 
      {
      api_key: config, 
      year: input,
      sort_by: "popularity.desc"
      }
    ).then((data) => {
      console.log(data)
      this.setState = {
        movies: data  
      }
    })
  }
  
  /*
  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }*/

  render () {
    return (<div>
      <h1>Top-Rated Movies</h1>
      <List movies={this.state.movies}/>
      <Search handleSearch={this.handleSearch}/>  
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));