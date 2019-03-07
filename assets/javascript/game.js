var wordList = ["astronomy", "astrophysics", "atom", "beaker", "biochemistry", "biology", "botany", "burette","cell", "chemical", "chemistry", "climate", "climatologist", "control", "cuvette","data", "datum","electricity", "electrochemist", "element", "energy", "entomology", "evolution", "experiment","fact", "flask", "fossil", "funnel","genetics", "geology", "geophysics", "glassware", "graduated", "cylinder", "gravity", "herpetology", "hypothesis", "ichthyology", "immunology", "lab", "laboratory", "magnetism", "mass", "matter", "measure", "meteorologist", "meteorology", "microbiologist", "microbiology", "mineralogy", "molecule", "motion","observatory", "observe", "organism", "ornithology","article", "phase", "physics", "pipette","radiology", "research", "retort", "scale", "science", "scientist", "seismology", "telescope", "temperature", "theory", "thermometer", "tissue","variable", "virologist", "volcano", "volume","weather", "weigh","zoology"]

var word = wordList[Math.floor(Math.random() * wordList.length)];
var initialUnderscore = document.getElementById("placeholder");
var changeUnderscore;
var testingVar = document.getElementById("testing");
var guessesLeftStr;
var allGuessArr = [];
var wrongGuesses = [];
var correctGuesses = [];
var underScoreArr = [];
var userInput = document.onkeydown;
var winCheckStr;
var wrongGuessesTaken = 0;
var totalAllowedGuesses = 13;
var theChoice;
var underScoreNew;
var indexArray = []; 
var indicies = [];
var regex0 = /^[a-z]*$/


for(i = 0; i < word.length; i++) { 
  initialUnderscore.insertAdjacentHTML("beforeend", "_");
}

function replaceCharInUnderscore(chosenWord, underScores, char) {
  for(i = 0; i < chosenWord.length; i++){
    if(chosenWord[i] == char){
      underScores = underScores.substring(0, i) + char + underScores.substring(i + 1);
      document.getElementById("placeholder").innerHTML = underScores;
    }
  }
  winCheckStr = underScores;
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
    document.getElementById("jumbotron-win-screen").innerHTML("<h1>You Win!</h1>").setAttribute("id", "large-win-font");
    
    // var reloadConfirm = confirm("You Win!\nPlay Again?")
    // if(reloadConfirm){
    //   location.reload();
    // }else{
    //   //something funny?
    // }
  }
}

// function charFilter(event) {

//   theChoice = event.key.toLowerCase();
  
//   if(letterCheck(theChoice)){

//     allGuessArr.push(theChoice);  // use allGuessArr to check if the key has been hit already

//     if(word.includes(theChoice)){ //add && theChoice.isNotIn(correctGuessArray)   

//       changeUnderscore = document.getElementById("placeholder").innerHTML;
//       correctGuesses.push(theChoice);
//       replaceCharInUnderscore(word, changeUnderscore, theChoice);

//     }else{

//       theChoice = theChoice.toUpperCase();

//       if(wrongGuessesTaken == 0){
//         document.getElementById("letters-guessed").insertAdjacentText("beforeend", theChoice);
//       }else{
//         document.getElementById("letters-guessed").insertAdjacentText("beforeend",  " | " + theChoice);
//       }

//       if(wrongGuessesTaken == 13){
//         var reloadConfirm = confirm("You Lose\nTry Again?")   //play Bruh sound effect #2
//         if(reloadConfirm){
//           location.reload();
//         }else{
//           //something funny?
//         }
//       }
      
//       wrongGuessesTaken++;

//       document.getElementById("number-guesses-left").innerText = "Number of Guesses Left: " + (totalAllowedGuesses - wrongGuessesTaken);


//     }

//   }else {

//     alert("No numbers, spaces or special characters are in any of these words.");

//   }

// }

// testingVar.insertAdjacentHTML("beforeend", word); //just for testing the word

// document.getElementById("number-guesses-left").insertAdjacentHTML("beforeend", totalAllowedGuesses)

// document.onkeydown = charFilter();
// winCheck(winCheckStr);

testingVar.insertAdjacentHTML("beforeend", word); //just for testing the word

document.getElementById("number-guesses-left").insertAdjacentHTML("beforeend", totalAllowedGuesses)

document.onkeydown = function(event) {

  theChoice = event.key.toLowerCase();
  
  if(letterCheck(theChoice)){

    allGuessArr.push(theChoice);  // use allGuessArr to check if the key has been hit already

    if(word.includes(theChoice)){ //add && theChoice.isNotIn(correctGuessArray)   

      changeUnderscore = document.getElementById("placeholder").innerHTML;
      correctGuesses.push(theChoice);
      replaceCharInUnderscore(word, changeUnderscore, theChoice);

    }else{

      theChoice = theChoice.toUpperCase();

      if(wrongGuessesTaken == 0){
        document.getElementById("letters-guessed").insertAdjacentText("beforeend", theChoice);
      }else{
        document.getElementById("letters-guessed").insertAdjacentText("beforeend",  " | " + theChoice);
      }

      if(wrongGuessesTaken == 13){
        var reloadConfirm = confirm("You Lose\nTry Again?")   //play Bruh sound effect #2
        if(reloadConfirm){
          location.reload();
        }else{
          //something funny?
        }
      }
      
      wrongGuessesTaken++;

      document.getElementById("number-guesses-left").innerText = "Number of Guesses Left: " + (totalAllowedGuesses - wrongGuessesTaken);


    }

  }else {

    alert("No numbers, spaces or special characters are in any of these words.");

  }

  console.log(changeUnderscore)
  winCheck(winCheckStr);

}