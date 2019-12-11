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

app.post('/session', async (req, res, next) => {
  console.log(req.body);
});

module.exports = app;
