import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          "Client-ID c7f23fd87d1edb26bc59636355d64f0b6de5d0dca495c71beb361af876041137"
      }
});