const errorHandlerMiddleware = (err, req, res, next) => {
  // Error relating to mongoose and mongdb are entering mongoose directly, thus handling the error here
  // Dealing with mongoose Errors here
  let customError = {
    // set default
    status: err.status || "error",
    statusCode: err.statusCode || 500,
    msg: err.message || "Something went wrong, try again later",
  };

  if (err.name === "ValidationError") {
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
    customError.statusCode = 400;
    customError.status = "fail";
  }

  if (err.code && err.code === 11000) {
    customError.msg = `This  ${Object.keys(
      err.keyValue
    )} already exists, please choose another value`;
    customError.statusCode = 400;
    customError.status = "fail";
  }

  if (err.name === "CastError") {
    customError.msg = `No item found with id ${err.value}`;
    customError.statusCode = 404;
    customError.status = "fail";
  }

  return res.status(customError.statusCode).json({
    status: customError.status,
    statusCode: customError.statusCode,
    message: customError.msg,
  });
};

module.exports = errorHandlerMiddleware;
