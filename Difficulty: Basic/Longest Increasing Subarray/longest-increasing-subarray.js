//{ Driver Code Starts
// Initial Template for javascript

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

// Position this line where user code will be pasted.

function main() {
    let t = parseInt(readLine());
    let solution = new Solution();

    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x));
        let ans = solution.lenOfLongIncSubArr(arr);
        console.log(ans);
        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    // Function to find the length of the longest increasing subarray
    lenOfLongIncSubArr(arr) {
        // Initialize the size of the array, left pointer, and the result variable to track the longest length
        let size = arr.length;
        let left = 0, right = size, res = 1;

        // Iterate through the array to find increasing subarrays
        while (left < size - 1) {
            let currSize = 1;

            // While the next element is greater than the current, continue counting the increasing subarray
            while (arr[left + 1] > arr[left]) {
                left += 1;
                currSize += 1;

                // Update the result if the current subarray is longer
                if (currSize > res) {
                    res = currSize;
                }
            }

            // Move the left pointer to the next element
            left++;
        }

        // Return the length of the longest increasing subarray
        return res;
    }
}
