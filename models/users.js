const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define the model
const userSchema = new Schema({
  username: {type: String, unique: true, lowercase: true},
  password: String
});

// On Save Hook, encrypt password
// Before saving a model, this function will run
userSchema.pre('save', function(next){
  // get access to the user model
  const user = this;
  // generate a salt then run callback
  bcrypt.genSalt(10, function(err, salt){
    if(err) {
      return next(err);
    }
    // hash password using the salt
    bcrypt.hash(user.password, salt, null, function(err, hash){
      if(err) {
        return next(err);
      }
      // overwrite plain text password with encrpyted password
      user.password = hash;
      // now save the model
      next();
    });
  });
});

// Create the model class
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;
