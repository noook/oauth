const axios = require('axios');
const fs = require('fs');

function auth(code) {
  const { CLIENT_ID: client_id, CLIENT_SECRET: client_secret} = process.env;
  return axios.post('https://github.com/login/oauth/access_token', {
    client_id,
    client_secret,
    code,
  }, {
    headers: { Accept: 'application/json' }
});
}

module.exports = {
  auth,
}