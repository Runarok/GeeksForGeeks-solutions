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

        let n = parseInt(readLine());

        let d = parseInt(readLine());

        let obj = new Solution();
        let res = obj.getCount(n, d);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

class Solution {
    // Function to get sum of digits of a number.
    sumOfDigit(K) {
        let sod = 0;  // Initialize the sum of digits to 0
        while (K) {
            sod += K % 10;  // Add the last digit to sum
            K = Math.floor(K / 10);  // Remove the last digit
        }
        return sod;  // Return the total sum of digits
    }

    // Function to get the count of numbers satisfying the conditions.
    getCount(N, D) {
        // Binary Search to get the least number satisfying the conditions.
        let low = 1;  // Start with the lowest possible value
        let high = N; // The upper bound is N, as we're counting numbers <= N

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);  // Find the middle value

            // Check if the condition is satisfied: mid - sum of digits(mid) < D
            if (mid - this.sumOfDigit(mid) < D) {
                low = mid + 1;  // If condition is not met, search in the upper half
            } else {
                high = mid - 1;  // If condition is met, search in the lower half
            }
        }

        // After binary search, 'high' will be the largest value that does not satisfy the condition.
        // The answer is the difference between N and 'high', which gives the count of numbers satisfying the condition.
        return N - high;
    }
}
