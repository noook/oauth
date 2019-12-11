module.exports = {
  main: {
    route: '/github',
    controller: require('./github'),
  },
  session: {
    route: '',
    controller: require('./session'),
  },
};
