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
        let exits = readLine().split(' ').map(x => parseInt(x));
        let sln = new Solution();
        let res = sln.maxWeightCell(exits);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends


/**
 * Function to find the index of the cell with the maximum weight
 * based on the exit values and their corresponding row indices
 * @param {number[]} exits - Array where each element indicates the exit of the corresponding row
 * @return {number} - The index of the cell with the maximum weight
 */
class Solution {
    maxWeightCell(exits) {
        const n = exits.length;
        let weights = new Array(n).fill(0);
        
        // Calculate the weights for each cell
        for (let i = 0; i < n; i++) {
            if (exits[i] >= 0 && exits[i] < n) {
                weights[exits[i]] += i;
            }
        }
        
        // Find the index with the maximum weight
        let maxWeight = -1;
        let maxIndex = -1;
        for (let i = 0; i < n; i++) {
            if (weights[i] > maxWeight || (weights[i] === maxWeight && i > maxIndex)) {
                maxWeight = weights[i];
                maxIndex = i;
            }
        }
        
        return maxIndex;  // Return the index of the maximum weight
    }
}
