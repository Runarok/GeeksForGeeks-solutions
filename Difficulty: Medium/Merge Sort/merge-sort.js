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
        let arr = readLine().split(' ').map(Number);
        let ob = new Solution();
        ob.mergeSort(arr, 0, arr.length - 1);
        console.log(arr.join(' '));
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} l
 * @param {number} r
 */

class Solution {
    // Function to merge two sorted subarrays into a single sorted array
    merge(arr, low, mid, high) {
        let left = low; // Start index of the left subarray
        let right = mid + 1; // Start index of the right subarray
        let temp = []; // Temporary array to store merged results
        
        // Merge the two subarrays by comparing elements
        while (left <= mid && right <= high) {
            if (arr[left] <= arr[right]) {
                temp.push(arr[left]);
                left++;
            } else {
                temp.push(arr[right]);
                right++;
            }
        }

        // If there are any remaining elements in the left subarray, add them to temp
        while (left <= mid) {
            temp.push(arr[left]);
            left++;
        }

        // If there are any remaining elements in the right subarray, add them to temp
        while (right <= high) {
            temp.push(arr[right]);
            right++;
        }

        // Copy the sorted elements back to the original array
        for (let i = low; i <= high; i++) {
            arr[i] = temp[i - low];
        }
    }

    // Function to perform merge sort on the array
    mergeSort(arr, l, r) {
        // Base case: If the subarray has one or zero elements, it's already sorted
        if (l >= r) return;

        let mid = Math.floor((l + r) / 2); // Find the middle point

        // Recursively sort the left and right halves of the array
        this.mergeSort(arr, l, mid);
        this.mergeSort(arr, mid + 1, r);

        // Merge the sorted halves
        this.merge(arr, l, mid, r);
    }
}
