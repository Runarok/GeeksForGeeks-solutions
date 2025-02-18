//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
//  Driver code
const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let inputLines = [];
let currentLine = 0;

rl.on('line', (line) => { inputLines.push(line.trim()); });

rl.on('close', () => { main(); });

function readLine() { return inputLines[currentLine++]; }

function main() {
    let tc = parseInt(readLine());
    while (tc > 0) {
        let arr = readLine().split(' ').map(Number);
        let ob = new Solution();
        let k = parseInt(readLine());
        let ans = ob.getIndexInSortedArray(arr, k);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for javascript
class Solution {
    // Function to get the index of an element in a sorted array
    getIndexInSortedArray(arr, k) {
        // Initialize a counter to track the position of element k
        let count = 0;

        // Iterate through the array
        for (let i = 0; i < arr.length; i++) {
            // If the current element is smaller than arr[k], increment the count
            if (arr[i] < arr[k]) {
                count++;
            }

            // If the current element is equal to arr[k] and its index is less than k, increment the count
            if ((arr[i] == arr[k]) && (i < k)) {
                count++;
            }
        }
        // Return the final count which represents the index of element k
        return count;
    }
}
