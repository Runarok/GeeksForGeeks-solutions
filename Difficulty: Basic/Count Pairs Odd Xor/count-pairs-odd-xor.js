//{ Driver Code Starts
function readLine() { return inputString[currentLine++]; }

function main() {
    const t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(x => parseInt(x));
        const solution = new Solution();
        const ans = solution.countOddXorPairs(arr);
        console.log(ans);
        console.log("~");
    }
}

// Adapted for the provided input format
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

// } Driver Code Ends

class Solution {
    countOddXorPairs(arr) {
        // Initialize counters for odd and even numbers
        let oddCount = 0, evenCount = 0;

        // Loop through the array to count odd and even numbers
        for (let num of arr) {
            if (num % 2 === 0) {
                evenCount++;  // Increment even count if the number is even
            } else {
                oddCount++;   // Increment odd count if the number is odd
            }
        }

        // Return the product of oddCount and evenCount as the result
        return oddCount * evenCount;
    }
}
