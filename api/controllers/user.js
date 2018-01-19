const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  // there should be a user object set on req
  // use that req.user object to create a user and save it to our Mongo instance.
  const { username, password } = req.body
  const user = new User({ username, password });
  user.save((err,user) => {
    if (err) return res.send(err);
    res.json({
      success: 'User saved',
      user
    });
  });
};

module.exports = {
  createUser
};
