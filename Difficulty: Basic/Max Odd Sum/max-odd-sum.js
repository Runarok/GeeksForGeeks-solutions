//{ Driver Code Starts
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

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x));
        let solution = new Solution();
        console.log(solution.findMaxOddSum(arr));
        console.log("~");
    }
}

// } Driver Code Ends

class Solution {
    findMaxOddSum(arr) {
        // Initialize variables
        let maxSum = Number.MIN_VALUE; // Stores the maximum possible sum
        let smallestOdd = Number.MAX_VALUE; // Stores the smallest absolute odd number
        let arrayLength = arr.length;

        // Iterate through the array to calculate the max sum and track the smallest odd number
        for (let i = 0; i < arrayLength; i++) {
            // Update maxSum by including the current element
            maxSum = Math.max(maxSum + arr[i], maxSum);

            // If the current element is odd, update the smallest odd number
            if (arr[i] % 2 !== 0) {
                smallestOdd = Math.min(smallestOdd, Math.abs(arr[i]));
            }
        }

        // If maxSum is already odd, return it; otherwise, subtract the smallest odd number to make it odd
        return (maxSum % 2 !== 0) ? maxSum : maxSum - smallestOdd;
    }
}
