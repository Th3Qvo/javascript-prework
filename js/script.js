
const playGame = function(playerInput){
    clearMessages();
    const getMoveName = function(argMoveId){
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
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);
    printMessage('Ruch komputera: ' + computerMove);
    const playerMove = getMoveName(playerInput);
    printMessage('Ruch gracza: ' + playerMove);
    const displayResult = function(argComputerMove, argPlayerMove){
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
}

document.getElementById('play-rock').addEventListener('click', function(){playGame(1);});
document.getElementById('play-paper').addEventListener('click', function(){playGame(2);});
document.getElementById('play-scissors').addEventListener('click', function(){playGame(3);});

