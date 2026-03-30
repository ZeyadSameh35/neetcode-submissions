class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let obj = {}
        for (let num of nums){
            obj[num] = (obj[num] || 0) + 1
        }
        console.log(obj);
    for (let key in obj){
        if (obj[key] == 1){
            return key;
        }
    }
    }
}
