import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 456d4070e37b39f3e19ce55829470b787d2036454d83337de72c2431af29c5a4'
  }
});
