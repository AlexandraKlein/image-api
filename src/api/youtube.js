import axios from 'axios';

const KEY = 'AIzaSyDSIZ0_V9gUYR8l-4W7tvmihmasBK869Bg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});


