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
    for (let i = 0; i < t; i++) {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);

        let obj = new Solution();
        let ans = obj.countWays(n);
        if (ans == -0n) ans = 0n;
        console.log(ans.toString());

        console.log("~");
    }
}

// } Driver Code Ends


class Solution {
    // Function to count number of ways to reach the nth stair.
    countWays(n) {
        // Handle base cases
        if (n === 0 || n === 1) {
            return BigInt(1); // 1 way to stay at the ground level or reach the first stair
        }
        
        let prev1 = BigInt(1); // ways to reach the (n-1)th stair
        let prev2 = BigInt(1); // ways to reach the (n-2)th stair
        let current = BigInt(0); // ways to reach the nth stair
        
        for (let i = 2; i <= n; i++) {
            current = prev1 + prev2; // Current is the sum of previous two
            prev2 = prev1; // Update prev2 to the previous step
            prev1 = current; // Update prev1 to the current step
        }
        
        return current;
    }
}
