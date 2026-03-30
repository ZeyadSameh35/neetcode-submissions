class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    const res = [];
    const n = nums.length;
    if (n < 3) return res;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < n - 2; i++) {
      // skip duplicate 'i' values
      if (i > 0 && nums[i] === nums[i - 1]) continue;

      let left = i + 1;
      let right = n - 1;

      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        if (sum === 0) {
          res.push([nums[i], nums[left], nums[right]]);
          left++;
          right--;
          // skip duplicates for left and right
          while (left < right && nums[left] === nums[left - 1]) left++;
          while (left < right && nums[right] === nums[right + 1]) right--;
        } else if (sum < 0) {
          left++;
        } else { // sum > 0
          right--;
        }
      }
    }

    return res;
  }
}
