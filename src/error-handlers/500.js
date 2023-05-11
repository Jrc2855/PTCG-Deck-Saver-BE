const errorHandler = (error, request, response) => {
  response.status(500).send({
    error: 500,
    route: request.path,
    query: request.query,
    body: request.body,
    message: typeof(error) === 'string' ? error : `ERROR: ${error.message}`,
  });
};

module.exports = errorHandler;