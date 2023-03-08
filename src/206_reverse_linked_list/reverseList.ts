import {ListNode} from '../listNode'

function reverseList(head: ListNode | null): ListNode | null {

    let perv: ListNode = null
    let current: ListNode = head

    while (current !== null){
        let tmpNode: ListNode = current.next
        current.next = perv
        perv = current
        current = tmpNode
    }
    return perv


};


console.info(reverseList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, null))))), )