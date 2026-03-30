class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean} Prote
     */
    searchMatrix(matrix, target) {
        const ROWS = matrix.length;
        const COLUMNS = matrix[0].length;
        for (let i = 0 ; i < ROWS ; i++){
         let l = 0;
        let r = COLUMNS - 1;
        while (l <= r){
             let m = Math.floor(l + ((r-l)/2));
            if(matrix[i][m] < target){
                l = m + 1;
            }
            else if (matrix[i][m] > target){
                r = m - 1;
            }
            else if (matrix[i][m] === target) {
                return true;
            }
        }
            
        }
        return false;
    }
}