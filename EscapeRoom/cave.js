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

function saveGame(){
    localStorage.setItem('playerData', JSON.stringify(player));
}

function goBack() {
    saveGame();
    setTimeout(function () {
        window.location.href = "http://127.0.0.1:5500/road.html";
    }, 1000);

}

function goOn(){
    saveGame();
    setTimeout(function () {
        window.location.href = "http://127.0.0.1:5500/inCave.html";
    }, 1600);
}

window.addEventListener("load", (event) => {
    console.log(player.things.rightSideRoad)
  });