//{ Driver Code Starts
// Initial Template for JavaScript

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n');
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let tc = parseInt(readLine());
    while (tc > 0) {
        let arr = readLine().trim().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.findTwoElement(arr);
        console.log(`${ans[0]} ${ans[1]}`);
        console.log("~");
        tc--;
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
    // Function to find two repeating elements in an array of size n.
    findTwoElement(arr) {
        let n = arr.length;

        // Expected sum of first n natural numbers
        let S_n = BigInt(n) * BigInt(n + 1) / BigInt(2);
        // Expected sum of squares of first n natural numbers
        let S2_n = BigInt(n) * BigInt(n + 1) * BigInt(2 * n + 1) / BigInt(6);

        let S = BigInt(0), S2 = BigInt(0);

        // Compute actual sum and sum of squares
        for (let num of arr) {
            let bigNum = BigInt(num);
            S += bigNum;
            S2 += bigNum * bigNum;
        }

        // Equations:
        let diff1 = S - S_n; // (b - a)
        let diff2 = (S2 - S2_n) / diff1; // (b + a)

        // Solving for missing (a) and repeating (b)
        let b = (diff1 + diff2) / BigInt(2); // Repeating number
        let a = b - diff1; // Missing number

        return [Number(b), Number(a)]; // Convert BigInt to Number for output
    }
}
