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
        let k = parseInt(readLine());
        let ob = new Solution();
        let ans = ob.KswapPermutation(arr, k);
        console.log(ans.join(' '));
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

class Solution {

    // Function to perform K-swap permutation.
    KswapPermutation(arr, k) {
        const n = arr.length;
        
        // Create a map to store the index of each element
        const indexMap = new Map();
        for (let i = 0; i < n; i++) {
            indexMap.set(arr[i], i);  // Store the index of each element
        }
    
        for (let i = 0; i < n && k > 0; i++) {
            // The value that should be at the current position
            const largestVal = n - i;
    
            // If the current position already has the largest value, skip it
            if (arr[i] === largestVal) continue;
    
            // Index of the largest value
            const largestIdx = indexMap.get(largestVal);
    
            // Swap the current element with the largest element
            [arr[i], arr[largestIdx]] = [arr[largestIdx], arr[i]];
    
            // Update the indices in the map after swapping
            indexMap.set(arr[i], i);  // Update index for the current element
            indexMap.set(arr[largestIdx], largestIdx);  // Update index for the swapped element
    
            // Decrease the number of swaps left
            k--;
        }
    
        return arr;  // Return the final array after performing the swaps
    }
}
