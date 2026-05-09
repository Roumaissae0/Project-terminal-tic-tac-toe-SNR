/*
    Given a move and a board (an array of arrays), return true if the move is valid.
        A move is represented by 2 numbers separated by a comma.
        The first number is the row (1, 2 or 3) and the second number is the column (1, 2 or 3).
            Some valid example moves are 1,3 and 2,2.
            Some invalid examples are 0,1 and 2-1.
    Also, a move can only be made in a free space ('_') on the board.
    If the move is not valid:
        - you can output 'Try again...'
        - and then return false
    Testing your function by calling it with some values. An example board is:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X'] 
        ]; 
*/
// Implement this at the end if you have time, otherwise you can help your teammates!
function validateMove(move, board) {
  const parts = move.split(",");
  if (parts.length !== 2) {
    console.log("Try again...");
    return false;
  }
  const row = Number(parts[0]);
  const col = Number(parts[1]);

  // Check row/col are 1, 2, or 3
  if (![1, 2, 3].includes(row) || ![1, 2, 3].includes(col)) {
    console.log("Try again...");
    return false;
  }

  // Check if the space is free
  if (board[row - 1][col - 1] !== "_") {
    console.log("Try again...");
    return false;
  }
  return true;
}

/*
    Given 3 parameters:
        - a board (an array of arrays)
        - a move (2 numbers separated by a comma)
        - a player ('X' or 'O'):
    Check that the move is valid using the validateMove function.
        If the move is not valid, the function should just return false.
        If the move is valid, the function should:
            - Update the board with the player's value ('X' or 'O') in the correct position
            - Return true
*/
export function makeMove(board, move, player) {
  if (!validateMove(move, board)) {
    return false;
  }
  const [row, col] = move.split(",").map(number);
  board[row - 1][col - 1] = player;
  return true;
}
