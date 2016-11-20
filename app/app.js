var express = require('express');

var app = express();

app.set('port',3000);

app.use(express.static('app/public'))
app.use(require('./routes/user'));

// app.get('/',function(req,res){
//   res.send('Haai');
// });
//
// app.get('/user',function(req,res){
//   res.send('User Name');
// });

var server = app.listen('3000',function(){
  console.log('Server is started');
})
