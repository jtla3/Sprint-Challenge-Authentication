const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.models = {};
mongoose.modelSchemas = {};

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/users', { useMongoClient: true });

const UserSchema = Schema({
  // create your user schema here.
  username: {
   type: String,
   unique: true,
   required: true,
  },
 password: {
  type: String,
 },
});

module.exports = mongoose.model('User', UserSchema);
