function openPlayerConfig(event){
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
    const selectedPlayerId = +event.target.dataSet.playerId;
    editedPlayer = selectedPlayerId;
}

function closePlayerConfig(){
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutput.textContent = ''; //remove error text
}

function savePlayerConfig(event){
    //prevent standard behaviour of the browser - send a get to server
    event.preventDefault();

    //get data from Form
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('player-name').trim();

    if (!enteredPlayerName){ //equivalent of (enteredPlayerName === '')
        event.target.firstElementChild.classList.add('error');
        errorsOutput.textContent = "please enter a valid name";
        return;
    }

    const updatedPlayerData = document.getElementById('giocatore-'+editedPlayer)
}