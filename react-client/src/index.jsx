import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import axios from 'axios'
import config from '../../config.js'
import Search from './components/Search.jsx'
import Favs from './components/Favs.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      movies: [],
      favorites: [] 
    }
    this.handleSearch.bind(this)
  }
  
  
  //GET request will be sent when user types in a year  
  
  
  //
  
  handleSearch (input) {
    console.log('config',config)
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${config}&year=${input}`) 
      /*{
      api_key: config, 
      year: input,
      sort_by: "popularity.desc"
      }*/
    .then((data) => {
      console.log('what is data',data.data.results)
      this.setState({
        movies: data.data.results  
      })
    })
    .catch((err) => {
      console.error(err)
    })
  }

  saveFavorites(movie) {
    console.log('movie***',movie)
    axios.post('/movies',movie).then(() => {
      return axios.get('/movies')
    }).then((favdata) => {
        console.log('favdata', this)
        this.setState({
        favorites: favdata.data
        })  
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
      <Search handleSearch={this.handleSearch.bind(this)}/>
      <br/>
      <List movies={this.state.movies} saveFavorites={this.saveFavorites.bind(this)}/>
      <Favs favorites={this.state.favorites}/> 
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));