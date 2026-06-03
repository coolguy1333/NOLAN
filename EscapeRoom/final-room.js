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

let grugHealth = 3;
let grugAlive = true;
           

function saveGame() {
    localStorage.setItem("playerData", JSON.stringify(player));
}

function changeMargin() {
    document.getElementById("grug-final").style.height = "300px";
    document.getElementById("grug-final").style.width = "200px";
    document.getElementById("grug-final").style.marginLeft = "650px";
}

// while (grugAlive){
//     setTimeout(function () {
//         if(grugHealth == 2){
//             grugHealth = grugHealth +1 ;
//             const elementGrug = document.getElementById("healthBar");
//             elementGrug.src = "/images/3-3Health.png";
//         }
//         else if(grugHealth == 1){
//             grugHealth = grugHealth +1 ;
//             grugAlive = false;
//             const elementGrug = document.getElementById("healthBar");
//             elementGrug.src = "/images/2-3Health.png";
//         }
//     }, 10000);
// }

function atack(){
    saveGame();
    document.getElementById("grug-final").style.height = "750px";
    document.getElementById("grug-final").style.width = "1600px";
    document.getElementById("grug-final").style.marginLeft = "0px";
    const element = document.getElementById("grug-final");
    element.src = "./images/grugLemon.gif"; 
    setTimeout(function () {
        if(grugHealth == 3){
            grugHealth = grugHealth -1 ;
            const elementGrug = document.getElementById("healthBar");
            elementGrug.src = "./images/2-3Health.png";
        }
        else if(grugHealth == 2){
            grugHealth = grugHealth -1 ;
            const elementGrug = document.getElementById("healthBar");
            elementGrug.src = "./images/1-3Health.png";
        }
        else if(grugHealth == 1){
            grugHealth = grugHealth -1 ;
            grugAlive = false;
            const element = document.getElementById("grug-final");
            element.src = "./images/grugDeath.gif"; 
            const elementGrug = document.getElementById("healthBar");
            elementGrug.src = "./images/0-3Health.png";
            setTimeout(function () {
                const element = document.getElementById("grug-final");
                element.src = "./images/grugDeath.gif"; 
                changeMargin();
            }, 0);
            setTimeout(function () {
                document.getElementById("grug-final").hidden = true;                
                document.getElementById("healthBar").hidden = true;  
                const para = document.getElementById("restartButton");
                const parag = document.getElementById("youWin");
                youWin.style.display = "block";
                restartButton.style.display = "block";             
       
            }, 2400);
        }
        const element = document.getElementById("grug-final");
        element.src = "./images/grugg.jpg"; 
        changeMargin();
    }, 4000);
}

function restart(){
    setTimeout(function () {
        window.location.href = "http://127.0.0.1:5500/index.html";
    }, 1600);
}