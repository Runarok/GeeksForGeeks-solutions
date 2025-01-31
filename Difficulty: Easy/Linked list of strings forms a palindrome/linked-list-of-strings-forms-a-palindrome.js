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
        let n = parseInt(readLine());
        let arr = readLine().trim().split(" ");
        let list = new Node(arr[0]);
        let tail = list;
        for (let j = 1; j < n; j++) {
            tail.next = new Node(arr[j]);
            tail = tail.next;
        }

        let obj = new Solution();
        let res = obj.compute(list);
        if (res)
            console.log("true");
        else
            console.log("false");
    }
}

// } Driver Code Ends


// User function Template for javascript

/*LINKED LIST NODE
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}
*/

/**
 * @param {Node} head
 * @return {boolean}
 */

class Solution {
    // Method to check if the linked list is a palindrome
    compute(head) {
        let tempNode = head; // Initialize a temporary node to traverse the list
        let nodesStr = "";    // Initialize an empty string to store the linked list data
        
        // Traverse the list and concatenate each node's data to the string
        while(tempNode) {
            nodesStr += tempNode.data;
            tempNode = tempNode.next; // Move to the next node
        }

        // Create a reversed version of the string
        let copyStr = nodesStr; 
        let reverseStr = copyStr.split("").reverse().join(""); // Reverse the string
        
        let strLength = reverseStr.length; // Get the length of the reversed string
        
        // Compare the original string with the reversed string
        for(let i = 0; i < strLength; i++) {
            if(nodesStr[i] !== reverseStr[i]) { // If characters don't match, return false
                return false;
            }
        }

        // If all characters match, the linked list is a palindrome, return true
        return true;
    }
}