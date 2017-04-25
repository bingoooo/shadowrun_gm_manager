var sqlite = require('sqlite3');

var exports = module.exports = {};

exports.getUsersByIds = function(request, response, next, dbName){
    var query = "SELECT rowid as id, * FROM users WHERE id in (" + request.query.ids + ")";
    var db = new sqlite.Database(dbName);
    db.all(query, function(error, rows){
        response.send(rows);
    });
    db.close();
}
exports.getAllMetatypes = function(request, response, next, dbName){
    var query = "SELECT name FROM metatypes ORDER BY rowid";
    var db = new sqlite.Database(dbName);
    db.all(query, function(error, rows){
        response.send(rows);
    });
    db.close();
}
exports.createCharacter = (datas, response, next, dbName)=>{
    console.log(datas);
    /*
    var query = "INSERT INTO characters "
    + "(userid, pc, name, karma, metatype, chance, magic, resonance)";
    query += " VALUES (" + request.body.stats + ")";
    console.log(query);
    var db = new sqlite.Database(dbName);
    db.run(query);
    db.close();
    */
    response.send(datas);
}
exports.updateCharacter = (datas, response, next, dbName)=>{
    console.log(datas);
    response.send(datas);
}
exports.getCharactersByIds = (request, response, next, dbName)=>{
    var query = "SELECT rowid as id, * FROM characters WHERE id in (" + request.query.ids + ")";
    var db = new sqlite.Database(dbName);
    db.all(query, function(error, rows){
        response.send(rows);
    });
    db.close();
}