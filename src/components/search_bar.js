// import Libraries
import React, { Component } from 'react';

// define class-based component
// utilizing es6 class syntax
class SearchBar extends Component {

  constructor(props) {
    super(props);

    // every class based component has its own state
    this.state = {term: ''};

    // need to bind the onInputChange function to the SearchBar component
    this.onInputChange = this.onInputChange.bind(this);
  }

  // every class based component needs a render function in order
  // to render html to the DOM
  render() {
    return(
      <div>
        <input onChange={(event) => {this.onInputChange(event.target.value)} } value={this.state.term} />
        Value of input: { this.state.term }
      </div>
    );
  }

  // function to return a new state every time a user
  // enters an input.
  // should never mutate a state eg. this.state.term = event.target.value;
  // Components re-render upon every state change or new state
  onInputChange(term) {
    this.setState({term: term });

    // videoSearch function passed from index.js parent component
    this.props.onSearchTermChange(term);
  }
}

// export our SearchBar component to be imported into the main app
export default SearchBar;
