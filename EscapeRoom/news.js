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

window.addEventListener("load", (event) => {
    document.getElementById("grug-news").hidden = true;

  });

  setTimeout(() => {
    document.getElementById("grug-news").hidden = false;
    document.body.style.backgroundImage = "url('./images/tv.png')";
  }, 1500);

  setTimeout(() => {
    saveGame();
    player.things.news = true;
    // _______________copied from online__________________ // 
    setTimeout(function () {
        player.things.news = true;
        saveGame()
        window.location.href = "http://127.0.0.1:5500/tv-room.html";
    }, 21000);
})
    // _________________________________________ //