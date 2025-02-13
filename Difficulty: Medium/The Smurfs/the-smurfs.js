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
        let N = parseInt(input_line[0]);
        
        input_line = readLine().split(' ');
        
        let A = [];
        for(let i=0;i<N;i++)
        {
            A.push(input_line[i]);
        }
        
        let obj = new Solution();
        let ans = obj.minFind(N, A);
        if(ans==-0)
        ans=0;
        console.log(ans);
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number} n
 * @param {number[]} a
 * @returns {number}
 */

class Solution {
    // Function to find minimum element in sorted and rotated array.
    minFind(n, a) {
        let r = 0, g = 0, b = 0;

        // Count occurrences of 'R', 'G', and 'B'
        for (let i = 0; i < n; i++) {
            if (a[i] === 'R') r++;
            else if (a[i] === 'G') g++;
            else if (a[i] === 'B') b++;
        }

        // If all elements are the same, return n
        if ((r === n) || (g === n) || (b === n)) return n;

        // Check if the modulos of r, g, and b are the same
        return (r % 2 === g % 2) && (g % 2 === b % 2) ? 2 : 1;
    }
}
