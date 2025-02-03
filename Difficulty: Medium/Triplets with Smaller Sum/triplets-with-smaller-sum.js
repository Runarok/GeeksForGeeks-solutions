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
        let [n,sum] = readLine().trim().split(" ").map((x)=>parseInt(x));
        let arr = readLine().trim().split(" ").map((x)=>parseInt(x));
        let obj = new Solution();
        let res = obj.countTriplets(arr,n,sum);
        if(res===-0)
            res = 0;
        console.log(res.toString());
    
console.log("~");
}
}

// } Driver Code Ends


// User function Template for JavaScript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} sum
 * @return {number}
 */

class Solution {

    countTriplets(arr, n, sum) {
        let tripletCount = 0;

        // Sort the array to make it easier to find valid triplets
        arr.sort((a, b) => a - b);

        // Iterate through the array, considering each element as the first element of the triplet
        for (let i = 0; i < n - 2; i++) {
            let left = i + 1, right = n - 1;

            // Use the two-pointer technique to find the other two elements of the triplet
            while (left < right) {
                let currentSum = arr[i] + arr[left] + arr[right];

                // If the sum of the triplet is less than the target, count all pairs between left and right
                if (currentSum < sum) {
                    tripletCount += right - left;
                    left++;
                } else {
                    // If the sum is greater or equal, move the right pointer to the left to reduce the sum
                    right--;
                }
            }
        }

        return tripletCount;
    }
}
