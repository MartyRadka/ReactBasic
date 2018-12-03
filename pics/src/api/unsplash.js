import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 5c3e0f058cd9149dab4285cfc9e301e42c39d9ea95806191d90831edefadd255'
  }
});
