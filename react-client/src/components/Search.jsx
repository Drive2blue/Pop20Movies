import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "Enter Year"
    }
  }
  
  handleInput (e) {
    this.setState({
      input: e.target.value 
    })
  }

  search() {
    this.props.handleSearch(this.state.input)
  }
  
  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.handleInput.bind(this)} id="txtbox"/> 
        <button onClick={this.search.bind(this)} id="button">Submit</button>
      </div>
    )
  }
}


export default Search;