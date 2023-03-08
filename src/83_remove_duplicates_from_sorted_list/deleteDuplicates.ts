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
let deleteDuplicates = (head: ListNode): ListNode => {
    // let current = head
    // while (current !== null && current.next !== null) {
    //     if (current.next.val == current.val) {
    //         current.next = current.next.next;
    //     } else {
    //         current = current.next;
    //     }
    // }
    // return head;

    let current : ListNode = head

    while (current && current.next){
        if( current.val === current.next.val){
            current.next = current.next.next? current.next.next : null
        }  else {
            current = current.next
        }
    }
    return head
}


let ln: ListNode = new ListNode(1, new ListNode(1, new ListNode(3, new ListNode(3, null))))


console.info(deleteDuplicates(ln))


