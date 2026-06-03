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


function saveGame(){
  localStorage.setItem('playerData', JSON.stringify(player));
}

function delayedRedirect() {
  saveGame();
    // _______________copied from online__________________ // 
    setTimeout(function () {
      window.location.href = "http://127.0.0.1:5500/startingRoom.html";
  }, 1000);
  // _________________________________________ // 
}