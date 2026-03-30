class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let result = 0;
  
  for (let i = 0; i < 32; i++) {
    result <<= 1;      // make space for the next bit
    result |= n & 1;   // add the last bit of n
    n >>= 1;           // shift n right
  }
  
  return result >>> 0; // ensure unsigned 32-bit
}
    }

