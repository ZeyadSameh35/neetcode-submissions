

class Solution {
    public int largestRectangleArea(int[] heights) {
        if (heights == null || heights.length == 0) return 0; // ✅ guard clause

        int maxArea = 0;
        Stack<int[]> temp = new Stack<>();

        for (int i = 0; i < heights.length; i++) {
            int start = i;
            int h = heights[i];

            while (!temp.isEmpty() && temp.peek()[1] > h) {
                int[] popped = temp.pop();
                int index = popped[0];
                int height = popped[1];
                maxArea = Math.max(maxArea, height * (i - index));
                start = index;
            }
            temp.push(new int[]{start, h});
        }

        while (!temp.isEmpty()) {
            int[] popped = temp.pop();
            int index = popped[0];
            int height = popped[1];
            maxArea = Math.max(maxArea, height * (heights.length - index));
        }

        return maxArea;
    }
}