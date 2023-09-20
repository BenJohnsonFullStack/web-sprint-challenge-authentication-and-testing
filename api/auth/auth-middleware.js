const User = require("../users/users-model");

const registerValidation = async (req, res, next) => {
  const { username, password } = req.body;
  if (username === undefined || password === undefined) {
    next({ status: 422, message: "username and password required" });
  } else {
    const existingUser = await User.getBy({ username });
    if (existingUser.length !== 0) {
      next({ status: 422, message: "username taken" });
    } else {
      next();
    }
  }
};

module.exports = {
  registerValidation,
};
