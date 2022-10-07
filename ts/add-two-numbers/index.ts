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

import { create } from "domain";
import { inspect } from "util";

class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null){
        this.val = (val === undefined) ? 0 : val;
        this.next = (next === undefined) ? null : next;
    }
};

/**
 * Linked lists can only go forward (this implementation ?)
 * So we're gonna start checking for each list each node value, and store it on an array 
 * l1 = 4 -> 5 -> 7 
 * arr = [7,5,4]
 * store linked list numbers
 * 
 * arrayL1 = [7,5,4]
 * so we're gonna need to fill the array backwards 
 * once we did this we're gonna convert the number to a string and later parse it as int, 
 * l1 = [2,4,3], l2 = [5,6,4]
 * '342' + '465' = '807'
 * result = [7,0,8];
 */

type ListNodeOrNull = ListNode | null;

function createListNode(current: number,remaining: number[]): ListNode {
    // If there's no remaining arrays;
    if (remaining.length === 0) {
        return new ListNode(current, null);
    }
    const ln = new ListNode(current,(createListNode(remaining[0], remaining.slice(1,remaining.length))));
    return ln;
};

function listNodeToReversedArray(ln: ListNode| null): number[] {
    if (!ln) {
        return [];
    }
    const toReverse = [];
    let ref = ln;
    if (!ref.next) {
        toReverse.push(ref.val);
        return toReverse;
    }
    while (ref.next) {
        toReverse.push(ref.val);
        ref = ref.next;
        if (ref.next === null) {
            toReverse.push(ref.val);
        }
    }
    const reversed = toReverse.reverse();
    return reversed;
};

const reversedArrToInt = (arr: number[]): number => parseInt(arr.join(''));
const numberToNumberArray = (number: number): number[] => number.toString().split('').reverse().map(each => parseInt(each));

function addTwoNumbers(ln1: ListNode | null, ln2: ListNode|null): number[] {
    const reversedl1 = listNodeToReversedArray(ln1);
    console.log('reversed: ', reversedl1)
    const reversedl2 = listNodeToReversedArray(ln2);
    const suml1 = reversedArrToInt(reversedl1); 
    console.log('suml1: ', suml1);
    const suml2 = reversedArrToInt(reversedl2);
    const result = suml1 + suml2;
    return numberToNumberArray(result);
};


function main() {
    // const l1 = [0], l2 = [0];
    // current problem is that js is bs and converts this to 1e+30, so the sum later on is NaN;
    const l1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], l2 = [5,6,4];
    const ln1: ListNode = createListNode(l1[0], l1.slice(1, l1.length));
    const ln2: ListNode = createListNode(l2[0], l2.slice(1, l2.length));
    const lnSum = addTwoNumbers(ln1,ln2);

    const newLn = createListNode(lnSum[0],lnSum.slice(1,lnSum.length));
};

main()