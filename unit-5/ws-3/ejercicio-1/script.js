let hour = 0;
let minute = 0;
let second = 0;
let timer;
let isRunning = false;

window.onload = () => {
    let btnStart = document.getElementById("btn");
    let btnStop = document.getElementById("btn2");
    let btnReset = document.getElementById("btn3");

    btnStart.onclick = startTimer;
    btnStop.onclick = stopTimer;
    btnReset.onclick = resetTimer;
};
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(showTime, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    hour = 0;
    minute = 0;
    second = 0;
    document.getElementById("tiempo").innerHTML = "00:00:00";
}

function showTime() {
    second++;
    if (second == 60) {
        second = 0;
        minute++;
        if (minute == 60) {
            minute = 0;
            hour++;
        }
    }
    document.getElementById("tiempo").innerHTML = addZero(hour) + ":" + addZero(minute) + ":" + addZero(second);
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
