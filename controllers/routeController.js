var exports = module.exports = {};
var model = require('../models/modelSR5.js');
var requestCheck = require('./requestCheckController.js');

exports.getBoard = (request, response, next, dbName)=>{
    response.render('pages/board', {username: null});
}
exports.getCharacter = (request, response, next, dbName)=>{
    response.render('pages/character', {username: null});
}
exports.getMetatypes = (request, response, next, dbName)=>{
    model.getAllMetatypes(request, response, next, dbName); 
}
exports.getUsersByIds = function(request, response, next, dbName){
    model.getUsersByIds(request, response, next, dbName);
}
exports.getCharacters = function(request, response, next, dbName){
    console.log(request.query);
    response.send('OK');
}
exports.postCharacter = function(request, response, next, dbName){
    console.log(request.query);
    var parameters = request.body;
    console.log("parameters", parameters);
    var datas = {
        characterid: null,
        userid: 0,
        pc: 1,
        name: "",
        metatype: "",
        chance: 0,
        magic: 0,
        resonance: 0,
        priorities: parameters.priorities,
    }
    // TODO: Response Check response
    // Check choices logic

    // Check A column choice
    // Check B column choice
    // Check C column choice
    // Check D column choice
    // Check E column choice

    //Check new creation or update and send datas to correct model function
    if(request.body.type == "update"){
        model.updateCharacter(datas, response, next, dbName);
    } else if (request.body.type == "create"){
        model.createCharacter(datas, response, next, dbName);
    } else {
        response.send("undefined type in posted parameters");
    }
}
