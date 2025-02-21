//{ Driver Code Starts
function readLine() { return inputString[currentLine++]; }

function main() {
    const t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(x => parseInt(x));
        const solution = new Solution();
        const result = solution.countFibonacciNumbers(arr);
        console.log(result);
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

// User function Template for JavaScript
class Solution {
    countFibonacciNumbers(arr) {
        // Helper function to check if a number is a Fibonacci number
        function isFibonacci(num) {
            if (num === 0 || num === 1) return true;

            let first = 0;
            let second = 1;
            let nextTerm = first + second;

            // Generate Fibonacci numbers until we reach or exceed the given number
            while (nextTerm <= num) {
                if (nextTerm === num) return true;
                first = second;
                second = nextTerm;
                nextTerm = first + second;
            }
            return false;
        }

        let fibonacciCount = 0;

        // Iterate through the array and count Fibonacci numbers
        arr.forEach(currentNumber => {
            if (isFibonacci(currentNumber)) {
                fibonacciCount++;
            }
        });

        return fibonacciCount;
    }
}
