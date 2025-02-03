//{ Driver Code Starts
// Initial Template for JavaScript
// Position this line where user code will be pasted.
function main() {
    const t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(Number);
        const solution = new Solution();
        console.log(solution.countIncreasing(arr));
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

// User function Template for JavaScript
class Solution {
    countIncreasing(arr) {
        // Initialize the length of the current increasing subsequence and the total count
        let len = 0, count = 0;

        // Loop through the array to find increasing subsequences
        for (let i = 1; i < arr.length; i++) {
            // Check if the current element is greater than the previous one
            if (arr[i] > arr[i - 1]) {
                len++;  // Increase the length of the current increasing subsequence
                count += len;  // Add the length to the count as we find new subsequences
            } else {
                len = 0;  // Reset the length if the sequence is no longer increasing
            }
        }

        // Return the total count of increasing subsequences
        return count;
    }
}
