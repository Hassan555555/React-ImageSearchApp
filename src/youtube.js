import axios from 'axios'

const KEY  = 'AIzaSyDWYs4Drfx8KhfXWHx-ZX4LqnoyoFOfrQ0'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/search',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
})