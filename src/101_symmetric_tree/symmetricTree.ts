/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
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


/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = (root: TreeNode): boolean => {
    return isMirror(root, root)

};

const isMirror = (p: TreeNode, q: TreeNode): boolean => {
    if (p === null && q === null) {
        return true
    } else if (p === null || q === null) {
        return false
    } else {
        return (p.val === q.val) && isMirror(p.left, q.right) && isMirror(p.right, q.left)
    }

};