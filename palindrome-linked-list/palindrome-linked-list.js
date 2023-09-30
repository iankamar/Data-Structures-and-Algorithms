/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function(head) {
    let straight = '';
    let reversed = '';
    while (head) {
        straight += head.val;
        reversed = head.val + reversed;
        head = head.next;
    };
    return straight === reversed;
};