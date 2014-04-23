// Routes

exports.index = function(req, res){
  res.render('index', { title: 'Despicable', description: 'This seed use NodeJs, MongoDB, Express, AngularJs and Mongoose'});
};

exports.about = function(req, res){
  res.render('about', { title: 'About', description: 'A mean seed, made with style'});
};

exports.partials = function (req, res) {
  res.render('partials/' + req.params.name);
};
