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

var middleNode = function(head) {
    let hi = head, count = 1;
    while (hi.next) {
        hi = hi.next;
        count++;
    }
    console.log(count,'count');
    count = parseInt(count / 2);

    while(count){
        head=head.next;
        count--;
    }
    return head;
};