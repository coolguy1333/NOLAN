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

function tvRoomButton(){
  saveGame();
  setTimeout(function() {
      window.location.href = "http://127.0.0.1:5500/tv-room.html";
    }, 1000);
}

window.addEventListener("load", (event) => {
    const myElement = document.getElementById('jami');
    document.getElementById("tvRoomButton").hidden = true;
    document.getElementById("grug").hidden = true;
    myElement.style.transform = ("scale(4.5)");
    const audio = document.getElementById('myAudio');
    audio.currentTime = 0;
    audio.play();
  });

// _______________copied from online__________________ // 

// SetTimeout(() => {} was copied from the Web

setTimeout(() => {
  const audio1 = document.getElementById('myAudio1');
  audio1.currentTime = 0;
  audio1.play();
}, 18000);

setTimeout(() => {
  document.getElementById("grug").hidden = false;
  const audio2 = document.getElementById('horn');
  audio2.currentTime = 0;
  audio2.play();
}, 26000);

setTimeout(() => {
  document.getElementById("grug").hidden = true;
}, 28500);

setTimeout(() => {
  document.getElementById("tvRoomButton").hidden = false;
  document.getElementById("jami").style.marginLeft = "525px";
}, 30000);
// _________________________________________ // 
