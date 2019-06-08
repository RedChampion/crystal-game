var wins = 0;
var losses = 0;
var triesLeft = 10;
var computerValue = 0;

var yellowGem = 0;
var greenGem = 0;
var purpleGem = 0;
var blueGem = 0;
var userTotal = 0;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
// call this at the start of every game
function assignGemValues(){
    yellowGem = getRandomIntInclusive(1, 12);
    greenGem = getRandomIntInclusive(1, 12);
    purpleGem = getRandomIntInclusive(1, 12);
    blueGem = getRandomIntInclusive(1, 12);
};
function initializeGameState(){
    assignGemValues();
    computerValue = getRandomIntInclusive(19, 120);
    $("#match").text(computerValue);
};
// this will contain gameplay logic
function startGame(){
    initializeGameState();
};

function displayValue(gemValue){
    $("#worth").text(gemValue);
};

function updateTotal(gemValue){
    userTotal += gemValue;
};

function displayTotal(){
    $("#total").text(userTotal);
};

function onClickForGem(gemValue){
    displayValue(gemValue);
    updateTotal(gemValue);
    displayTotal(gemValue);
    if (userTotal === computerValue){
        wins++;
        triesLeft = 10;
        userTotal = 0;
        initializeGameState();
    };
    if (userTotal > computerValue){
        losses++;
        triesLeft = 10;
        userTotal = 0;
        initializeGameState();
    };
    if (userTotal < computerValue){
        triesLeft--;
    }
    if (triesLeft ===  0){
        losses++;
        triesLeft = 10;
        userTotal = 0;
        initializeGameState();
    }
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    $("#triesleft").text("Tries Left: " + triesLeft);
};

function setupGameEnv(){
    $("#green").click(function () {
        onClickForGem(greenGem);
    });
    $("#yellow").click(function () {
        onClickForGem(yellowGem);
    });
    $("#blue").click(function () {
        onClickForGem(blueGem);
    });
    $("#purple").click(function () {
        onClickForGem(purpleGem);
    });
};

function main(){
    setupGameEnv();
    startGame();
};

main();