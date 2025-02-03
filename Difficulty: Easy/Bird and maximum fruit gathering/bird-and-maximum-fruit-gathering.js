//{ Driver Code Starts
function main() {
    const t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const totalTime = parseInt(readLine());
        const arr = readLine().split(' ').map(Number);
        const solution = new Solution();
        console.log(solution.maxFruits(arr, totalTime));
        console.log("~");
    }
}

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

// } Driver Code Ends

class Solution {
    maxFruits(arr, totalTime) {
        let n = arr.length;

        // If totalTime is greater than or equal to the number of trees, return the sum of all fruits
        if (totalTime >= n) {
            return arr.reduce((sum, value) => sum + value, 0);
        }

        // Initialize the sliding window sum for the first 'totalTime' trees
        let currSum = arr.slice(0, totalTime).reduce((sum, value) => sum + value, 0);
        let maxFruits = currSum;

        // Use sliding window to find the maximum sum
        for (let i = totalTime; i < n; i++) {
            currSum += arr[i] - arr[i - totalTime];
            maxFruits = Math.max(maxFruits, currSum);
        }

        return maxFruits;
    }
}
