console.log('app.js');

var username = localStorage.getItem('username');
console.log(username?username:'no user');
var metatypes = null;
//var metatypes = localStorage.getItem("metatypes");
if(metatypes === null){
    $.get("/metatypes", function(datas){
        metatypes = datas;
        show(copyJson(datas), "console");
        localStorage.setItem('metatypes', datas);
        show(metatypes, 'console');
    });
} else {
    show(metatypes, 'console');
}
function copyJson(json){
    var copy = new json.constructor();
    return copy;
}
function show(values, target){
    if(target === 'console'){
        console.log(values);
    } else {
        $(target).html(values);
    }
}
class character {
    constructor(){
        console.log(arguments);
        this.username = arguments[0];
        this.pc = arguments[1];
        this.name = arguments[2];
        this.metatype = 0;
        this.chance = 0;
        this.magic = 0;
        this.resonance = 0
    }
    get infos(){
        var infos = {
            name: this.name,
            metatype: this.metatype,
            chance: this.chance,
            magic: this.magic,
            resonance: this.resonance
        }
    }
    get initiative(){
        Math.random();
    }
}