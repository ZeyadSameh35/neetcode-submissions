class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
    let right = heights.length - 1;
    let maxWater = 0;

    while (left < right) {
        let width = right - left;
        let currWater = Math.min(heights[left], heights[right]) * width;
        maxWater = Math.max(maxWater, currWater);

        // Move the pointer at the smaller heights
        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }
return maxWater;
    }
}
