var guessWords;
var solutionWords;
var wordleWord;
fetch('./guess_words.txt')
  .then(response => response.text())
  .then(data => {
    guessWords = data.split("\r\n")
  })
fetch('./solution_words.txt')
  .then(response => response.text())
  .then(data => {
    solutionWords = data.split("\r\n");
    wordleWord = solutionWords[Math.floor(Math.random() * solutionWords.length)];
  })

/* Variables */
let guessNumber = 1;
let currentGuess = [];

/* Helper functions */
function letterClicked(letter){
  if(currentGuess.length < 5){
    currentGuess.push(letter);
    updateHint();
  }
}

function deleteClicked(){
  if(currentGuess.length > 0){
    currentGuess.pop();
    updateHint();
  }
}

function submitGuess(){
  //guess must be 5 letters
  if(currentGuess.length != 5){
    return;
  }

  //guess must exist in the guessWords list
  let currentGuessString = "";
  for(let i = 0; i < currentGuess.length; i++){
    currentGuessString = currentGuessString + currentGuess[i];
  }
  currentGuessString = currentGuessString.toLowerCase();
  if(guessWords.includes(currentGuessString) != true){
    return;
  }

  //color letters correctly
  for(let i = 0; i < currentGuessString.length; i++){
    let found = false;
    if(currentGuessString[i] == wordleWord[i]){
      //perfect match, green
      document.getElementById(`guess${guessNumber}letter${i + 1}`).style.backgroundColor = "green";
      document.getElementById(`guess${guessNumber}letter${i + 1}`).style.color = "white";
      found = true;
    }
    else if(wordleWord.includes(currentGuessString[i])){
      //not a perfect match, but IS in the word, yellow
      document.getElementById(`guess${guessNumber}letter${i + 1}`).style.backgroundColor = "yellow";
      found = true;
    }
    // color the keyboard green for letters that ARE in the word
    if(found){
      document.getElementById(currentGuessString[i].toUpperCase()).style.backgroundColor = "green";
      document.getElementById(currentGuessString[i].toUpperCase()).style.color = "white";
    }
    // color the keyboard dark gray for letters that are NOT in the word
    else{
      document.getElementById(currentGuessString[i].toUpperCase()).style.backgroundColor = "gray";
      document.getElementById(currentGuessString[i].toUpperCase()).style.color = "white";
    }
  }
  currentGuess = [];
  guessNumber++;
  if(guessNumber == 7){
    gameEnd();
  }
}

function updateHint(){
  document.getElementById(`guess${guessNumber}letter1`).textContent = "";
  document.getElementById(`guess${guessNumber}letter2`).textContent = "";
  document.getElementById(`guess${guessNumber}letter3`).textContent = "";
  document.getElementById(`guess${guessNumber}letter4`).textContent = "";
  document.getElementById(`guess${guessNumber}letter5`).textContent = "";
  /* run through each letter in currentGuess */
  /* i stands for the current index the code is looking at */
  for(let i = 0; i < currentGuess.length; i++){
    document.getElementById(`guess${guessNumber}letter${i + 1}`).textContent = currentGuess[i];
  }
}

function gameEnd(){
  document.getElementById("solution").textContent = wordleWord;
  document.getElementById("solution").style.display = "block";
  document.getElementById("resetButton").style.display = "block";
}

function resetGame(){
  // new random word
  wordleWord = solutionWords[Math.floor(Math.random() * solutionWords.length)];

  // reset the keyboard colors
  document.getElementById("A").style.backgroundColor = "white";
  document.getElementById("A").style.color = "black";
  document.getElementById("B").style.backgroundColor = "white";
  document.getElementById("B").style.color = "black";
  document.getElementById("C").style.backgroundColor = "white";
  document.getElementById("C").style.color = "black";
  document.getElementById("D").style.backgroundColor = "white";
  document.getElementById("D").style.color = "black";
  document.getElementById("E").style.backgroundColor = "white";
  document.getElementById("E").style.color = "black";
  document.getElementById("F").style.backgroundColor = "white";
  document.getElementById("F").style.color = "black";
  document.getElementById("G").style.backgroundColor = "white";
  document.getElementById("G").style.color = "black";
  document.getElementById("H").style.backgroundColor = "white";
  document.getElementById("H").style.color = "black";
  document.getElementById("I").style.backgroundColor = "white";
  document.getElementById("I").style.color = "black";
  document.getElementById("J").style.backgroundColor = "white";
  document.getElementById("J").style.color = "black";
  document.getElementById("K").style.backgroundColor = "white";
  document.getElementById("K").style.color = "black";
  document.getElementById("L").style.backgroundColor = "white";
  document.getElementById("L").style.color = "black";
  document.getElementById("M").style.backgroundColor = "white";
  document.getElementById("M").style.color = "black";
  document.getElementById("N").style.backgroundColor = "white";
  document.getElementById("N").style.color = "black";
  document.getElementById("O").style.backgroundColor = "white";
  document.getElementById("O").style.color = "black";
  document.getElementById("P").style.backgroundColor = "white";
  document.getElementById("P").style.color = "black";
  document.getElementById("Q").style.backgroundColor = "white";
  document.getElementById("Q").style.color = "black";
  document.getElementById("R").style.backgroundColor = "white";
  document.getElementById("R").style.color = "black";
  document.getElementById("S").style.backgroundColor = "white";
  document.getElementById("S").style.color = "black";
  document.getElementById("T").style.backgroundColor = "white";
  document.getElementById("T").style.color = "black";
  document.getElementById("U").style.backgroundColor = "white";
  document.getElementById("U").style.color = "black";
  document.getElementById("V").style.backgroundColor = "white";
  document.getElementById("V").style.color = "black";
  document.getElementById("W").style.backgroundColor = "white";
  document.getElementById("W").style.color = "black";
  document.getElementById("X").style.backgroundColor = "white";
  document.getElementById("X").style.color = "black";
  document.getElementById("Y").style.backgroundColor = "white";
  document.getElementById("Y").style.color = "black";
  document.getElementById("Z").style.backgroundColor = "white";
  document.getElementById("Z").style.color = "black";

  // reset all of the hint boxes
  for(let i = 1; i <= 6; i++){
    for(let j = 1; j <= 5; j++){
      document.getElementById(`guess${i}letter${j}`).style.backgroundColor = "white";
      document.getElementById(`guess${i}letter${j}`).style.color = "black";
      document.getElementById(`guess${i}letter${j}`).textContent = "";
    }
  }

  guessNumber = 1;
  document.getElementById("solution").style.display = "none";
  document.getElementById("resetButton").style.display = "none";
}