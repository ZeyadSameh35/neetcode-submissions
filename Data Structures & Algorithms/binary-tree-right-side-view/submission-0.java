/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        List<List<Integer>> temp1 = new ArrayList<>();
        Queue<TreeNode> temp = new LinkedList<>();
        temp.add(root);
        while (!temp.isEmpty()){
            List<Integer> level = new ArrayList<>();
            for(int i = temp.size() ; i > 0 ; i--){
                TreeNode node = temp.poll();
                if (node != null){
                    level.add(node.val);
                    temp.add(node.left);
                    temp.add(node.right);
                }
            }
            if (level.size() > 0){
                temp1.add(level);
            }
        }
       for (List<Integer> inner : temp1) {
    int max = Collections.max(inner);
    res.add(max);
}
       return res;
    }
}
