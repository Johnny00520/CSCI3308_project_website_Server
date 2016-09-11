const Authentication = require('./controllers/authentication');
const NewPost = require('./controllers/posting');

module.exports = function(app) {
  app.post('/signup', Authentication.signup);
  
  app.post('/home', NewPost.newpost);
}
