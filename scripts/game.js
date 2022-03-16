function resetGameStatus() {
    activePlayer = 0;
    currentRound = 1;
    gameIsOver = false;
    gameOverElement.style.display = 'none';
    winnerPlayer.textContent = '';

    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++){
            gameData[i][j] = 0;
        }
    }

    for (const gameFieldElement of gameFieldElements){
        gameFieldElement.textContent = '';
        gameFieldElement.classList.remove('disabled');
    }

}

function startNewGame() {

    if (players[0].name === '' || players[1].name === ''){
        alert('Please set custome name players');
        return;
    }
    resetGameStatus();
    activePlayerNameElement.textContent = players[activePlayer].name;
    gameArea.style.display = 'block';
}

function checkForGameOver() {

    for (var i=0; i<3; i++){ //checking rows have the same value
        if ( 
            gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] && 
            gameData[i][1] === gameData[i][2]
            )
            {
            return gameData[i][0];
            }
    }

    for (var i=0; i<3; i++){ //checking columns have the same value
        if ( 
            gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] && 
            gameData[0][i] === gameData[2][i]
            )
            {
            return gameData[0][i];
            }
    }
    //diagonal top left to bottom right
    if (
        gameData[0][0]>0 &&
        gameData[0][0] === gameData [1][1] &&
        gameData [1][1] === gameData[2][2]
        )
        {
        return gameData[0][0];
    }

        //diagonal bottom left to top right
    else if (
        gameData [2][0] > 0 &&
        gameData[2][0] === gameData [1][1] &&
        gameData [1][1] === gameData[0][2]
        )
        {
        return gameData[2][0];
        }
        
    if (currentRound === 9){
        return -1; //no winner but game over
    }
    return 0; //no winner but game still ongoing
    endGame();
}





function switchPlayer() {
    if(activePlayer === 0){
        activePlayer = 1;
    }
    else {
        activePlayer = 0;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
}





function selectGameField(event) {
    if (gameIsOver === true){
        return;
    }

    const selectedColumn = event.target.dataset.col-1;
    const selectedRow = event.target.dataset.row-1;

    //checking if the cell contains already a 
    if (gameData[selectedRow][selectedColumn] > 0) {
        alert('Seleziona una casella vuota!');
        return;
    }
    
    event.target.textContent = players[activePlayer].symbol; //adding symbol of the player to the cell
    event.target.classList.add('disabled');

    gameData[selectedRow][selectedColumn] = activePlayer + 1; //this is to keep track of the game in the JS
    console.log(gameData);
    
    let winnerId = checkForGameOver();
    console.log(winnerId);
    if (winnerId !== 0){
        endGame(winnerId);
    }
    currentRound++;
    switchPlayer();
}

function endGame (winnerId) {
    gameIsOver = true;
    gameOverElement.style.display = 'block';

    if (winnerId > 0){
        winnerPlayer.textContent ="The winner is "+players[winnerId-1].name;//because winnerId is 1 or 2 but the players index is 0 o 1.
    }
    else {
        winnerPlayer.textContent = "Pareggio, pippe!"
    }
   

}

