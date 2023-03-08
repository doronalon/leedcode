/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import {ListNode} from "../listNode";

function removeElements(head: ListNode | null, val: number): ListNode | null {

    let dummy: ListNode = new ListNode(-1)
    dummy.next = head
    let perv: ListNode = dummy
    let current: ListNode = head

    while (current !== null) {
        if (current.val === val) {
            perv.next = current.next
            current = current.next
        } else {
            perv = current
            current = current.next
        }
    }
    return dummy.next
};

let l1: ListNode = {
    val: 1,
    next: null
}

let l2: ListNode = {
    val: 2,
    next: l1
}

let l3: ListNode = {
    val: 3,
    next: l2
}

console.log(removeElements(l3, 2))