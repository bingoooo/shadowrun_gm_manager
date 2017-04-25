console.log('board.js');

var charactersList = [];
//charactersList[0] = new character(username, 1);
//console.log(charactersList);
function addCharacter(){
    var name = $('#nom').val();
    var initiative = $('#ini').val();
    var monitorMax = $('#mon').val();
    console.log('Adding a character');
    charactersList[charactersList.length] = new character(username, 1, name, initiative, monitorMax);
    console.log(charactersList);
}

function showDebug(){
    //console.log("debug", metatypes);
    $.post("/character", {type: "create", priorities: [1,2,3,4,5]}, function(datas){
        console.log(datas);
    })
}