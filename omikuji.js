let username;
let result;
let userresult;
username = prompt('let me know your name');
if (username == ''){
    username = '名無し';
    document.getElementById('name').innerHTML = username;
}
else{
    document.getElementById('name').innerHTML = username;
}
let rand = Math.floor(Math.random()*5);
if (rand == 0){
    userresult = '大吉';
}
if (rand == 1){
    userresult = '小吉';
}
if (rand == 2){
    userresult = '中吉'
}
if (rand == 3){
    userreuslt = '吉'
}
if (rand == 4){
    userresult = '凶';
}
if (username == ''){
    userresult = '名前教えて( ;∀;)'
}
document.getElementById('daikichi').innerHTML = userresult