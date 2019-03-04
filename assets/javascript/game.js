var winScore = 0;
var loseScore = 0;
var scoreCounter = 0;

var randomNumberGenerated = Math.floor(Math.random() * (102)) + 19;
console.log(randomNumberGenerated);
$("#randomNumber").text(randomNumberGenerated);

var image1 = Math.floor(Math.random() * 12) + 1;
var image2 = Math.floor(Math.random() * 12) + 1;
var image3 = Math.floor(Math.random() * 12) + 1;
var image4 = Math.floor(Math.random() * 12) + 1;
console.log(image1);
console.log(image2);
console.log(image3);
console.log(image4);

$("#image-1").on("click", function(){
    scoreCounter = scoreCounter + image1;
    console.log(scoreCounter);
});

$("#image-2").on("click", function(){
    scoreCounter = scoreCounter + image2;
    console.log(scoreCounter);
});

$("#image-3").on("click", function () {
    scoreCounter = scoreCounter + image3;
    console.log(scoreCounter);
});

$("#image-4").on("click", function () {
    scoreCounter = scoreCounter + image4;
    console.log(scoreCounter);
});












// $(".crystalImages").on('click', function (event) {
//     event.stopPropagation();
//     event.stopImmediatePropagation();
//     alert ("yess");

// });  

