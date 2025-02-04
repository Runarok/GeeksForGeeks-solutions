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
        let res = obj.sqNum(n);
        console.log(res);
    }
}

// } Driver Code Ends


class Solution {
    sqNum(n) {
        // If n is less than 0, return 0 as there are no square multiples
        if (n < 0) {
            return 0;
        }

        // Create a set to hold all multiples of perfect squares
        let multiples = new Set();

        // Loop through numbers starting from 2 to the square root of n
        for (let i = 2; i <= Math.sqrt(n); i++) {
            let square = i * i;  // Calculate the square of i

            // For each square, add all its multiples up to n to the set
            for (let j = square; j <= n; j += square) {
                multiples.add(j);
            }
        }

        // Return the number of unique multiples of squares found
        return multiples.size;
    }
}
