
// a program that creates a string that represents a grid, using newline
// characters to separate lines. At each position of the grid there is either a
// space or a "#" character. The characters should form a chessboard.
const chessBoard = function chessBoard(n) {
  let output = '';

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {

      // sum of x and y - if it's even: ' ', odd: '#'
      output += ((x + y) & 1) ? '#' : ' ';
    }
    output += '\n';
  }
  return output;
};


module.exports = chessBoard;
