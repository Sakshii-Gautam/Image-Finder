import axios from 'axios';

//axios.create method creates an instance of axios client with some default properties
export default axios.create({
  baseURL: 'https://api.unsplash.com/',

  headers: {
    Authorization: 'Client-ID VBAQDRgiOOLhEbPyjKmQJauVqZyHkrpOHNJf4QeXTIM',
  },
});
