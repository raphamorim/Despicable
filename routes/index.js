// Routes

exports.index = function(req, res){
  res.render('index', { title: 'Despicable.seed', description: 'using MongoDB, Express, AngularJs, NodeJs'});
};
