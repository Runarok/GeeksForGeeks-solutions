//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.

// Initial Template for javascript
// Position this line where user code will be pasted.

const readline = require('readline');

function main() {
    const rl =
        readline.createInterface({input : process.stdin, output : process.stdout});

    let t;
    let testCases = [];
    let inputCount = 0;

    rl.question('', (line) => {
        t = parseInt(line.trim());
        inputCount = t * 2;

        rl.on('line', (line) => {
            testCases.push(line.trim());
            if (testCases.length === inputCount) {
                rl.close();
            }
        });
    });

    rl.on('close', () => {
        const solution = new Solution();
        for (let i = 0; i < t; i++) {
            const arr1 = testCases[2 * i].split(' ').map(Number);
            const arr2 = testCases[2 * i + 1].split(' ').map(Number);
            const res = solution.SumofMiddleElements(arr1, arr2);
            console.log(res);
            console.log("~");
        }
    });
}

main();

// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    // Function to find the sum of the middle two elements after merging two sorted arrays
    SumofMiddleElements(arr1, arr2) {
        let n = arr1.length;  // Length of the first array (assumed same length for both arrays)
        const merged = new Array(2 * n);  // Array to hold the merged elements
        
        let i = 0, j = 0, k = 0;  // Indices for arr1, arr2, and the merged array
        
        // Merge the two sorted arrays into a single sorted array
        while (i < n && j < n) {
            if (arr1[i] < arr2[j]) {
                merged[k++] = arr1[i++];  // Add element from arr1 to merged
            } else {
                merged[k++] = arr2[j++];  // Add element from arr2 to merged
            }
        }
        
        // If any elements are left in arr1, add them to merged
        while (i < n) {
            merged[k++] = arr1[i++];
        }
        
        // If any elements are left in arr2, add them to merged
        while (j < n) {
            merged[k++] = arr2[j++];
        }
        
        // Return the sum of the middle two elements
        return merged[n] + merged[n - 1];
    }
}
