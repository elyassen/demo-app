function logger(req, res, next) {
  console.log("log in from another file");
  next();
}

function auth(req, res, next) {
  console.log("Authenticated");
  next();
}

module.exports = { logger, auth };
