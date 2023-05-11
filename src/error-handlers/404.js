const notFound = (request, response) => {
  response.status(404).send({
    error: 404,
    route: request.baseUrl,
    message: 'Error: Page not found.',
  });
};

module.exports = notFound;