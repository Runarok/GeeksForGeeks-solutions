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
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.goodStones(n, arr));
        
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} n
 * @param {number[]} arr
 * @returns {number}
*/

class Solution {
    goodStones(n, arr) {
        // 0 -> not visited, 1 -> visiting (in current dfs stack), 2 -> fully processed
        let visited = new Array(n).fill(0);
        
        // Helper function for DFS traversal
        function dfs(i) {
            if (i < 0 || i >= n) {
                // Out of bounds: safe endpoint
                return 2;
            }
            if (visited[i] === 1) {
                // Cycle detected
                return 1;
            }
            if (visited[i] === 2) {
                // Already processed, either good or bad
                return 2;
            }
            
            // Mark the stone as visiting
            visited[i] = 1;
            
            // Move to the next stone based on arr[i]
            let nextIndex = i + arr[i];
            let result = dfs(nextIndex);
            
            // Mark the stone as processed (safe or part of a cycle)
            visited[i] = result;
            return result;
        }

        // Iterate over all stones and run DFS
        for (let i = 0; i < n; i++) {
            if (visited[i] === 0) {
                dfs(i);
            }
        }

        // Count the number of good stones
        let goodCount = 0;
        for (let i = 0; i < n; i++) {
            if (visited[i] === 2) {
                goodCount++;
            }
        }

        return goodCount;
    }
}
