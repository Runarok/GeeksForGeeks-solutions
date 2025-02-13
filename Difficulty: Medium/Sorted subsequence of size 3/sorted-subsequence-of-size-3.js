//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.

function isSubSequence(v1, v2) {
    const m = v2.length;
    const n = v1.length;
    let j = 0; // For index of v2
    // Traverse v1 and v2
    for (let i = 0; i < n; i++) {
        if (j < m && v1[i] === v2[j]) {
            j++;
        }
    }
    return j === m;
}

const readline = require('readline');

const rl = readline.createInterface({input : process.stdin, output : process.stdout});

const inputLines = [];
rl.on('line', (line) => { inputLines.push(line); });

rl.on('close', () => {
    const t = parseInt(inputLines[0]);
    let currentIndex = 1;

    for (let i = 0; i < t; i++) {
        const arr = inputLines[currentIndex].split(' ').map(Number);
        const n = arr.length;
        const obj = new Solution();
        const res = obj.find3Numbers(arr);

        if (res.length !== 0 && res.length !== 3) {
            console.log(-1);
        } else {
            if (res.length === 0) {
                console.log(0);
            } else if (res[0] < res[1] && res[1] < res[2] && isSubSequence(arr, res)) {
                console.log(1);
            } else {
                console.log(-1);
            }
        }
        console.log("~");

        currentIndex++;
    }
});
// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    find3Numbers(arr) {
        let n = arr.length;
        
        // Arrays to store smallest and largest values
        let smallest = new Array(n);
        let largest = new Array(n);
        
        // Array to store the required subsequence
        let subsequence = [];

        // Initialize the first element in smallest array
        smallest[0] = arr[0];

        // Fill the smallest array with the minimum value encountered so far
        for (let i = 1; i < n; i++) {
            smallest[i] = Math.min(smallest[i - 1], arr[i]);
        }

        // Initialize the last element in largest array
        largest[n - 1] = arr[n - 1];

        // Fill the largest array with the maximum value encountered so far
        for (let i = n - 2; i >= 0; i--) {
            largest[i] = Math.max(largest[i + 1], arr[i]);
        }

        // Find a valid triplet
        for (let i = 0; i < n; i++) {
            if (arr[i] > smallest[i] && arr[i] < largest[i]) {
                subsequence.push(smallest[i], arr[i], largest[i]);
                break;
            }
        }

        return subsequence;
    }
}
