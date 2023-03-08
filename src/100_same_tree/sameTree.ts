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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p: TreeNode, q: TreeNode): boolean => {
    if( p === null && q === null) {
        return true
    } else if (p === null || q === null){
        return false
    } else if (p.val !== q.val){
        return false
    } else {
        return isSameTree(p.right, q.right) && isSameTree(p.left, q.left)
    }

};