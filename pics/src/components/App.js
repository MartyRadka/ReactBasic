import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {

  state = { images: [] };

  handleSearchSubmit = async term => {
    //this term is passed there by callback onSubmit, request for api
    // first param from get is from where, and second what we want to get
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });

    this.setState({images: response.data.results});
  }

  render(){
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.handleSearchSubmit} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}


export default App;
