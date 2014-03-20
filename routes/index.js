// Routes

exports.index = function(req, res){
  res.render('index', { title: 'Despicable', description: 'This seed use NodeJs, MongoDB, Express, AngularJs and Mongoose'});
};

exports.about = function(req, res){
  res.render('about', { title: 'About Descpicable', description: 'A mean seed, made with style'});
};
