import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import axios from 'axios'
import config from '../config.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      movies: [] 
    }
  }
  
  axios.get('/movies', 
    {
      api_key: config 
      year: 2017,
      sort_by: "popularity.desc"
    }
  ).then(data) {
    console.log(data)
    this.setState = {
      movies: data  
    }
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
      <h1>Move List</h1>
      <List items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));