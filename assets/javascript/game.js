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

"article", "Petri dish", "phase", "physical science", "physics", "pipette", 

//"quantum mechanics", 

"radiology", "research", "retort", 

"scale", "science", "scientist", "seismology", 

"telescope", "temperature", "theory", "thermometer", "tissue", // "test tube",

"variable", "virologist", "volcano", "volume", "volumetric flask", 

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
// console.log(indexArray);
// console.log(smartChoiceSearch);


String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}  

String.prototype.replaceTwo = function(indexArray, replacement) {
    // for(i = 0; i < indexArray.length; i++){
    //     replaceTwoVar = this.substr(0, indexArray[i]) + replacement + this.substr
    // }
    // if(indexArray.length == 2){
        return this.substr(0, indexArray[0]) + replacement + this.substr(indexArray[0], indexArray[1]) + replacement + this.substring(indexArray[1]);
    // }


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

for(i = 0; i < word.length; i++) { 
    underscoreVar.insertAdjacentHTML("beforeend", "_");
}



testingVar.insertAdjacentHTML("beforeend", word); //just for testing the word
console.log(underscoreVar);

document.onkeydown = function(event) {
    theChoice = event.key.toLowerCase();
    for(i = 0; i < word.length; i++){
        if(word[i] == theChoice) {
            indexArray.push(i);
        }else{
            console.log("not working")
        }
    }
    // guesses.push(theChoice); 
    console.log(underscoreVar);           
    // smartChoiceSearch = new RegExp(theChoice, "g");
    // indexArray = word.match(smartChoiceSearch);
    // for(i = 0; i < word.length; i++){
    //     if(word[i] == theChoice) {
    //         indexArray.push(i);
    //     }
    // }
    console.log(indexArray);
    // console.log(smartChoiceSearch);
    
    if(word.includes(theChoice)){
        
        
        choiceIndex = word.indexOf(theChoice);
        changeUnderscoreVar = document.getElementById("placeholder").innerHTML;
        
        if(indexArray.length == 1){
            document.getElementById("placeholder").innerHTML = changeUnderscoreVar.replaceAt(choiceIndex, theChoice);//you have to do this bc strings are immutable in javascript
        }else if(indexArray.length == 2){
            document.getElementById("placeholder").innerHTML = changeUnderscoreVar.replaceTwo(indexArray, theChoice);
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
    indexArray = [];
    
}