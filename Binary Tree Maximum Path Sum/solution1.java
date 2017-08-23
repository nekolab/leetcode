/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */

class Solution {
    private int maxPath = Integer.MIN_VALUE;
    
    public int maxPathSum(TreeNode root) {
        this.findMaxPath(root);
        return this.maxPath;
    }
    
    public int findMaxPath(TreeNode root) {
        if (root == null) {
            return 0;
        }
        
        this.maxPath = Math.max(this.maxPath, root.val);
            
        if (root.left == null && root.right == null) {
            return root.val;
        }
        
        int left = this.findMaxPath(root.left);
        int right = this.findMaxPath(root.right);
        
        this.maxPath = Math.max(this.maxPath, root.val + left);
        this.maxPath = Math.max(this.maxPath, root.val + right);
        this.maxPath = Math.max(this.maxPath, root.val + left + right);
        
        return root.val + Math.max(Math.max(left, right), 0);
    }
}