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

const audio = document.getElementById('myAudio');

function saveGame(){
    localStorage.setItem('playerData', JSON.stringify(player));
}

function goBack() {
    saveGame();
    // Delay for 1 seconds (1000 milliseconds)
    // _______________copied from online__________________ // 
    setTimeout(function () {
        window.location.href = "http://127.0.0.1:5500/startingRoom.html";
    }, 1000);
    // _________________________________________ // 

}

function textBoxTime() {
    // _______________copied from online__________________ // 
    setTimeout(function () {
        textBox.style.display = "none"
    }, 4000);
    // _________________________________________ // 
}

async function goOn(){
    saveGame();
    if (player.people.jackBlack) {
        audio.currentTime = 0;
        audio.play();
        // _______________copied from online__________________ // 
    setTimeout(function () {
        window.location.href = "http://127.0.0.1:5500/theRoom.html";
    }, 1600);
    // _________________________________________ //  
    }
    else{
        const para = document.getElementById("textBox");
        textBox.style.display = "block";
        textBoxTime();
    }
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));