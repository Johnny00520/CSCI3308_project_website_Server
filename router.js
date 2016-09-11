const Authentication = require('./controllers/authentication');
const NewPost = require('./controllers/posting');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {session: false});

const requireSignIn = passport.authenticate('local', {session: false});

module.exports = function(app) {
  app.get('/', requireAuth, function(req, res, next){
    res.send('hi there');
  })
  app.post('/', requireSignIn, Authentication.signin);
  app.post('/signup', Authentication.signup);

  app.post('/home', NewPost.newpost);
}
