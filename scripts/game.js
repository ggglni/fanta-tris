function startNewGame() {

    if (players[0].name === '' || players[1].name === ''){
        alert('Please set custome name players');
        return;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
    gameArea.style.display = 'block';
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
    event.target.textContent = players[activePlayer].symbol; //adding symbol of the player to the cell
    event.target.classList.add('disabled');
    switchPlayer();
    
}