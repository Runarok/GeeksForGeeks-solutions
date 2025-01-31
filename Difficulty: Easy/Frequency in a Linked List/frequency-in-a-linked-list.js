//{ Driver Code Starts
// Initial Template for javascript

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x));
        let head = new Node(arr[0]);
        let tail = head;
        for (let j = 1; j < arr.length; j++) {
            tail.next = new Node(arr[j]);
            tail = tail.next;
        }
        let key = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.count(head, key));
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} head
 * @param {number} key
 * @returns {number}
 */

class Solution {
    count(head, key) {
        let count = 0;  // Initialize a counter to track occurrences of the key
        let current = head;  // Start with the head of the linked list
        
        // Traverse the entire linked list
        while (current !== null) {
            if (current.data === key) {
                count++;  // Increment the counter if the node's data matches the key
            }
            current = current.next;  // Move to the next node in the list
        }
        
        // Return the total count of occurrences of the key
        return count;
    }
}
