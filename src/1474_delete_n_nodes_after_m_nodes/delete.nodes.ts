class ListNode {
    val: number
    next: ListNode

    constructor(val? : number, listNode?: ListNode) {
        this.val = val
        this.next = listNode
    }
}

function deleteNodes(head: ListNode | null, m: number, n: number): ListNode | null {

    let currentNode: ListNode  = head;
    let lastMNode : ListNode  = head;
    while (currentNode != null) {
        // initialize mCount to m and nCount to n
        let mCount: number = m
        let nCount: number = n;

        // traverse m nodes
        while (currentNode != null && mCount != 0) {
            lastMNode = currentNode;
            currentNode = currentNode.next;
            mCount--;
        }
        // traverse n nodes
        while (currentNode != null && nCount != 0) {
            currentNode = currentNode.next;
            nCount--;
        }
        // delete n nodes
        lastMNode.next = currentNode;
    }
    return head;

};

let head = new ListNode(1, new ListNode(2 , new ListNode(3, null)))
console.log(deleteNodes(head, 1, 1))