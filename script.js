document.getElementById('up').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.top);
    if(t > 0){
        t = t - 10;
        document.getElementById('kenny').style.top = t + 'px';
    }
});

document.getElementById('down').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.top);
    if(t < 500 - 32){
        t = t + 10;
        document.getElementById('kenny').style.top = t + 'px';
    }
});

document.getElementById('left').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.left);
    if(t > 50){
        t = t - 10;
        document.getElementById('kenny').style.left = t + 'px';
    }
    else {
        document.getElementById('kenny').style.top =
        alert('Kenny est mort');
    }
});

document.getElementById('right').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.left);
    if(t < 500 - 32){
        t = t + 10;
        document.getElementById('kenny').style.left = t + 'px';
    }
});

let redZone = document.createElement('div');
redZone.style.width = '50px';
redZone.style.height = '500px';
redZone.style.backgroundColor = 'red';

let frame = document.getElementById('viewport');
frame.appendChild(redZone);

// if Kenny est mort => alert();
// display count death

