const jwt = require("jsonwebtoken");

const asyncWrapper = require("../middleware/async");
const AppError = require("../utils/error");

const auth = asyncWrapper((req, res, next) => {
  // Check header from incoming request in the frontend
  const authHeader = req.headers.authorization;
  // if headers is not found or headers did not start with "Bearer " , throw error.
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(new AppError(401, "You are not authorized to do that"));
  }

  const token = authHeader.split(" ")[1];

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    return next(new AppError(401, "Invalid token or session has expired"));
  }
});

module.exports = auth;
