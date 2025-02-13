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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar1[0];
        let k = input_ar1[1];
        let arr = new Array(n);
        input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.countSubarray(arr, n, k);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends

//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number}
*/

class Solution {
    // Function to count subarrays with sum less than or equal to k.
    countSubarray(arr, n, k) {
        // Initialize total as the total number of subarrays in the given array.
        let total = (n * (n + 1)) / 2;
        let last_ind = -7;  // Variable to track the last index of a valid subarray
        let ans = [];  // Array to store the lengths of consecutive subarrays with elements <= k

        // Iterate over the array to identify subarrays where all elements are <= k
        for (let i = 0; i < arr.length; i++) {
            // If the current element is less than or equal to k
            if (arr[i] <= k) {
                // If this element is adjacent to the previous valid element, increment the length
                if (last_ind === (i - 1)) {
                    ans[ans.length - 1] = parseInt(ans[ans.length - 1]) + 1;
                    last_ind = i;
                } else {
                    // If it's not adjacent, start a new valid subarray of length 1
                    ans.push(1);
                    last_ind = i;
                }
            }
        }

        let sub = 0;
        // Calculate the number of subarrays with elements <= k
        for (let j = 0; j < ans.length; j++) {
            let ne = ans[j];
            let sum = (ne * (ne + 1)) / 2;  // Sum of subarrays of length ne
            sub += sum;
        }

        // Return the difference between total subarrays and subarrays where sum <= k
        return total - sub;
    }
}
