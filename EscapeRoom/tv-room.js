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

window.addEventListener("load", (event) => {
    if(player.things.news == false){
        document.getElementById("goOnButton").hidden = true;
        document.getElementById("tvButton").hidden = false;
    }
    console.log(player.things.news)
  });

if(player.things.news){
    document.getElementById("tvButton").hidden = true;
    document.getElementById("goOnButton").hidden = false;
}

function saveGame() {
    localStorage.setItem("playerData", JSON.stringify(player));
}

function goToNews() {
    saveGame();
    console.log(player.things.news)
    // _______________copied from online__________________ // 
    setTimeout(function () {
        window.location.href = "news.html";
    }, 1000);
    // _________________________________________ // 

}

function goOnToFred() {
    saveGame();
    // _______________copied from online__________________ // 
    setTimeout(function () {
        window.location.href = "road.html";
    }, 1000);
    // _________________________________________ // 

}
