const axios = require('axios');

function identity() {
  return axios.get('https://github.com/login/oauth/authorize')
    .then(({ data }) => {
      console.log(data);
    })
    .catch(console.log);
}

module.exports = {
  identity,
}