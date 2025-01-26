//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function loopHere(head, tail, position) {
    if (position === 0) return;
    let walk = head;
    for (let i = 1; i < position; i++) walk = walk.next;
    tail.next = walk;
}

function isLoop(head) {
    if (!head) return false;

    let fast = head.next;
    let slow = head;

    while (fast !== slow) {
        if (!fast || !fast.next) return false;
        fast = fast.next.next;
        slow = slow.next;
    }

    return true;
}

function length(head) {
    let res = 0;
    while (head) {
        res++;
        head = head.next;
    }
    return res;
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1.length;
        let head = new Node(input_ar1[0]);
        let tail = head;
        for (let i = 1; i < n; i++) {
            tail.next = new Node(input_ar1[i]);
            tail = tail.next;
        }
        let pos = parseInt(readLine());
        loopHere(head, tail, pos);
        let obj = new Solution();
        obj.removeLoop(head);
        if (isLoop(head) || length(head) !== n)
            console.log("false");
        else
            console.log("true");
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} head
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    // Function to remove a loop in the linked list.
    removeLoop(head) {
        if (!head || !head.next) return true; // No loop if list is empty or has only one node.

        let slow = head;
        let fast = head;
        
        // Step 1: Detect if a loop exists using Floyd's Cycle Detection (Tortoise and Hare)
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            
            if (slow === fast) {
                // Loop detected, now find the node where the loop starts.
                let loopNode = head;
                
                // Step 2: Find the start of the loop
                while (loopNode !== slow) {
                    loopNode = loopNode.next;
                    slow = slow.next;
                }
                
                // Step 3: Remove the loop
                let temp = loopNode;
                while (temp.next !== loopNode) {
                    temp = temp.next;
                }
                temp.next = null;
                return false; // Loop was detected and removed
            }
        }
        
        // No loop detected
        return true;
    }
}
