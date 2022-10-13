const asyncWrapper = (fn) => {
  // for saving me try...catch every time.
  //  It eliminates try and catch for every single controller
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

module.exports = asyncWrapper;
