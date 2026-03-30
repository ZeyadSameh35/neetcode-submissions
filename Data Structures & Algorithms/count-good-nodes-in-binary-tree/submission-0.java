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
    public int goodNodes(TreeNode root) {
       return 1 + validate(root.left , root.val) + validate(root.right , root.val);
    }
     private int validate(TreeNode node,int max) { 
        if (node == null){
            return 0;
        }
        if (node.val >= max) {
            return 1 + validate(node.left , node.val) + validate(node.right , node.val) ;
        }
        else {
           return 0 + validate(node.left , max) + validate(node.right , max) ;
        }

           
    }
}
