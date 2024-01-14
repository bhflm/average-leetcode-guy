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

function mergeLists(list1: ListNode | null, list2: ListNode | null, parent: ListNode | null) {
  console.log('merge lists run');
  let current: ListNode;
  if (!list1 || !list2) {
      console.log('l1', list1, 'l2', list2);
      const a = list1 || list2;
      console.log('a', a);
      return a;
  }
  console.log('List1: ', list1, 'List2: ', list2);
  if (list1.val < list2.val) {
      current = new ListNode(list1.val, list2);
  } else {
      current = new ListNode(list2.val, list1);
  }
  console.log('Current: ', current);

  if (parent){
      parent = current;
      console.log('Parent: ', parent);
  }

  mergeLists(list1.next, list2.next, current)
  // edge case, what happens when we reach the tail ? 
  return current;
};


export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  // we have head 1 and head 2 
  // we need to figure out the smaller and from that set the list onto that
  // are we creating a new list or just reiterating the new list ? 
  // lets try creating a new list 
  return mergeLists(list1, list2, null);;
};