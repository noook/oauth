const
	axios = require('axios'),
	token = process.env.AQICN_TOKEN,
	express = require('express'),
	github = require('../utils/github')
	app = express.Router();

const baseURL = 'https://api.waqi.info';
const api = axios.create({
	baseURL,
});

app.get('/identity', async (req, res, next) => {
  const { CLIENT_ID, STATE, REDIRECT_URI} = process.env;
  const url = 'https://github.com/login/oauth/authorize';
  const params = `client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=${STATE}&allow_signup=false`;
  res.redirect(`${url}?${params}`);
});

app.get('/callback', async (req, res, next) => {
  const { code, state } = req.query;
  github.auth(code)
    .then(({ data }) => {
      const { access_token, token_type, scope } = data;
      res.send({ access_token, token_type, scope });
    })
    .catch(() => res.status(400).send({}));
});

module.exports = app;
