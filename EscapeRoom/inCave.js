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
if(storedData){
    player = JSON.parse(storedData);
}

if(player.things.key){
    document.getElementById("takeKeyButton").hidden = true;
}

function saveGame(){
    localStorage.setItem('playerData', JSON.stringify(player));
}

function textBoxTime() {
    setTimeout(function () {
        key.style.display = "none"
        textBox.style.display = "block"
    }, 4000);
}

function takeKey(){
    player.things.key = true;
    const para = document.getElementById("textBox");
    textBox.style.display = "none";
    key.style.display = "block";
    textBoxTime();
    document.getElementById("takeKeyButton").hidden = true;
    saveGame();
}

function goBackToFront() {
    saveGame();
    setTimeout(function () {
        window.location.href = "http://127.0.0.1:5500/cave.html";
    }, 1000);
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));