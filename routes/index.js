"use strict";
var util = require('util');
var main = require('./main');
module.exports = function (app) {
  app.get('/', main.cats,main.recentpost,main.recentcomment,function(req, res){
    res.render('index.ejs', 
        { title: 'My Blog Page',
          categories:req.cats,
          recentposts:req.recentposts,
          recentcomments:req.recentcomments});
  });
  require('./blog')(app);  
  require('./user')(app);  

  
};



