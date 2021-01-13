var minu = 0;
var seco = 0;
var msec = 0;
var gettingMinu = document.getElementById("minu");
var gettingSeco = document.getElementById("seco");
var gettingMsec = document.getElementById("msec");
var interval;

function timer(){
    msec++
    gettingMsec.innerHTML = msec;
    if(msec >= 100){
        seco++
        gettingSeco.innerHTML = seco;
        msec = 0;
    }else if(seco >=60){
        minu++
        gettingMinu.innerHTML = minu;
        seco = 0;
    }
}

function start(){
    interval = setInterval(timer,10)
}

function stop(){
    clearInterval(interval)
}

function reset(){
    minu = 0;
    seco = 0;
    msec = 0;
    gettingMinu.innerHTML = minu;
    gettingSeco.innerHTML = seco;
    gettingMsec.innerHTML = msec;
    clearInterval(interval)
}


function DisableNextButton(btnId) {
    document.getElementById(btnId).disabled = 'true';
}