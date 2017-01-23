var express = require('express');
var app = express();
var router = require(process.cwd()+'/routes/routes.js');
var logger = require('morgan')

app.use(logger('dev'));
app.use('/public',express.static(process.cwd() + '/public'));
//added more stuff
var port = process.env.PORT || 8080;

router(app);

app.listen(port, function(){
    console.log('listening on port %d',port);
});
