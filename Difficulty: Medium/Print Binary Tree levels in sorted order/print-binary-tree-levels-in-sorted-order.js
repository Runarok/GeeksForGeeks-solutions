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
        let n = parseInt(readLine());
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.binTreeSortedLevels(arr,n);
        for(let i=0; i<res.length; i++)
        {
            let s = "";
            for(let j=0; j<res[i].length; j++)
            {
                s+=res[i][j];
                s+=" ";
            }
            console.log(s);
        }
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
*/

class Solution {
    // Function to return the binary tree's sorted levels
    binTreeSortedLevels(arr, n) {
        let res = [];
        let l = [];
        let i = 0;
        let j = 0;

        // Iterate over the array and process each level
        while (i < n) {
            // Determine the number of elements in the current level (2^j)
            let mini = Math.min(n, Math.pow(2, j));
            
            // Extract the current level and sort it
            l = arr.slice(i, i + mini);
            l.sort((a, b) => a - b);
            res.push(l);

            // Update the indices for the next level
            i += Math.pow(2, j);
            j++;
        }

        return res;
    }
}
