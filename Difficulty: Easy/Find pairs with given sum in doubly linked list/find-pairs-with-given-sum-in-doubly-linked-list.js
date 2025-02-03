//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
// Initial Template for javascript
// Position this line where user code will be pasted.
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
        this.prev = null;
    }
}

function main() {
    let t = parseInt(readLine());
    while (t--) {
        let target = parseInt(readLine());
        let n = parseInt(readLine());
        let a = readLine().split(' ').map(Number);

        let head = new Node(a[0]);
        let tail = head;
        for (let i = 1; i < n; i++) {

            tail.next = new Node(a[i]);
            tail.next.prev = tail;
            tail = tail.next;
        }
        let ob = new Solution();
        let ans = ob.findPairsWithGivenSum(head, target);
        if (ans.length === 0) {
            console.log("-1");
        } else {
            let result = ans.map(pair => `(${pair[0]},${pair[1]})`).join(' ');
            console.log(result);
        }
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for javascript

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//         this.prev = null;
//     }
// }

class Solution {
    // Function to find pairs in the linked list with the given sum
    findPairsWithGivenSum(head, target) {
        // Find the tail node of the linked list
        let tail = this.findTail(head)
        let ans = []
        
        // Traverse the list from both ends
        while (head.data < tail.data) {
            
            // If the sum of current pair matches the target
            if (head.data + tail.data == target) {
                ans.push([head.data, tail.data])  // Add the pair to the result
                head = head.next  // Move the head pointer forward
                tail = tail.prev  // Move the tail pointer backward
            }
            
            // If the sum is greater than target, move the tail pointer backward
            else if (head.data + tail.data > target) {
                tail = tail.prev
            }
            
            // If the sum is less than target, move the head pointer forward
            else {
                head = head.next
            }
        }
        return ans  // Return the result array with all pairs
    }
    
    // Helper function to find the tail node of the linked list
    findTail(head) {
        let curr = head
        // Traverse to the last node
        while (curr.next != null) {
            curr = curr.next
        }
        return curr  // Return the tail node
    }
}
