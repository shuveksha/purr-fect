
const express = require('express');
const debug= require('debug');
const morgan = require('morgan');
const path= require('path');
const app = express();
//app.use(express.static(__dirname + "/public/"));
app.use('/images', express.static(__dirname + "/views/" + '/images'));

app.use('/css',express.static(path.join(__dirname,'node_modules/bootstrap/dist/css')));
app.use('/js',express.static(path.join(__dirname,'node_modules/bootstrap/dist/js')));

const PORT = process.env.PORT || 4111;
app.use(morgan('tiny'));
app.get("/",function(request, response){

    response.sendFile( __dirname + "/views/" + "homepage.html" );

});
app.listen(PORT, function(){
    console.log("server started at port "+PORT);

});

