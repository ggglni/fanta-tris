function openPlayerConfig(event){
    editedPlayer = +event.target.dataset.playerid;
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig(){
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutput.textContent = ''; //remove error text
    formElement.firstElementChild.lastElementChild.value = '';
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

    const updatedPlayerData = document.getElementById('giocatore-'+editedPlayer);
    updatedPlayerData.children[1].textContent = enteredPlayerName; //access second child of that ID element

    players[editedPlayer - 1].name = enteredPlayerName; // 1-1=0 (first player) or 2-1 = 1 (second player)
    console.log(players[editedPlayer - 1]);
    
    closePlayerConfig(); //to close automatically the overlay
}