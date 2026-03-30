class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
   
    countBits(n) {
         function hammingWeight(n) {
          let count = 0;
  while (n > 0) {
    count += n & 1;  // add last bit
    n >>= 1;         // shift right
  }
  return count;
}
        let res = [];
        for (let i = 0 ; i <= n ; i++){
            let count = 0;
            count = hammingWeight(i);
            res.push(count);
        }
        return res;
    }
}
