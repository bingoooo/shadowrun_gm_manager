console.log('index.js');

if(username!=null && username!=""){
    window.location.replace('/board');
}

function login(){
    console.log($('#username').val(), $('#password').val());
    if($('#username').val()!==""){
        localStorage.setItem('username', $('#username').val());
        window.location.replace('/board');
    } else {
        console.log("Pas d'utilisateur défini");
    }
}