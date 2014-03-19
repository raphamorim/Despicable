// Routes

exports.index = function(req, res){
  res.render('index', { title: 'MEAN.seed', description: 'using MongoDB, Express, AngularJs, NodeJs'});
};
