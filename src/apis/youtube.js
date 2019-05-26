import axios from 'axios';

// Add API key from YouTube below
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: ''
  }
});