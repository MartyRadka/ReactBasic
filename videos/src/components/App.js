import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
  onTermSubmit = async term => {
    // youtube function, function of axios, in which i want to access the search endpoint,
    // so the first parametre of get will be this endpoint,and the second one
    // will be the object with the params q, which is the argument of onTermSubmit function
    // search term - we pass in the actual param of q
    // the code below is actually the asynchronic api request
    
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    console.log(response);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
