/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

export class TreeNode {
    val: number
    right: TreeNode
    left: TreeNode

    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

const maxDepth = (root: TreeNode): number => {
    if (root == null) {
        return 0;
    } else {
        let left_height: number = maxDepth(root.left);
        let right_height: number = maxDepth(root.right);
        return Math.max(left_height, right_height) + 1;
    }
};