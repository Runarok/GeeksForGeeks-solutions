//{ Driver Code Starts
// Driver code
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
        let k = parseInt(readLine());
        let arr = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.Search(arr, k);
        if (ans) {
            console.log("true");
        } else {
            console.log("false");
        }
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends


class Solution {

    // Function to search for the element 'k' in a rotated sorted array
    Search(arr, k) {
        let left = 0, right = arr.length - 1;

        // Binary search loop
        while (left <= right) {
            // Calculate mid index
            let mid = left + Math.floor((right - left) / 2);
            
            // If 'k' is found at the mid, return true
            if (arr[mid] === k) return true;
            
            // If elements at left, mid, and right are equal, increment left and decrement right
            // This handles duplicates in the array
            if (arr[left] === arr[mid] && arr[mid] === arr[right]) {
                left++;
                right--;
                continue;
            }

            // Check if the left side is sorted
            if (arr[left] <= arr[mid]) {
                // If 'k' is within the sorted left side, adjust the search range
                if (arr[left] <= k && k < arr[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else { // If the right side is sorted
                // If 'k' is within the sorted right side, adjust the search range
                if (arr[mid] < k && k <= arr[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }

        // Return false if 'k' is not found
        return false;
    }
}
