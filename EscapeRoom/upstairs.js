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

const audio = document.getElementById('myAudio');
document.getElementById("jackBlackImg").hidden = false;

audio.currentTime = 0;
audio.loop = true;
audio.play();

if(player.people.jackBlack){
    document.getElementById("jackBlackImg").hidden = true;
    changeMargin()
    stopAudio()

}

function changeMargin() {
    document.getElementById("jackBlackButton").style.marginLeft = "500px";
    document.getElementById("goBackButton").style.marginLeft = "500px";
    document.getElementById("jackBlackButton").style.marginTop = "600px";
    document.getElementById("goBackButton").style.marginTop = "600px";
}

function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
}

function saveGame() {
    localStorage.setItem("playerData", JSON.stringify(player));
}

function goBack() {
    saveGame();
    // _______________copied from online__________________ // 
    setTimeout(function () {
        window.location.href = "startingRoom.html";
    }, 1000);
    // _________________________________________ // 
}

function takeJackBlack() {
    stopAudio()
    changeMargin()
    document.getElementById("jackBlackImg").hidden = true;
    player.people.jackBlack = true;
    saveGame();
}