//{ Driver Code Starts
function main() {
    const t = parseInt(readLine(), 10);
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(Number);
        const ob = new Solution();
        const ans = ob.findSmallest(arr);
        console.log(ans);
        console.log("~");
    }
}

// Input handling (inputjs() style)
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }
// } Driver Code Ends

class Solution {
    // Function to find the smallest missing positive integer
    findSmallest(arr) {
        let smallest = 1;  // Start with the smallest possible positive integer

        // Iterate through the sorted array
        for (const num of arr) {
            // If the current number is greater than the smallest, we've found a gap
            if (num > smallest) {
                break;  // No need to check further, as we can't form the smallest value
            }
            smallest += num;  // Otherwise, add the number to the current smallest value
        }

        return smallest;  // Return the smallest missing positive integer
    }
}
