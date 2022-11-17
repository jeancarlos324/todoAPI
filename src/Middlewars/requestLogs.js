const logs = (request, response, next) => {
  console.log(`${request.url} ${request.method}`);
  next();
};

module.exports = logs;
