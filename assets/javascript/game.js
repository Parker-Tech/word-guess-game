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
var underscoreVar = document.getElementById("placeholder");
var changeUnderscoreVar;
var testingVar = document.getElementById("testing");
var guesses = [];
var theChoice;
var choiceIndex;
var regex0 = /[a-z]/g
var smartChoiceSearch; //= new RegExp(theChoice, "g");
var indexArray = []; //= word.match(smartChoiceSearch);
var replaceBothVar;
var indicies = [];
var indexArrayIndex1 = indexArray[0];
var indexArrayIndex2 = indexArray[1];
// console.log(indexArray);
// console.log(smartChoiceSearch);


String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + 1);
}  

String.prototype.replaceTwo = function(indexArray, replacement) {
    console.log(indexArray[0]);
    console.log(indexArray[1]);
    return this.substr(0, indexArray[0]) + replacement + this.substr(indexArray[0], indexArray[1]) // + replacement + this.substr(indexArray[1] + 1);

    // console.log(this.split(replacement, 2));
    // return this.split(replacement, 2);
        // adds underscores to the inside of the first substring and the inside of the second substring as well, making it two extra underscores
    // var retStr = this;
    // console.log(retStr);
    // for (var x in ) {
    //     retStr = retStr.replace(new RegExp(replacement, 'g'), obj[replacement]);
    // }
    // return retStr;
    // cant use this because I am replacing by index and for that you need a comparison that i dont have
}

String.prototype.replaceThree = function(indexArray, replacement) {    
    return this.substr(0, indexArray[0]) + replacement + this.substr(indexArray[0], indexArray[1]) + replacement + this.substring(indexArray[1]);
}
    //.replaceAt() takes eveything from index 0 to index of choiceIndex, then puts in the replacement(theChoice) and then
    // adds the rest of the string back on

    //adapt this function to be able to find and replace multiple instances of theChoice


// word.forEach(function(element){
//     underscoreVar.insertAdjacentHTML("afterbegin", "_ ")
// });

function findMultipleIndecies(str) {
    for(i = 0; i < str.length; i++){
        console.log(str[i]);
        console.log(theChoice);
        if(str[i] == theChoice) {
            indexArray.push(i);
            console.log("it's a match!");
            console.log(indexArray);
        }else{
            console.log("not a match")
        }
    }
}

for(i = 0; i < word.length; i++) { 
    underscoreVar.insertAdjacentHTML("beforeend", "_");
}



testingVar.insertAdjacentHTML("beforeend", word); //just for testing the word

document.onkeydown = function(event) {
    theChoice = event.key.toLowerCase();
    
    // guesses.push(theChoice);         
    // smartChoiceSearch = new RegExp(theChoice, "g");
    // indexArray = word.match(smartChoiceSearch);
    // for(i = 0; i < word.length; i++){
    //     if(word[i] == theChoice) {
    //         indexArray.push(i);
    //     }
    // }
    console.log(indexArray.length);
    // console.log(smartChoiceSearch);
    
    if(word.includes(theChoice)){ //add && theChoice.isNotIn(correctGuessArray)
        findMultipleIndecies(word);
        console.log(indexArray);
        choiceIndex = word.indexOf(theChoice);
        changeUnderscoreVar = document.getElementById("placeholder").innerHTML;
        
        if(indexArray.length == 1 || indexArray.length == 0){
            document.getElementById("placeholder").innerHTML = changeUnderscoreVar.replaceAt(choiceIndex, theChoice);//you have to do this bc strings are immutable in javascript
        }else if(indexArray.length == 2){           
            document.getElementById("placeholder").innerHTML = changeUnderscoreVar.replaceTwo(indexArray, theChoice);
            console.log(changeUnderscoreVar);
        }else if(indexArray.length == 3){         
            document.getElementById("placeholder").innerHTML = changeUnderscoreVar.replaceThree(indexArray, theChoice);
        }else{
            document.getElementById("placeholder").innerHTML = "you done messed up A-Aron";
            console.log(indexArray);
        }
        console.log(changeUnderscoreVar);
        console.log(choiceIndex);
        
        // DEPRICATED
        // underscoreVar[choiceIndex] = theChoice;
        //going to try and use inner html to write over the whole #placeholder but aslo use a loop to put underscores
        //on the non picked letters
        // changeUnderscoreVar[choiceIndex] = theChoice;
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
    }
    indexArray = []; //resets array so it doesnt stack with all the other indecies
    
}