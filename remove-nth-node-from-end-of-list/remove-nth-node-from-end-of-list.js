/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (!head.next) return null;
    
    let prev = head;
    let toDeleted = head;
    let it = head;
    let count = 1;
    
    while (it.next) {
        it = it.next;
        if (count >= n) {
            prev = toDeleted;
            toDeleted = prev.next;
        }
        count ++;
    }
    if (prev.next === toDeleted.next) {
        head = head.next;
        return head;
    }
    prev.next = toDeleted.next
    return head;
};
