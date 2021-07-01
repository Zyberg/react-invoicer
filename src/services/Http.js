import axios from 'axios';

axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/';

export default {
  async get(url, config = {}) {
    return this.send('get', url, {}, config);
  },

  async post(url, data = {}, config = {}) {
    return this.send('post', url, data, config);
  },

  async put(url, data = {}, config = {}) {
    return this.send('put', url, data, config);
  },

  async patch(url, data = {}, config = {}) {
    return this.send('patch', url, data, config);
  },

  async delete(url, data = {}, config = {}) {
    return this.send('delete', url, data, config);
  },

  async send(method, url, data = {}, config = {}) {
    const response = await axios({ method, url, data, ...config });
    return response.data;
  },
};