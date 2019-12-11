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
  github.identity()
    .then((data) => {
      res.set('Content-Type', 'text/html').send(data);
    });
});

module.exports = app;
