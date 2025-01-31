//{ Driver Code Starts
// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString =
        inputString.trim().split("\n").map((string) => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

function printList(head) {
    let s = "";
    while (head) {
        s += head.data;
        s += " ";
        head = head.next;
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));

        let head = new Node(arr[0]);
        let tail = head;
        for (let j = 1; j < arr.length; j++) {
            tail.next = new Node(arr[j]);
            tail = tail.next;
        }
        let obj = new Solution();
        let f = obj.isPalindrome(head);
        if (f)
            console.log("true");
        else
            console.log("false");
    }
}
// } Driver Code Ends


// User function Template for JavaScript

/**
 * @param {Node} head - The head of the linked list.
 * @returns {boolean} - Returns true if the linked list is a palindrome, else false.
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
    // Function to check whether the linked list is a palindrome.
    isPalindrome(head) {
        // If the list is empty or has only one node, it is trivially a palindrome.
        if (head === null || head.next === null) {
            return true;
        }
        
        let slow = head;  // Slow pointer will reach the middle of the list
        let fast = head;  // Fast pointer will reach the end of the list
        
        // Move slow pointer to the middle of the list using two-pointer approach.
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        
        // Reverse the second half of the list starting from the slow pointer.
        let head2 = this.reverseList(slow);
        
        // Check if the first half of the list is identical to the reversed second half.
        let ret = this.isIdentical(head, head2);
        
        // Restore the original list by reversing the second half again.
        this.reverseList(head2);
        
        return ret;  // Return whether the list is a palindrome.
    }
    
    // Helper function to reverse a linked list.
    reverseList(head) {
        let prev = null;
        let curr = head;
        
        // Reverse the list by iterating through it.
        while (curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;  // Return the new head of the reversed list.
    }
    
    // Helper function to check if two linked lists are identical.
    isIdentical(n1, n2) {
        // Traverse both lists and compare corresponding nodes.
        while (n1 && n2) {
            if (n1.data !== n2.data) {
                return false;  // Return false if data does not match.
            }
            n1 = n1.next;
            n2 = n2.next;
        }
        return true;  // Return true if both lists have the same data.
    }
}
