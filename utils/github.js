const axios = require('axios');
const fs = require('fs');

function identity() {
  return axios.get('https://github.com/login/oauth/authorize', {
    params: {
      client_id: '7827991bfb096bc9e001',
      redirect_uri: 'http://localhost:3003/callback',
      state: 'plop',

    }
  })
    .then(({ data }) => data)
    .catch(console.log);
}

module.exports = {
  identity,
}