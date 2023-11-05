const handleError = (err, req, res, next) => {
  console.log('err', err);
  const status = err.status || 500;
  res.status(status).send({ status: 'error', error: err.message });
};

module.exports = handleError;
