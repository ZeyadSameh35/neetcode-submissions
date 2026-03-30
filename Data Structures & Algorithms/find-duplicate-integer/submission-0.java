 
class Solution {
    public int findDuplicate(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();

        for (int num : nums) {
            // Count occurrences
            map.put(num, map.getOrDefault(num, 0) + 1);

            // If count > 1 → duplicate found
            if (map.get(num) > 1) {
                return num;
            }
        }

        return -1; // should not reach here if there's always a duplicate
    }
}


