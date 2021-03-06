var wordList = ["astronomy", "astrophysics", "atom", "beaker", "biochemistry", "biology", "botany", "burette","cell", "chemical", "chemistry", "climate", "climatologist", "control", "cuvette","data", "datum","electricity", "electrochemist", "element", "energy", "entomology", "evolution", "experiment","fact", "flask", "fossil", "funnel","genetics", "geology", "geophysics", "glassware", "graduated", "cylinder", "gravity", "herpetology", "hypothesis", "ichthyology", "immunology", "lab", "laboratory", "magnetism", "mass", "matter", "measure", "meteorologist", "meteorology", "microbiologist", "microbiology", "mineralogy", "molecule", "motion","observatory", "observe", "organism", "ornithology","article", "phase", "physics", "pipette","radiology", "research", "retort", "scale", "science", "scientist", "seismology", "telescope", "temperature", "theory", "thermometer", "tissue","variable", "virologist", "volcano", "volume","weather", "weigh","zoology"]

var word = wordList[Math.floor(Math.random() * wordList.length)];
var initialUnderscore = document.getElementById("placeholder");
var changeUnderscore;
var testingVar = document.getElementById("testing");
var guessesLeftStr;
var wrongGuesses = [];
var correctGuesses = [];
var underScoreArr = [];
var userInput = document.onkeydown;
var winCheckStr;
var wrongGuessesTaken = 0;
var totalAllowedGuesses = 13;
var theChoice;
var totalWinCounter = 0;
var regex0 = /^[a-z]*$/

function initializeInformation(word){
  for(i = 0; i < word.length; i++) { 
    initialUnderscore.insertAdjacentHTML("beforeend", "_");
  }

  testingVar.insertAdjacentHTML("beforeend", word); //just for testing the word

  document.getElementById("number-guesses-left").insertAdjacentHTML("beforeend", totalAllowedGuesses);
  document.getElementById("number-wins").insertAdjacentHTML("beforeend", totalWinCounter);

}

function clearPreviousParameters() {
  document.getElementById("placeholder").innerHTML = "";
  document.getElementById("letters-guessed").innerHTML = "Letters Guessed: ";
  document.getElementById("number-guesses-left").innerHTML = "Number of Guesses Left: ";
  document.getElementById("number-wins").innerHTML = "Number of Wins: "
  document.getElementById("testing").innerHTML = "(click to hide)Word: ";
}

function replaceCharInUnderscore(chosenWord, underScores, char) {
  for(i = 0; i < chosenWord.length; i++){
    if(chosenWord[i] == char){
      underScores = underScores.substring(0, i) + char + underScores.substring(i + 1);
      document.getElementById("placeholder").innerHTML = underScores;
    }
  }
  winCheck(underScores);
}

function letterCheck(char) {
  if(regex0.test(char)) {
    return true;
  }else {
    return false;
  }
}

function winCheck(str) {
  if(str == word){
    totalWinCounter++;
    document.getElementById("jumbotron-win-screen").innerHTML = '<h1 class="large-win-font">You Win!</h1><p>Click Me to Play Again!</p>';
    document.getElementById("jumbotron-win-screen").onclick = function() {resetGame()};
  }
}

function resetGame() {
  word = wordList[Math.floor(Math.random() * wordList.length)];
  clearPreviousParameters();
  initializeInformation(word);
}

initializeInformation(word);  
//so i can call everthing inside winCheck() and resetGame()

document.getElementById("testing").onclick = function(){
  var hideWord = document.getElementById("testing");
  if (hideWord.style.display === "none") {
    hideWord.style.display = "block";
  } else {
    hideWord.style.display = "none";
  }
};

document.onkeydown = function(event) {

  theChoice = event.key.toLowerCase();
  
  if(letterCheck(theChoice)){ 

    if(word.includes(theChoice)){

      changeUnderscore = document.getElementById("placeholder").innerHTML;
      correctGuesses.push(theChoice);
      replaceCharInUnderscore(word, changeUnderscore, theChoice);

    }else{

      theChoice = theChoice.toUpperCase();

      if(wrongGuessesTaken == 0){
        document.getElementById("letters-guessed").insertAdjacentText("beforeend", theChoice);
        wrongGuessesTaken++;
      }else if(wrongGuessesTaken == 13){
        document.getElementById("jumbotron-win-screen").innerHTML = '<h1 class="large-win-font">You Lose!</h1><p>Click Me to Play Again!</p>';
        document.getElementById("bruh-sound").play();
        document.getElementById("jumbotron-win-screen").onclick = function() {resetGame()};
      }else if(wrongGuessesTaken > 13){
        alert("Omae wa mou shindeiru");
      }else{
        document.getElementById("letters-guessed").insertAdjacentText("beforeend",  " | " + theChoice);
        wrongGuessesTaken++;
      }

      document.getElementById("number-guesses-left").innerText = "Number of Guesses Left: " + (totalAllowedGuesses - wrongGuessesTaken);

    }

  }else {

    alert("No numbers, spaces or special characters are in any of these words.");

  }

}