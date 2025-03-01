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

        let obj = new Solution();
        let res = obj.nthTribonacci(n);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends

class Solution {
    /**
    * @param {number} n
    * @returns {number}
    */
    nthTribonacci(n) {
        // Base cases for the first three numbers in the Tribonacci sequence
        if (n <= 1) {
            return n;
        }
        if (n == 2) {
            return 1;
        }

        // Initialize variables to store the last three Tribonacci numbers
        var current = 0;
        var prev = 1;
        var prev1 = 1;
        var prev2 = 0;

        // Loop to calculate the nth Tribonacci number
        for (var i = 3; i <= n; i++) {
            current = prev + prev1 + prev2;  // Sum of the last three numbers
            prev2 = prev1;  // Move the second previous to the third previous
            prev1 = prev;   // Move the previous to the second previous
            prev = current; // Set the current to the previous
        }

        // Return the nth Tribonacci number
        return current;
    }
}
