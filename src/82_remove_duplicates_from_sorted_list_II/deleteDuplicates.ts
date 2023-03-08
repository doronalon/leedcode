/**
 * Definition for singly-linked list.
 **/
export class ListNode {
    val: number
    next: ListNode

    constructor(val: number, next?: ListNode) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let deleteDuplicates = (head: ListNode): ListNode | null => {

    let current : ListNode = head

    while (current && current.next){
        while(current && current.next && current.val === current.next.val) {
            current = current.next.next ? current.next.next : null
        }
        current = current && current.next ? current.next : null

    }
    return head
}


let ln: ListNode = new ListNode(1, new ListNode(1, new ListNode(3, new ListNode(3, null))))


console.info(deleteDuplicates(ln))


