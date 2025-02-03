//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        input_line = readLine().split(' ');
        let arr = new Array(n);
        for(let i=0;i<n;i++)
        {
            arr[i] = parseInt(input_line[i]);
        }
        let obj = new Solution();
        let ans = obj.print_next_greater_freq(arr, n);
        let s = "";
        for(let i=0;i<ans.length;i++) {
            s+=ans[i];
            s+=" ";
        }
        console.log(s);
    
console.log("~");
}
}
// } Driver Code Ends


// User function Template for JavaScript
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
 */

class Solution {
    // Function to print next greater frequency element for each element.
    print_next_greater_freq(arr, n) {
        let freqMap = new Map();  // Map to store frequency of elements
        let stack = [];  // Stack to keep track of elements for comparison
        let result = new Array(n).fill(-1);  // Array to store the next greater frequency elements

        // Calculate frequency of each element
        for (let i = 0; i < n; i++) {
            freqMap.set(arr[i], freqMap.get(arr[i]) + 1 || 1);
        }

        // Traverse the array and find the next greater frequency element for each element
        for (let i = 0; i < n; i++) {
            // While stack is not empty and the frequency of the current element is greater than
            // the element at the top of the stack, update the result array
            while (stack.length > 0 && freqMap.get(arr[stack[stack.length - 1]]) < freqMap.get(arr[i])) {
                result[stack.pop()] = arr[i];
            }

            // Push the current element index onto the stack
            stack.push(i);
        }

        // Return the result array with next greater frequency elements
        return result;
    }
}
