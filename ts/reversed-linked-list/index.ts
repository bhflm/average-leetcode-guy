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
function reverse(current: ListNode | null, newParent: ListNode | null) {
  const next = current.next;

  current.next = newParent;
  if (!next) {
      // this means its tail of ll
      return current;
  }
  return reverse(next,current)
};

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) {
      return null;
  }
  return reverse(head, null);
};