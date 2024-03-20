var currentPlayer = 'X'; // player x starts
var scoreboard = {X: 0, O: 0}; // default scores are zero
var board = ['', '', '', '', '', '', '', '', '']; // empty board
var winningCombos = [
  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8],
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8],
  [0, 4, 8], 
  [2, 4, 6]
]; // stores all winnning combinations of slots

function move(index) {
  if (board[index] === '') { // if the slot is empty,
                          // the player's move is saved
    board[index] = currentPlayer;
      document.getElementById('board').children[index].innerText = currentPlayer; // update the box to store the player

    if (checkWin(currentPlayer)) {
      alert('Player ' + currentPlayer + ' wins!'); // winning message
      scoreboard[currentPlayer] += 1; // increment score
      updateScoreboard();
      resetBoard();
    } else if (checkDraw()) {
      alert('Draw!');
      resetBoard(); // draw causes an auto reset
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    } // end inner if
  } // end if
} // end move

function checkWin(player) {
  return winningCombos.some(combination => {
    return combination.every(index => {
      return board[index] === player;
    });
  });
} // end checkWin

function checkDraw() {
  return board.every(cell => cell !== '');
} // end checkDraw

function resetBoard() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
} // end resetBoard

function updateScoreboard() {
  document.getElementById('scoreboard').innerText = 'Player X: ' + scoreboard['X'] + ' - Player O: ' + scoreboard['O'];
} // end updateScoreboard

function resetScoreboard() {
  scoreboard = {X: 0, O: 0};
  updateScoreboard();
} // end resetScoreboard
