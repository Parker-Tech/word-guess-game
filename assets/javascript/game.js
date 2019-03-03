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
var testingVar = document.getElementById("testing");
var guesses = [];
var theChoice;
var choiceIndex;
var regex = /[a-z]/g

// word.forEach(function(element){
//     underscoreVar.insertAdjacentHTML("afterbegin", "_ ")
// });
String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

for(i = 0; i < word.length; i++) { //maybe change this to .innerhtml "_" * i < word.length
    underscoreVar.insertAdjacentHTML("beforeend", "_");
}

testingVar.insertAdjacentHTML("beforeend", word); //just for testing the word
console.log(underscoreVar);

document.onkeydown = function(event) {
    theChoice = event.key.toLowerCase();
    // guesses.push(theChoice); 
    console.log(underscoreVar);           
    
    
    if(word.includes(theChoice)){
        // underscoreVar[choiceIndex] = theChoice;
        //going to try and use inner html to write over the whole #placeholder but aslo use a loop to put underscores
        //on the non picked letters

        
        choiceIndex = word.indexOf(theChoice);
        var changeUnderscoreVar = document.getElementById("placeholder").innerHTML;
        document.getElementById("placeholder").innerHTML = changeUnderscoreVar.replaceAt(choiceIndex, theChoice)
        console.log(changeUnderscoreVar);
        console.log(choiceIndex);
        // changeUnderscoreVar[choiceIndex] = theChoice;
        // just append underscoreVar with a normal array method then use .inner html just to push that 
        alert(theChoice);
    }else{
        // guesses.push(theChoice.toString());  
        // console.log(guesses);
        // console.log(choiceIndex);
        // console.log(underscoreVar[0]);
        alert("You failed!");
    }
    
}