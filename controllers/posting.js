const NewPost = require('../models/drive_list');

exports.newpost = function(req, res, next){
  const category = req.body.category;
  const name = req.body.name;
  const phone = req.body.phone;
  const information = req.body.information;

  if(!category || !name || !phone || !information) {
    return res.status(422).send({error: "You must provide all fields"});
  }

  const post = new NewPost({
    category: category,
    name: name,
    phone: phone,
    information: information
  });

  post.save(function(err){
    if(err) {
      return next(err);
    }
    res.json({sucess: "true"});
  });
}
