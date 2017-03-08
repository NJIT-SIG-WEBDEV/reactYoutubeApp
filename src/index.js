// import libraries
import React from 'react';
import ReactDOM from 'react-dom';

// import Components
import SearchBar from './components/search_bar';

// define main app component
// this will contain all the components of the application
// this is an example of a function-based component
const App = function() {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// render the App component to the DOM element
ReactDOM.render(<App />, document.querySelector('.container'));
