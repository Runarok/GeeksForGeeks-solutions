//{ Driver Code Starts
// Initial Template for javascript

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
        let N = parseInt(input_line[0]);
        
        input_line = readLine().split(' ');
        let arr = new Array(N);
        for(let i=0;i<N;i++)
        {
            arr[i] = parseInt(input_line[i]);
        }
        
        let obj = new Solution();
        let ans = obj.andGate(arr, N);
        if(ans === -0)
            ans = 0;
        console.log(ans.toString());
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number[]}
*/

class Solution {
    // Function to perform AND operation on the given array.
    andGate(arr, N) {
        // Check if any element in the array is 0
        // If there is a 0, AND operation will result in 0, otherwise 1
        return arr.includes(0) ? 0 : 1;
    }
}
