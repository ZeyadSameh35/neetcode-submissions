class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = {};

        // Count frequencies manually
        for (let i = 0; i < nums.length; i++) {
            if (freqMap[nums[i]] === undefined) {
                freqMap[nums[i]] = 1;
            } else {
                freqMap[nums[i]]++;
            }
        }

        // Convert to array of [num, frequency] and sort by frequency
        let freqArray = [];
        for (let num in freqMap) {
            freqArray.push([parseInt(num), freqMap[num]]);
        }

        freqArray.sort((a, b) => b[1] - a[1]);

        // Collect top k frequent elements
        let result = [];
        for (let i = 0; i < k; i++) {
            result.push(freqArray[i][0]);
        }

        return result;
    }
}
