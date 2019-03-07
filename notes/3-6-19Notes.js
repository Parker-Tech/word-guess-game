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


var word = "data"//wordList[Math.floor(Math.random() * wordList.length)];
// var wordLastChar; //= word[word.length - 1];
// var underScoreLastChar; //= changeUnderscore[changeUnderscore.length - 1];
// var replaceLastUnderScore; //= changeUnderscore.replace(underScoreLastChar, wordLastChar);    This isnt going to work because it only checks for linear wins, not for a word like togo where index 1 and 3 are the same
var initialUnderscore = document.getElementById("placeholder");
var changeUnderscore;
var testingVar = document.getElementById("testing");
var allGuessArr = [];
var wrongGuesses = [];
var correctGuesses = [];
var guessesLeft = 13;
var theChoice;
var choiceIndex;
var smartChoiceSearch; //= new RegExp(theChoice, "g");
var indexArray = []; //= word.match(smartChoiceSearch);
var replaceBothVar;
var indicies = [];


var regex0 = /^[a-z]*$/
// var regex0 = /[a-z]gi/;
// var regex0 = /[a-z]gi/;
// var regex0 = /[a-z]/g
// var allGuessArrIndex1 = allGuessArr[0];
// var allGuessArrIndex2 = allGuessArr[1];
// console.log(allGuessArr);
// console.log(smartChoiceSearch);


// function replaceAt(index, replacement) {
//   return this.substr(0, index) + replacement + this.substr(index + 1);
// }  

// String.prototype.replaceAt = function(index, replacement) {
//   return this.substring(0, index) + replacement + this.substring(index + 1);                *****************working replaceAt()
// }  

// String.prototype.replaceTwo = function(allGuessArr, replacement) {
//   // console.log(allGuessArr[0]);
//   // console.log(allGuessArr[1]);
//   return this.substr(0, allGuessArr[0]) + replacement + this.substr(allGuessArr[0], allGuessArr[1]) // + replacement + this.substr(allGuessArr[1] + 1);

  
// }
// im rewriting this to take in 3 arguments function(index1, index2, replacement) bc reading off the index array is geting tedious and it breaks
// String.prototype.replaceTwo = function(index1, index2, replacement) {
//   console.log(index1);
//   console.log(index2);
//   console.log(replacement);
//   console.log(this.substring(0, index1));
//   console.log(this.substring(index1 + 1, index2));
//   console.log(this.substring(index2 + 1));
//   return this.substring(0, index1) + replacement + this.substring(index1 + 1, index2) + replacement + this.substring(index2 + 1);
// }





function replaceAt(chosenWord, underScores, char) {
  for(i = 0; i < word.length; i++){
    if(word[i] == replacement){
      changeUnderscore[i] = replacment;
    }
  }
}

// String.prototype.replaceThree = function(allGuessArr, replacement) {    
//   return this.substr(0, allGuessArr[0]) + replacement + this.substr(allGuessArr[0], allGuessArr[1]) + replacement + this.substring(allGuessArr[1]);
// }
  //.replaceAt() takes eveything from index 0 to index of choiceIndex, then puts in the replacement(theChoice) and then
  // adds the rest of the string back on

  //adapt this function to be able to find and replace multiple instances of theChoice


// word.forEach(function(element){
//     underscoreVar.insertAdjacentHTML("afterbegin", "_ ")
// });

function findMultipleIndecies(str) { //using this as a counter for multiple instances of a char in word
  for(i = 0; i < str.length; i++){
      // console.log(str[i]);
      // console.log(theChoice);
      if(str[i] == theChoice) {
        indexArray.push(i);
        console.log(indexArray);
        console.log("it's a match!");
        
      }else{
        console.log(indexArray);
        console.log("not a match")
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

    allGuessArr.push()  // use allGuessArr to check if the key has been hit already


    // guesses.push(theChoice);         
    // smartChoiceSearch = new RegExp(theChoice, "g");
    // allGuessArr = word.match(smartChoiceSearch);
    // for(i = 0; i < word.length; i++){
    //     if(word[i] == theChoice) {
    //         allGuessArr.push(i);
    //     }
    // }
    console.log(allGuessArr.length);
    // console.log(smartChoiceSearch);

    if(word.includes(theChoice)){ //add && theChoice.isNotIn(correctGuessArray)
      
      findMultipleIndecies(word);
      console.log(allGuessArr);
      choiceIndex = word.indexOf(theChoice);
      choiceIndex2 = word.indexOf(theChoice, choiceIndex + 1);
      // console.log(choiceIndex2);
      changeUnderscore = document.getElementById("placeholder").innerHTML;
      correctGuesses.push(theChoice);
      
      if(indexArray.length == 1 || indexArray.length == 0){
        // document.getElementById("placeholder").innerHTML = changeUnderscore.replaceAt(choiceIndex, theChoice);//you have to do this bc strings are immutable in javascript
        replaceAt(word, theChoice);
      }else if(indexArray.length == 2){           
        // document.getElementById("placeholder").innerHTML = changeUnderscore.replaceTwo(choiceIndex, choiceIndex2, theChoice);
        replaceAt(word, theChoice);
        // console.log(changeUnderscore);
      }else if(indexArray.length == 3){         
        // document.getElementById("placeholder").innerHTML = changeUnderscore.replaceThree(allGuessArr, theChoice);
        replaceAt(word, theChoice);
      }else{
        // document.getElementById("placeholder").innerHTML = "you done messed up A-Aron";

        // console.log(allGuessArr);
      }
      console.log(changeUnderscore);
      console.log(choiceIndex);
      
      //(word - the last _)

      // DEPRICATED
      // underscoreVar[choiceIndex] = theChoice;
      //going to try and use inner html to write over the whole #placeholder but aslo use a loop to put underscores
      //on the non picked letters
      // changeUnderscore[choiceIndex] = theChoice;
      // just append underscoreVar with a normal array method then use .inner html just to push that 
      // alert(theChoice);

      // if(changedUnderscoreVar.check(word)){
      //    alert("You Win!")
      //}
    }else{
      // guesses.push(theChoice.toString());  
      // console.log(guesses);
      // console.log(choiceIndex);
      // console.log(underscoreVar[0]);
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