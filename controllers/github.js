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
  const url = 'https://github.com/login/oauth/authorize';
  const clientId = '7827991bfb096bc9e001';
  const redirectUri = 'http://localhost:3003/github/callback';
  const state = 'plop';
  const params = `client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&allow_signup=false`;
  console.log(`${url}?${params}`)
  res.redirect(`${url}?${params}`);
});

app.get('/callback', async (req, res, next) => {
  const { code, state } = req.query;
  console.log({ code, state });
  res.send({})
});

module.exports = app;
