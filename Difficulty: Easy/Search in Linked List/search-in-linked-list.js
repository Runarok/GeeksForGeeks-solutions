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

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);

        input_line = readLine().split(' ').map(x => parseInt(x));
        let head = new Node(input_line[0]);
        let tail = head;
        for (let i = 1; i < n; i++) {
            tail.next = new Node(input_line[i]);
            tail = tail.next;
        }
        input_line = readLine().split(' ');
        let key = parseInt(input_line[0]);

        let obj = new Solution();
        let ans = obj.searchKey(n, head, key);

        console.log(ans ? "true" : "false");

        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * Node of a linked list
 * class Node {
 *     constructor(data){
 *         this.data = data;
 *         this.next = null;
 *     }
 * }
 */

class Solution {
    /**
     * @param {number} n
     * @param {Node} head
     * @param {number} key
     * @returns {boolean}
     */
    searchKey(n, head, key) {
        // Code here
        while (head !== null) {
            if (head.data === key) {
                return true;
            }
            head = head.next;
        }
        return false;
    }
}
