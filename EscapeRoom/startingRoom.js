let player = {
    "people": {
        jackBlack: false
    },
    things: {
        news: false,
        rightSideRoad: "false",
        key: false  
    }
};

let storedData = localStorage.getItem("playerData");
if (storedData) {
    player = JSON.parse(storedData);
}

function saveGame(){
    localStorage.setItem('playerData', JSON.stringify(player));
}

function delayedRedirect() {
    saveGame();
    // _______________copied from online__________________ // 
    setTimeout(function () {
        window.location.href = "http://127.0.0.1:5500/hallway1.html";
    }, 1000);
    // _________________________________________ // 

}

function goUpstairs() {
    saveGame();
    // _______________copied from online__________________ // 
    setTimeout(function () {
        window.location.href = "http://127.0.0.1:5500/upstairs.html";
    }, 1000);
    // _________________________________________ // 

}