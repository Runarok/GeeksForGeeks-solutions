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
    let i = 0;
    for(;i<t;i++)
    {
        let input_line = readLine().split(' ').map(x=>parseInt(x));
        let N = input_line[0];
        let obj = new Solution();
        console.log(obj.countSetBits(N))
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Number} N
 * @returns {Number}
*/

class Solution {
    // Function to return sum of count of set bits in the integers from 1 to n.
    countSetBits(N) {
        let count = 0;
        let i = 0;
        
        while ((1 << i) <= N) {
            let total_pairs = Math.floor((N + 1) / (1 << (i + 1)));  // Full (0, 1) cycles
            let remainder = (N + 1) % (1 << (i + 1));  // Extra numbers left
            
            count += total_pairs * (1 << i) + Math.max(0, remainder - (1 << i));
            i++;
        }
        
        return count;
    }
}
