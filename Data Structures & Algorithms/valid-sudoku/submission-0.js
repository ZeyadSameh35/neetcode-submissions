class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    // helper to check duplicates ignoring "."
    function hasDuplicates(arr) {
      const seen = new Set();
      for (let val of arr) {
        if (val !== ".") {
          if (seen.has(val)) {
            return true; // duplicate found
          }
          seen.add(val);
        }
      }
      return false;
    }

    // check all rows
    for (let i = 0; i < board.length; i++) {
      if (hasDuplicates(board[i])) {
        return false;
      }
    }

    // check all columns
    for (let j = 0; j < board[0].length; j++) {
      let column = [];
      for (let i = 0; i < board.length; i++) {
        column.push(board[i][j]);
      }
      if (hasDuplicates(column)) {
        return false;
      }
    }

    // check all 3x3 sub-boxes
    for (let row = 0; row < 9; row += 3) {
      for (let col = 0; col < 9; col += 3) {
        let subgrid = [];
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            subgrid.push(board[row + i][col + j]);
          }
        }
        if (hasDuplicates(subgrid)) {
          return false;
        }
      }
    }

    return true; // if all checks passed
  }
}
