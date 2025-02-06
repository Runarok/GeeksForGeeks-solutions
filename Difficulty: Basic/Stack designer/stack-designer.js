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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));

        let obj = new Solution();
        let res = obj._push(arr);
        obj._pop(res);
    }
}

// } Driver Code Ends

class Solution {

    /**
     * @param {number[]} arr
     * @param {number} n
     * @return {number[]}
     */
    _push(arr) {
        // Create a stack array to simulate the stack behavior
        let stack = [];

        // Push each element from the input array into the stack
        for (let i = 0; i < arr.length; i++) {
            stack.push(arr[i]);
        }

        // Return the stack so it can be passed to the pop function
        return stack;
    }

    /**
     * @param {number[]} s
     */
    _pop(s) {
        // Iterate through the stack and pop elements, printing them
        let result = [];
        while (s.length > 0) {
            result.push(s.pop()); // Pop from the top of the stack
        }

        // Print the elements in the order they are popped
        console.log(result.join(' ')); // Join the numbers with space in between
    }
}
