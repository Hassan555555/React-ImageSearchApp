import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID mrgcBokM-yChKGj5xK6gNUhkBYY28vf-vZcfGakA9zY'
      }
})
