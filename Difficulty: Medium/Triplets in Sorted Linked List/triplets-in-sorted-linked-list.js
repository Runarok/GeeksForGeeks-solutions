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
        inputString.trim().split("\n").map(string => { return string.trim(); });

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
        let n = input_line.length;
        let head = new Node(parseInt(input_line[0]));
        let tail = head;
        for (let i = 1; i < n; i++) {
            tail.next = new Node(parseInt(input_line[i]));
            tail = tail.next;
        }
        let x = parseInt(readLine());
        let obj = new Solution();
        let res = obj.countTriplets(head, x);
        if (res === -0) res = 0;
        console.log(res);
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @class Node
 * @param {number} data
 */

/**
 * @class Solution
 */

/**
 * @param {Node} head
 * @param {number} x
 * @returns {number}
 */

class Solution {
    countTriplets(head, targetSum) {
        let nodeMap = {}; // Stores node references for quick lookup
        let tripletCount = 0;

        // Populate the map with node values and their references
        for (let current = head; current !== null; current = current.next) {
            nodeMap[current.data] = current;
        }

        // Iterate through each pair of nodes
        for (let first = head; first !== null; first = first.next) {
            for (let second = first.next; second !== null; second = second.next) {
                let pairSum = first.data + second.data;
                let requiredValue = targetSum - pairSum;

                // Check if the required value exists in the list and is distinct
                if (
                    nodeMap[requiredValue] !== undefined &&
                    nodeMap[requiredValue] !== first &&
                    nodeMap[requiredValue] !== second
                ) {
                    tripletCount++;
                }
            }
        }

        // Each triplet is counted three times, so divide by 3
        return Math.floor(tripletCount / 3);
    }
}
