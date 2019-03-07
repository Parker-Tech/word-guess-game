var wordList = ["astronomy", "astrophysics", "atom",

"beaker", "biochemistry", "biology", "botany", "burette", // "Bunsen burner",

"cell", "chemical", "chemistry", "climate", "climatologist", "control", "cuvette",

"data", "datum",

"electricity", "electrochemist", "element", "energy", "entomology", "evolution", "experiment",

"fact", "flask", "fossil", "funnel",

"genetics", "geology", "geophysics", "glassware", "graduated", "cylinder", "gravity", 

"herpetology", "hypothesis", 

"ichthyology", "immunology", 

"lab", "laboratory", "lawslepidoptery", 

"magnetism", "mass", "matter", "measure", "meteorologist", "meteorology", "microbiologist", "microbiology", "microscopemineral", "mineralogy", "molecule", "motion",

"observatory", "observe", "organism", "ornithology",

"article", "phase", "physics", "pipette", // "physical science", "Petri dish", 

//"quantum mechanics", 

"radiology", "research", "retort", 

"scale", "science", "scientist", "seismology", 

"telescope", "temperature", "theory", "thermometer", "tissue", // "test tube",

"variable", "virologist", "volcano", "volume", //"volumetric flask", 

 "weather", "weigh", //"watch glass",

"zoology"]


var word = wordList[Math.floor(Math.random() * wordList.length)];
var initialUnderscore = document.getElementById("placeholder");
var changeUnderscore;
var testingVar = document.getElementById("testing");
var allGuessArr = [];
var wrongGuesses = [];
var correctGuesses = [];
var underScoreArr = [];
var guessesLeft = 13;
var theChoice;
var choiceIndex;
var underScoreNew;
var indexArray = []; 
var indicies = [];
var regex0 = /^[a-z]*$/


function replaceCharInUnderscore(chosenWord, underScores, char) {
  for(i = 0; i < chosenWord.length; i++){
    if(chosenWord[i] == char){
      underScores = underScores.substring(0, i) + char + underScores.substring(i + 1);
      document.getElementById("placeholder").innerHTML = underScores;
    }
  }
}

function findMultipleIndecies(str) { //using this as a counter for multiple instances of a char in word
  for(i = 0; i < str.length; i++){
    if(str[i] == theChoice) {
      indexArray.push(i);
    }
  }
}

function letterCheck(char) {
  if(regex0.test(char)) {
    return true;
  }else {
    return false;
  }
}

for(i = 0; i < word.length; i++) { 
  initialUnderscore.insertAdjacentHTML("beforeend", "_");
}

testingVar.insertAdjacentHTML("beforeend", word); //just for testing the word

document.onkeydown = function(event) {

  theChoice = event.key.toLowerCase();
  if(letterCheck(theChoice)){

    allGuessArr.push(theChoice);  // use allGuessArr to check if the key has been hit already

    console.log(allGuessArr.length);

    if(word.includes(theChoice)){ //add && theChoice.isNotIn(correctGuessArray)
      
      findMultipleIndecies(word);
      console.log(allGuessArr);
      choiceIndex = word.indexOf(theChoice);
      choiceIndex2 = word.indexOf(theChoice, choiceIndex + 1);
      // console.log(choiceIndex2);
      changeUnderscore = document.getElementById("placeholder").innerHTML;
      correctGuesses.push(theChoice);
      replaceCharInUnderscore(word, changeUnderscore, theChoice);

      // if(indexArray.length == 1 || indexArray.length == 0){
      //   // document.getElementById("placeholder").innerHTML = changeUnderscore.replaceCharInUnderscore(choiceIndex, theChoice);//you have to do this bc strings are immutable in javascript
      //   replaceCharInUnderscore(word, changeUnderscore, theChoice);
      // }else if(indexArray.length == 2){           
      //   // document.getElementById("placeholder").innerHTML = changeUnderscore.replaceTwo(choiceIndex, choiceIndex2, theChoice);
      //   replaceCharInUnderscore(word, changeUnderscore, theChoice);
      //   // console.log(changeUnderscore);
      // }else if(indexArray.length == 3){         
      //   // document.getElementById("placeholder").innerHTML = changeUnderscore.replaceThree(allGuessArr, theChoice);
      //   replaceCharInUnderscore(word, changeUnderscore, theChoice);
      // }else{
      //   // document.getElementById("placeholder").innerHTML = "you done messed up A-Aron";

      //   // console.log(allGuessArr);
      // }
      console.log(changeUnderscore);
      console.log(choiceIndex); 
    }else{
      alert("You failed!");
      wrongGuesses.push(theChoice);
      guessesLeft--;
    }
    indexArray = []; //resets array so it doesnt stack with all the other indecies     <<<<<<< This was required for selecteMultipleIndecies() !!!!!!!!
  }else {
    alert("No numbers, spaces or special characters are in any of these words.");
  }

  if(word == changeUnderscore){
    alert("wow you actually won");
  }
  console.log(word)
  // console.log(replaceLastUnderScore)
}