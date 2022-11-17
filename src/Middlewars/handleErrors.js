const handleError = (error, request, response, next) => {
  const { status, errorContent, message } = error;

  response.status(status).json({
    message,
    error: errorContent.message,
  });
};

module.exports = handleError;
