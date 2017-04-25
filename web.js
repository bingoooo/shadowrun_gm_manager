// Main server file
var express = require('express');
var app = express();
var bodyParser = require('body-parser')

//var sqlite = require('sqlite3');

//Variables
var dbName = "sr5.db";
var logins = [];

//External required files
var controller = require('./controllers/routeController.js');
var model = require('./models/modelSR5.js');

//TODO : WIP Login MiddleWare
var Logged =  (request, response, next) => {
    if(isLogged()){
        console.log('Next');
        next();
    } else {
        response.redirect('/');
    }
}
function isLogged(){
    return true;
}
app.use(Logged);

app.use(bodyParser.urlencoded({
    encoded: true
}));
app.use(bodyParser.json());

/*************************************************************************** */

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

/*************************************************************************** */
//REST API
app.get('/', function(request, response) {
  response.render('pages/index', {username: request.query.username});
});
app.get('/board', (request, response, next)=>{
    controller.getBoard(request, response, next, dbName);
});
app.get('/character', (request, response, next)=>{
    controller.getCharacter();
});
app.get('/metatypes', (request, response, next)=>{
    controller.getMetatypes(request, response, next, dbName);
});
app.get('/users/ids', (request, response, next)=>{
    controller.getUsersByIds(request, response, next, dbName);
});
app.post('/character', (request, response, next)=>{
    controller.postCharacter(request, response, next, dbName);
});
app.get('/characters/ids', (request, response, next)=>{
    model.getCharactersByIds(request, response, next, dbName);
});
app.get('/characters/user', (request, response, next)=>{
    model.getCharactersByUser(request, response, next, dbNme);
});
/*************************************************************************** */

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
