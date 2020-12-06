import axios from 'axios'

export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 2HOR8zWrA-7hkOdM85RAb7o_c-NK03Umn-J--c0h6E8'
  }
})