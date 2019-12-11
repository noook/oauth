const db = require('../db/connection');

const insertIfNotExist = (params) => {
  return db('city')
    .orWhere(params)
    .then(rows => {
      if (!rows.length) {
        return db('city')
          .insert(params)
          .catch(console.error)
      }
    })
    .catch(console.error);
}

const cities = () => {
  return db('city');
}

const newPollutionRecord = (obj) => {
  return db('pollution_record')
    .insert(obj)
    .catch(console.error);
};

module.exports = {
  insertIfNotExist,
  cities,
  newPollutionRecord,
};
