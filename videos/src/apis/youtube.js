import axios from 'axios'

const KEY = 'AIzaSyDQYaUoec9yIdmCdnElGNj80BdYDyLAEDE'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
})