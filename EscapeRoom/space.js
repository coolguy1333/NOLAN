let player = {
    people: {
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

function saveGame() {
    localStorage.setItem("playerData", JSON.stringify(player));
}

function keyHoleWork(){
    saveGame();
    if (player.things.key) {
    setTimeout(function () {
        window.location.href = "http://127.0.0.1:5500/final-room.html";
    }, 1000);
    }
    else{
        const para = document.getElementById("textBox");
        textBox.style.display = "block";
        textBoxTime();
    }
}

function goBack() {
    saveGame();
    // Delay for 1 seconds (1000 milliseconds)
    // _______________copied from online__________________ // 
    setTimeout(function () {
        window.location.href = "http://127.0.0.1:5500/road.html";
    }, 1000);
    // _________________________________________ // 

}