
var express = require('express');

var route = express.Router();

route.get('/users',function(req,res){
  res.send('goods');
});

module.exports = route;
