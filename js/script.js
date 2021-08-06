// RUCH KOMPUTERA

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Ruch komputera: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1) {
  computerMove = 'kamień';
} else if(randomNumber == 2) {
    computerMove = 'papier';
} else(randomNumber == 3)
    computerMove = 'nożyce';

printMessage('Mój ruch to: ' + computerMove);

// RUCH GRACZA

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == '2') {
    playerMove = 'papier;'
} else(playerInput == '3')
    playerMove = 'nożyce';

printMessage('Twój ruch to: ' + playerMove);

// WYNIK GRY

if(computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('WYGRAŁEŚ!');
  } else if(computerMove == 'papier' && playerMove == 'nożyce') {
    printMessage('WYGRAŁEŚ!');
  } else if(computerMove == 'nożyce' && playerMove == 'kamień') {
    printMessage('WYGRAŁEŚ!');
  } else if(computerMove == "papier" && playerMove == 'kamień') {
    printMessage('PRZEGRAŁEŚ!');
  } else if(computerMove == 'nożyce' && playerMove == 'papier') {
    printMessage('PRZEGRAŁEŚ!');
  } else if(computerMove == 'kamień' && playerMove == 'nożyce') {
    printMessage('PRZEGRAŁEŚ!');
  } else if(computerMove == 'kamień' && playerMove == 'kamień') {
    printMessage('REMIS!');
  } else if(computerMove == 'papier' && playerMove == 'papier') {
    printMessage('REMIS!');
  } else if(computerMove == 'nożyce' && playerMove == 'nożyce') {
    printMessage('REMIS!');
  } else (playerMove == 'nieznany ruch')
    printMessage('Proszę podaj wartość 1 - 3')