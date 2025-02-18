//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
function main() {
    const t = parseInt(readLine());
    const solution = new Solution();
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(Number);
        const ans = solution.checkIsAP(arr);
        console.log(ans ? 'true' : 'false');
        console.log("~");
    }
}

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

// User function Template for javascript
class Solution {
    
    // Custom sort function for sorting the array in ascending order
    sort(a, b) {
        if (a < b) {
            return a - b;
        }
    }

    // Function to check if the given array forms an arithmetic progression
    checkIsAP(arr) {
        // Get the length of the array
        let n = arr.length;

        // Sort the array using the custom sort function
        arr = arr.sort(this.sort);

        // Calculate the common difference (d) between the first two elements
        let d = arr[1] - arr[0];

        // Check if the difference between consecutive elements is the same
        for (let i = 1; i < n - 1; i++) {
            let diff = arr[i + 1] - arr[i];
            if (diff != d) {
                return false; // If the difference is not consistent, it's not an AP
            }
        }

        // Return true if the array forms an arithmetic progression
        return true;
    }
}
