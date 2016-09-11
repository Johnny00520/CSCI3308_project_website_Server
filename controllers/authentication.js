const jwt = require('jwt-simple');
const config = require('../config');
const User = require('../models/users');

function tokenForUser(user) {
  // sub is subject, which is user's id - iat (issued at time) both metods of jwt
  const timestamp = new Date().getTime();
  return jwt.encode({sub: user.id, iat: timestamp}, config.secret);
}

exports.signup = function(req, res, next){
  // See if a user with the given email exists
  const username = req.body.username;
  const password = req.body.password;

  if(!username || !password) {
    return res.status(422).send({error: "You must provide a username and password"});
  }

  // If a user with email does exist, return an error
  User.findOne({username: username}, function(err, existingUser){
    if(err) {
      return next(err);
    }
    if(existingUser) {
      return res.status(422).send({error: 'Username in use'});
    }
    // If a user with email does NOT exist, create and save user record
    const user = new User({
      username: username,
      password: password
    });

    user.save(function(err) {
      if(err) {
        return next(err);
      }
      // Respond to request, saying the user was created.
      res.json({token: tokenForUser(user)});
    });
  });
}
