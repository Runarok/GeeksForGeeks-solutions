//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(
        string => { return string.trim(); });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let input_line = readLine().split(" ");
        let n = parseInt(input_line[0]);
        let k = parseInt(input_line[1]);
        let a = new Array(n);
        input_line = readLine().split(" ");
        for (let i = 0; i < n; i++) a[i] = parseInt(input_line[i]);

        let obj = new Solution();
        let ans = obj.max_of_subarrays(a, n, k);
        let s = "";
        for (let i = 0; i < ans.length; i++) {
            if (ans[i] == -0)
                s += "0";
            else
                s += ans[i];
            s += " ";
        }
        console.log(s);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number[]}
 */
class Solution {
    max_of_subarrays(arr, n, k) {
        let res = []; // Result array to store the maximums of each subarray
        let deque = []; // Deque to store indices of potential maximum elements
        
        // Traverse the array
        for (let i = 0; i < n; i++) {
            // Remove elements that are out of the current window
            if (deque.length > 0 && deque[0] < i - k + 1) {
                deque.shift(); // Remove the first element if it is out of the window
            }
            
            // Remove elements from the deque that are smaller than the current element
            // as they cannot be the maximum in the future windows
            while (deque.length > 0 && arr[deque[deque.length - 1]] <= arr[i]) {
                deque.pop(); // Remove from the end
            }
            
            // Add the current element index to the deque
            deque.push(i);
            
            // If the window has reached size k, add the front of the deque to the result
            if (i >= k - 1) {
                res.push(arr[deque[0]]); // The element at the front of the deque is the largest in the current window
            }
        }
        
        return res;
    }
}
