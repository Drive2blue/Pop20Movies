import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "Enter Year"
    }
  }
  
  handleInput (e) {
    console.log('what is this',this)
    this.setState({
      input: e.target.value 
    })
  }

  search() {
    console.log('search: what is this', this)
    console.log('state input',this.state.input)
    this.props.handleSearch(this.state.input)
  }
  
  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.handleInput.bind(this)}/> 
        <button onClick={this.search.bind(this)}>Submit</button>
      </div>
    )
  }
}


export default Search;