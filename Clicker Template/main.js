var gameData = {
    Coins:0,
    clickingPower:1,
}

function coinClicked(amount) {
    gameData.Coins++;
}

function updateCount() {
    setInterval(() => {
        document.querySelector("#totalCoins").innerHTML = "You Have "+gameData.Coins+" Coins"
        document.title = gameData.Coins+" Coins - Coin Clicker"
    }, 50);
}