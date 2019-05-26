import React from 'react';

class VideoPlayer extends React.Component {
  render() {
    // When this component is initially rendered, we do not have any videos yet
    // We check if this prop is available
    if (!this.props.selectedVideo) {
      return 'No video searched.';
    }
    
    // Everything below is standard code to show the YouTube video
    const videoSrc = `https://www.youtube.com/embed/${this.props.selectedVideo.id.videoId}`;

    return (
      <div>
        <div className="ui embed">
          <iframe title="video player" src={videoSrc} />
        </div>
        <div className="ui segment">
          <h4 className="ui header">
            {this.props.selectedVideo.snippet.title}
          </h4>
          <p>
            {this.props.selectedVideo.snippet.description}
          </p>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;