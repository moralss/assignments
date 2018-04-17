var SessionTime = 1500;
var breakTime = 0000;
var SessionInterval;
var breakInterval;

updateClockDisplay("SessionOutput", SessionTime);
updateClockDisplay("breakOutput", breakTime);
styleElement(["completeSession"], "hidden");

function addSessionBreakTime() {
    breakTime += 60;
    updateClockDisplay("breakOutput", breakTime);
}

function addSessionTime() {
    SessionTime += 60;
    updateClockDisplay("SessionOutput", SessionTime);
};

function subtactSessionTime() {
    if (SessionTime >= 1) {
        SessionTime -= 60;
        updateClockDisplay("SessionOutput", SessionTime);
    };
};


function subtactBreakTime() {
    if (breakTime >= 1) {
        breakTime -= 60;
        updateClockDisplay("breakOutput", breakTime);
    };
};

function resetPomodroClock() {
    location.reload();
}

function BreakDecreaseTimer() {
    breakTime--;
    if (breakTime <= 0) {
        clearInterval(breakInterval);
        styleElement(["completeSession"], "visible");
        styleElement(["breakOutput", "BreakTimeLabel"], "hidden");
    };

    updateClockDisplay("breakOutput", breakTime);
}

function SessionDecreaseTimer() {
    SessionTime--;
    if (SessionTime <= 0) {
        clearInterval(SessionInterval);
        breakInterval = setInterval(BreakDecreaseTimer, 1000);
        styleElement(["SessionOutput", "SessionTimeLabel"], "hidden");
        styleElement(["breakOutput", "BreakTimeLabel"], "visible");
    };

    updateClockDisplay("SessionOutput", SessionTime);
}

function styleElement(array, action) {
    return array.forEach(element => document.getElementById(element).style.visibility = action);
}

function hiddenElement() {
    styleElement(["BreakTimeLabel", "SessionTimeLabel"], "hidden");
}

function startCountDown() {

    styleElement(["subtractBreak", "setSession", "setBreak", "SubtractSession", "addSession", "addBreak", "breakOutput"], "hidden");
    styleElement(["SessionTimeLabel"], 'visible');
    SessionInterval = setInterval(SessionDecreaseTimer, 1000);
    
};

function updateClockDisplay(display, counter) {
    var minutes = Math.floor(counter / 60);
    var seconds = counter % 60;
    var formattedSeconds = seconds >= 10 ? seconds : "0" + seconds;
    document.getElementById(display).innerHTML = minutes + ":" + formattedSeconds;
};








