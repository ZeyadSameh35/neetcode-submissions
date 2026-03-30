class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
    let res = [];

    for (let l = 0 ; l < nums.length ;l++){
        console.log(nums.slice(l,l+k));
        if(l+k <=nums.length){
        res[l] = this.maxArray(nums.slice(l,l+k));
        }
       
    }

    return res;
    }

 maxArray(arr) {
  return Math.max(...arr);
}


}
