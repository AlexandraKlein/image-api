import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

// 456d4070e37b39f3e19ce55829470b787d2036454d83337de72c2431af29c5a4
// 27b36b5f6eb19fd50ebccb7b60338cb51dc0709b8ae5b9a4a766bc67b9702396

class App extends Component {

  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };

  componentDidMount() {
    this.onSearchSubmit('CATS');
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images} />
      </div>
    )
  }
}

export default App;
