const Result = require("./result");

function errorHandler(res, error) {
  const status = error.status || 500;
  const message = error.message || "Erreur serveur interne";

  switch (status) {
    case 404:
      return Result.notFound(res, message);
    default:
      return Result.error(res, message); 
  }
}

module.exports = errorHandler;