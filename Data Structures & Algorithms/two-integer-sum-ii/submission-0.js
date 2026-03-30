class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let j = numbers.length-1;
        let i = 0;
      while (i != j){
        if(numbers[i] + numbers[j] == target){
            return [i+1,j+1]
        }
        else if (numbers[i] + numbers[j] < target){
            i++
        }
        else if (numbers[i] + numbers[j] > target){
            j--;
        }
      } 
    }
}
