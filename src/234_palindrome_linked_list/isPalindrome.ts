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
import {ListNode} from '../listNode'


function isPalindrome(head: ListNode | null): boolean {
    let str: string = ''
    while (head !== null){
        str = str.concat(String(head.val))
        head = head.next
    }

    return str === str.split('').reverse().join('')
};

let l3 = {
    val: 1,
    next: null
}

let l2 = {
    val: 2,
    next: l3
}

let l1 = {
    val: 3,
    next: l2
}

console.log(isPalindrome(l1))