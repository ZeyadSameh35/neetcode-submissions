class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const ROW = board.length;
        const COLUMN = board[0].length;
        const path = new Set();
        let i = 0;
        const dfs = (r,c,i) =>{
            if(i === word.length){
                return true;
            }
            if(
                r < 0 ||
                c < 0 ||
                r >= ROW ||
                c >= COLUMN ||
                path.has((`${r},${c}`)) ||
                board[r][c] !== word[i]
            )
            {
                return false
            }
            path.add((`${r},${c}`));
            const res =
                dfs(r + 1, c, i + 1) ||
                dfs(r - 1, c, i + 1) ||
                dfs(r, c + 1, i + 1) ||
                dfs(r, c - 1, i + 1);
            path.delete(`${r},${c}`);
            return res;
        }


        for (let i = 0 ; i < ROW ; i++){
            for (let j = 0 ; j < COLUMN ; j++){
                if (dfs(i, j, 0)) return true;
            }
        }
        return false;
    }
}
