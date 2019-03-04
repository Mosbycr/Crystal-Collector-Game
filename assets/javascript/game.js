var winScore = 0;
var loseScore = 0;
var scoreCounter = 0;
var randomNumber = Math.floor(Math.random() * (102)) + 19;
console.log(randomNumber);
var crystalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(crystalNumbers);

$(".crystalImages").on('click', function (event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    alert ("yess");
        
    var crystalValue = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)]; 
    scoreCounter = scoreCounter + crystalValue;
    
    $("#counter").text = scoreCounter;
    console.log(scoreCounter);
});  

//}
// images are creating numbers but are random every click instead of staying same value