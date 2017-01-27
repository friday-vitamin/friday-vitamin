function log(type, ...rest) {
  console[type](...rest);
}

module.exports = {
  log: log.bind(null, 'log'),
  warn: log.bind(null, 'warn'),
}
