let death = 0;
let info = document.createElement('span');
info.style.marginRight = "20px";
document.getElementById('buttons').prepend(info);

let redZone = document.createElement('div');
redZone.style.width = '50px';
redZone.style.height = '500px';
redZone.style.backgroundColor = 'red';

let frame = document.getElementById('viewport');
frame.appendChild(redZone);

document.body.addEventListener('keypress', function (event){

    switch (event.key){
        case "4" :
            goLeft();
            break;
        case "6" :
            goRight();
            break;
        case "8" :
            goTop();
            break;
        case "2" :
            goDown();
            break;
    }
})

function goLeft () {
    let t = parseInt(document.getElementById('kenny').style.left);
    if(t > 50){
        t = t - 10;
        document.getElementById('kenny').style.left = t + 'px';
    }
    else {
        death++;
        alert('Kenny est mort ' + death + " fois");
        document.getElementById('kenny').style.top = '200px';
        document.getElementById('kenny').style.left = '200px';
        info.innerHTML = "nombre de mort : " + death;
    }
}

function goRight (){
    let t = parseInt(document.getElementById('kenny').style.left);
    if(t < 500 - 32){
        t = t + 10;
        document.getElementById('kenny').style.left = t + 'px';
    }
}

function goTop (){
    let t = parseInt(document.getElementById('kenny').style.top);
    if(t > 0){
        t = t - 10;
        document.getElementById('kenny').style.top = t + 'px';
    }
}

function goDown (){
    let t = parseInt(document.getElementById('kenny').style.top);
    if(t < 500 - 32){
        t = t + 10;
        document.getElementById('kenny').style.top = t + 'px';
    }
}

document.getElementById('up').addEventListener('click',goTop);
document.getElementById('down').addEventListener('click',goDown);
document.getElementById('left').addEventListener('click',goLeft);
document.getElementById('right').addEventListener('click',goRight);




