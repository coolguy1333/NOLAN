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
    if(player.things.rightSideRoad == "true"){
        document.getElementById("fredCar").style.transform = "scaleX(-1)";
        carDistanceSide = 1260;        
        document.getElementById("fredCar").style.marginLeft = String(carDistanceSide) + "px";
        carDistanceUp = 450;
        document.getElementById("fredCar").style.marginTop = String(carDistanceUp) + "px";
        console.log("right road")
        saveGame()
    }
    if(player.things.rightSideRoad == "false"){
        carDistanceSide = 0;
        document.getElementById("fredCar").style.transform = "scaleX(1)";
        carDistanceSide = 0; 
        document.getElementById("fredCar").style.marginLeft = String(carDistanceSide);
        carDistanceUp = 450;
        document.getElementById("fredCar").style.marginTop = String(carDistanceUp);  
        console.log("not right road")      
        saveGame()
    }
  });
console.log(player.things.rightSideRoad)

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        saveGame()
        carDistanceSide += 5;
        document.getElementById("fredCar").style.transform = "scaleX(1)";
        document.getElementById("fredCar").style.marginLeft = carDistanceSide + "px";
        if(carDistanceSide >= 1270){
            saveGame()
            player.things.rightSideRoad = "true";
            saveGame()
            window.location.href = "http://127.0.0.1:5500/cave.html";
        }
    }
    if (event.key === "ArrowLeft") {
        saveGame()
        carDistanceSide -= 5;
        document.getElementById("fredCar").style.transform = "scaleX(-1)";
        document.getElementById("fredCar").style.marginLeft = carDistanceSide + "px";
        if(carDistanceSide <= -1){
            saveGame()
            player.things.rightSideRoad = "false";
            saveGame()
            window.location.href = "http://127.0.0.1:5500/tv-room.html";
        }
    }
    if (event.key === "ArrowRight" && event.shiftKey) {
        saveGame()
        carDistanceSide += 15;
        document.getElementById("fredCar").style.transform = "scaleX(1)";
        document.getElementById("fredCar").style.marginLeft = carDistanceSide + "px";
        if(carDistanceSide >= 1270){
            saveGame()
            player.things.rightSideRoad = "true";
            saveGame()
            window.location.href = "http://127.0.0.1:5500/cave.html";
        }
    }
    if (event.key === "ArrowLeft" && event.shiftKey) {
        saveGame()
        carDistanceSide -= 15;
        document.getElementById("fredCar").style.transform = "scaleX(-1)";
        document.getElementById("fredCar").style.marginLeft = carDistanceSide + "px";
        if(carDistanceSide <= -1){
            saveGame()
            player.things.rightSideRoad = "false";
            saveGame()
            window.location.href = "http://127.0.0.1:5500/tv-room.html";
        }
    }
    // ----------------------------------------------------------UP --------------------------------------------------------------//
    if (event.key === "ArrowUp") {
        saveGame()
        carDistanceUp -= 5;
        const element = document.getElementById("fredCar");
        element.src = "./images/fredRocket.jpg"; 
        document.getElementById("fredCar").style.marginTop = carDistanceUp + "px";
        console.log(carDistanceUp)
        if(carDistanceUp <= -150){
            window.location.href = "http://127.0.0.1:5500/space.html";
        }
    }

    if (event.key === "ArrowDown") {
        saveGame()
        carDistanceUp += 5;
        document.getElementById("fredCar").style.marginTop = carDistanceUp + "px";
    }
    
    if (event.key === "ArrowDown" && event.shiftKey) {
        saveGame()
        carDistanceUp += 15;
        document.getElementById("fredCar").style.marginLeft = carDistanceSide + "px";
    }
});