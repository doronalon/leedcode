// * Definition for singly-linked list.
// export class ListNode {
//     val: number
//     next: ListNode | null
//
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.next = (next === undefined ? null : next)
//     }
// }

// */

/**
 * Merge two sorted linked lists and return it as a new sorted list.
 *
 *   Time Complexity: O(m + n)
 *   Space Complexity: O(m + n)
 *
 *   Input: 1->2->4, 1->3->4
 *   Output: 1->1->2->3->4->4
 */
import {ListNode} from '../listNode'

const mergeTwoLists = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2
    }
}

let l3: ListNode = new ListNode(5, null)
let l2: ListNode = new ListNode(3, l3)
let l1 : ListNode = new ListNode(1, l2)


let l6: ListNode = new ListNode(6, null)
let l5: ListNode = new ListNode(4, l6)
let l4 : ListNode = new ListNode(2, l5)

console.log(mergeTwoLists(l1, l4))


