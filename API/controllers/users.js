const User = require('../models/users');

exports.signUp = (req, res, next) => {
  const user = new User(
    req.firstName,
    req.lastName,
    req.password,
    req.email,
    req.address,
    req.isAdmin,
  );
  User.saveUser(user);
  res.status();
};
