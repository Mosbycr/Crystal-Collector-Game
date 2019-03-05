var winScore = 0;
var loseScore = 0;
var scoreCounter = 0;

var randomNumberGenerated = Math.floor(Math.random() * (102)) + 19;
$("#randomNumber").text(randomNumberGenerated);

var image1 = Math.floor(Math.random() * 12) + 1;
var image2 = Math.floor(Math.random() * 12) + 1;
var image3 = Math.floor(Math.random() * 12) + 1;
var image4 = Math.floor(Math.random() * 12) + 1;

function reset(){
    scoreCounter = 0;
    randomNumberGenerated = Math.floor(Math.random() * (102)) + 19;
    image1 = Math.floor(Math.random() * 12) + 1;
    image2 = Math.floor(Math.random() * 12) + 1;
    image3 = Math.floor(Math.random() * 12) + 1;
    image4 = Math.floor(Math.random() * 12) + 1;

    $("#randomNumber").text(randomNumberGenerated);
    $("#counter").text(scoreCounter);
}

function winLose(){
    if(scoreCounter === randomNumberGenerated){
        winScore++;
        $("#wins").text(winScore);
        reset();
    } else if(scoreCounter > randomNumberGenerated){
        loseScore++;
        $("#losses").text(loseScore);
        reset();
    }
}

$("#image-1").on("click", function(){
    scoreCounter = scoreCounter + image1;
    $("#counter").text(scoreCounter);
    winLose();
});

$("#image-2").on("click", function(){
    scoreCounter = scoreCounter + image2;
    $("#counter").text(scoreCounter);
    winLose();
});

$("#image-3").on("click", function () {
    scoreCounter = scoreCounter + image3;
    $("#counter").text(scoreCounter);
    winLose();
});

$("#image-4").on("click", function () {
    scoreCounter = scoreCounter + image4;
    $("#counter").text(scoreCounter);
    winLose();
});









