/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function(head) {
    let start = head;
    let set = new Set();
    let prev;
    while (head) {
        if(set.has(head.val)) {
            prev.next = head.next;
            head = head.next;
        } else {
            set.add(head.val);
            prev = head;
            head = head.next;
        }
    }
    return start;
};