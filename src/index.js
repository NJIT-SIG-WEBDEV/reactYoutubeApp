// import libraries
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import API_KEY from './api-key';

// import Components
import SearchBar from './components/search_bar';

 // define main app component
 // this will contain all the components of the application
 // this is an example of a class-based component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
     });

     console.log(this.state.videos);
   };

// var onSearchTermChange = videoSearch;

  render() {
    return(
      <div>
        <SearchBar onSearchTermChange={this.videoSearch} />
      </div>
    );
  }
}
// render the App component to the DOM element
ReactDOM.render(<App />, document.querySelector('.container'));
