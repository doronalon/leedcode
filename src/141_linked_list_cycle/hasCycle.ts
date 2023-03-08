// Definition for singly-linked list.
class ListLink {
    val: number
    next: ListLink | null

    constructor(val?: number, next?: ListLink | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function hasCycle(head: ListLink | null): boolean {
    if(head === null || head.next === null) {
        return  false
    }
    let fast: ListLink = head.next
    let slow: ListLink = head

    while(fast !== slow) {
        if(fast === null || fast.next === null) {
            return  false
        }
        fast = fast.next.next
        slow = slow.next

        if (slow === fast){
            return true
        }
    }
    return true

};