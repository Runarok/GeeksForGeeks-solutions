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
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        let sum = parseInt(readLine());
        let obj = new Solution();
        let res = obj.sumExists(arr, n, sum);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends




// } Driver Code Ends

class Solution {
    /**
     * Function to check if there is a pair with the given sum in the array.
     * @param {number[]} arr - The array of numbers.
     * @param {number} n - The size of the array.
     * @param {number} sum - The target sum to find a pair for.
     * @returns {number} - Returns 1 if a pair is found, otherwise 0.
     */
    sumExists(arr, n, sum) {
        // Initialize two pointers, one at the start and the other at the end
        let i = 0, j = n - 1;

        // Sort the array in ascending order to use the two-pointer technique
        arr.sort((a, b) => a - b);

        // Iterate through the array using the two-pointer approach
        while (i < j) {
            // Check if the current pair sums up to the target
            if (arr[i] + arr[j] === sum) {
                return 1;  // Pair found
            }
            // If the sum is less than the target, move the left pointer to the right
            else if (arr[i] + arr[j] < sum) {
                i++;
            }
            // If the sum is greater than the target, move the right pointer to the left
            else {
                j--;
            }
        }

        // Return 0 if no pair is found
        return 0;
    }
}
