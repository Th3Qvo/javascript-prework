
function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
        return 'papier';
    } else if(argMoveId == 3){
        return 'nożyce';
    } else{
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
    }
  }

// RUCH KOMPUTERA

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Ruch komputera: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*
if(randomNumber == 1) {
  computerMove = 'kamień';
} else if(randomNumber == 2) {
    computerMove = 'papier';
} else(randomNumber == 3)
    computerMove = 'nożyce';
*/

printMessage('Ruch komputera: ' + computerMove);

// RUCH GRACZA

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*
if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == '2') {
    playerMove = 'papier;'
} else(playerInput == '3')
    playerMove = 'nożyce';

printMessage('Twój ruch to: ' + playerMove);
*/

printMessage('Ruch gracza: ' + playerMove);

// WYNIK GRY

/*
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
    */

function displayResult(argComputerMove, argPlayerMove){
    console.log('wywyłano displayResult');
    console.log('argumenty: ' + argComputerMove + ' ' + argPlayerMove);
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        return ('Wygrałeś!');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        return ('Wygrałeś!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        return ('Wygrałeś!');
    } else if(argComputerMove == argPlayerMove){
        return ('Remis!');
    } else if(argPlayerMove == 'nieznany ruch'){
        return ('Proszę podaj wartość 1 -3');
    } else{
        return ('Przegrałeś!');
    }
}

printMessage(displayResult(computerMove, playerMove));