var wordList = ["astronomy", "astrophysics", "atom",

"beaker", "biochemistry", "biology", "botany", "Bunsen burner", "burette",

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

"quantum mechanics", 

"radiology", "research", "retort", 

"scale", "science", "scientist", "seismology", 

"telescope", "temperature", "test tube", "theory", "thermometer", "tissue", 

"variable", "virologist", "volcano", "volume", "volumetric flask", 

"watch glass", "weather", "weigh", 

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

for(i = 0; i < word.length; i++) {
    underscoreVar.insertAdjacentHTML("afterbegin", "_");
    console.log(underscoreVar);
}
testingVar.insertAdjacentHTML("beforeend", word); //just for testing the word

document.onkeydown = function(event) {
    theChoice = event.key.toLowerCase();
    // guesses.push(theChoice); 
    console.log(underscoreVar);           
    
    
    if(word.includes(theChoice)){
        // underscoreVar[choiceIndex] = theChoice;
        //going to try and use inner html to write over the whole #placeholder but aslo use a loop to put underscores
        //on the non picked letters

        
        choiceIndex = word.indexOf(theChoice);
        underscoreVar.innerHTML = theChoice;
        alert(theChoice);
    }else{
        // guesses.push(theChoice.toString());  
        // console.log(guesses);
        // console.log(choiceIndex);
        // console.log(underscoreVar[0]);
        alert("You failed!");
    }
    
}