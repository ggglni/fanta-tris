let editedPlayer = 0;

const players = [
    { name: '', 
      symbol: 'X' },
      { name: '', 
      symbol: 'O' },
 ]


const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutput = document.getElementById('config-errors');


const editPlayer1btn = document.getElementById('edit-player-1');
const editPlayer2btn = document.getElementById('edit-player-2');
const cancelConfigBtn = document.getElementById('close-overlay');

editPlayer1btn.addEventListener('click',openPlayerConfig);
editPlayer2btn.addEventListener('click',openPlayerConfig);
cancelConfigBtn.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click',closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);