//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        let res = obj.greaterElement(arr, n);
        let s = "";
        for(let i=0;i<res.length;i++)
        {
            if(res[i]==-10000000)
                s+="_ ";
            else
                s+=res[i]+" ";
        }
        console.log(s);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
 */

class Solution {
    // Function to find the next greater element for each element of the array.
    greaterElement(arr, n) {
        // Create a sorted copy of the array
        const sortedArr = [...arr];
        sortedArr.sort((a, b) => a - b);  // Sort the array in ascending order
        
        // Iterate through each element of the original array
        for (let i = 0; i < n; i++) {
            let l = 0;
            let r = n - 1;
            let minDiff = Infinity;
            let res = -10000000;  // Initialize result with a very low number
            
            // Use binary search to find the smallest element greater than arr[i]
            while (l <= r) {
                const mid = l + Math.floor((r - l) / 2);
                const diff = sortedArr[mid] - arr[i];
                
                // If the element is greater than arr[i] and has the smallest difference, update the result
                if (diff > 0 && diff < minDiff) {
                    res = sortedArr[mid];
                    minDiff = diff;
                }
                
                // Adjust the binary search bounds
                else if (arr[i] >= sortedArr[mid]) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }

            // Replace arr[i] with the next greater element found
            arr[i] = res;
        }
        
        return arr;  // Return the modified array
    }
}
