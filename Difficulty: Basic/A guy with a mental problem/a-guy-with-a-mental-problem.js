//{ Driver Code Starts
// Initial Template for JavaScript
// Position this line where user code will be pasted.
function main() {
    const t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const arr1 = readLine().split(' ').map(Number);
        const arr2 = readLine().split(' ').map(Number);
        const solution = new Solution();
        console.log(solution.minTime(arr1, arr2));
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
    minTime(arr1, arr2) {
        let sum1 = 0;
        let sum2 = 0;

        // Calculate sum1 by adding elements from arr1 and arr2 based on even/odd index
        for (let i = 0; i < arr1.length; i++) {
            if (i % 2 === 0) sum1 += arr1[i];    // Add from arr1 at even indices
            else if (i % 2 === 1) sum1 += arr2[i]; // Add from arr2 at odd indices
        }

        // Calculate sum2 by adding elements from arr2 and arr1 based on even/odd index
        for (let i = 0; i < arr2.length; i++) {
            if (i % 2 === 0) sum2 += arr2[i];    // Add from arr2 at even indices
            else if (i % 2 === 1) sum2 += arr1[i]; // Add from arr1 at odd indices
        }

        // Return the smaller of the two sums
        return sum1 < sum2 ? sum1 : sum2;
    }
}
