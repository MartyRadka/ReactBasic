import axios from 'axios';

const KEY = 'AIzaSyBOobPBRwdszxcI6EBQ6NvendyLYKoKPCw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet', // send us the summary of snippet video that give us the infosabout the video
    maxResults: 5,
    key: KEY
  }
});
