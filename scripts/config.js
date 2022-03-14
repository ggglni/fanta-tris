function openPlayerConfig(){
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig(){
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
}

function savePlayerConfig(event){
    //prevent standard behaviour of the browser - send a get to server
    event.preventDefault();

    //get data from Form
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('player-name');



}