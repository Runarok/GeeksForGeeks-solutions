//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
function main() {
    const t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(Number);
        const solution = new Solution();
        console.log(solution.maxPerimeter(arr));
        console.log("~");
    }
}

// Handle input in the same way as specified in the preferred format
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
    // Function to find the maximum perimeter of a triangle that can be formed using the elements of the array
    maxPerimeter(arr) {
        // Sort the array in descending order
        arr.sort((a, b) => b - a);

        // Iterate through the sorted array to check for the largest valid triangle
        for (let i = 0; i < arr.length - 2; i++) {
            let a = arr[i], b = arr[i + 1], c = arr[i + 2];

            // Check if the current triplet forms a valid triangle (a < b + c)
            if (a < b + c) {
                return a + b + c;  // Return the perimeter of the triangle
            }
        }

        // Return -1 if no valid triangle can be formed
        return -1;
    }
}

