import React from 'react';
import SearchBar from './SearchBar';
import VideoPlayer from './VideoPlayer';
import youtube from '../apis/youtube';

class App extends React.Component {
  // Initial state of App component
  // Remember: When state changes, component automatically re-renders
  state = {
    videos: []
  }

  // Async call to YouTube API
  async otanGineiToSubmit(term) {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    console.log(response);
    // We update the state with newly fetched videos
    this.setState({
      videos: response.data.items
    });
  }

  // makaronia and selectedVideo are props that we pass down to children components
  // In case of makaronia, we pass down a function that's going to be called
  // from within the SearchBar component
  render() {
    return (
      <div className="ui container">
        Videos loaded: {this.state.videos.length}
        <SearchBar makaronia={term => this.otanGineiToSubmit(term)} />
        <VideoPlayer selectedVideo={this.state.videos[0]} />
      </div>
    );
  };
}

export default App;