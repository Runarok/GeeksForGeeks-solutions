//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;



process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on("end", (_) => {
    inputString = inputString
        .trim()
        .split("\n")
        .map((string) => {
            return string.trim();
        });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

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
        let N = parseInt(readLine());
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let head = new Node(arr[0]);
        let tail = head;
        for (let j = 1; j < N; j++) {
            tail.next = new Node(arr[j]);
            tail = tail.next;
        }

        let obj = new Solution();
        let res = obj.deleteHead(head);
        printList(res);

    
console.log("~");
}

}

// } Driver Code Ends

// User-defined function Template for JavaScript  

/**  
 * Removes the head node from the linked list and returns the new head.  
 * @param {Node} firstNode - The head of the linked list  
 * @return {Node} - The new head after deletion  
 */  

class Solution {  
    deleteHead(firstNode) {  
        // Move the head pointer to the next node  
        return firstNode = firstNode.next;  
    }  
}  
