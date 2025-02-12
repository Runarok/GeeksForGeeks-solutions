//{ Driver Code Starts

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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let res = obj.minCostClimbingStairs(arr);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends


//Back-end complete function Template for JAVASCRIPT

/**
 * @param {number[]} cost
 * @returns {number}
 */

class Solution {
    // Function to find the minimum cost to reach the top of the stairs
    minCostClimbingStairs(cost) {
        // Initialize an array to store the minimum cost at each step
        let final = new Array(cost.length).fill(0);
        
        // The cost to reach the first and second steps is just the given cost for those steps
        final[0] = cost[0];
        final[1] = cost[1];
        
        // Iterate through the remaining steps and calculate the minimum cost to reach each step
        for (let i = 2; i < cost.length; i++) {
            final[i] = cost[i] + Math.min(final[i - 1], final[i - 2]); // Take the min of two previous steps
        }
        
        // The answer is the minimum cost between the last two steps, as you can reach the top from either
        return Math.min(final[cost.length - 1], final[cost.length - 2]);
    }
}
