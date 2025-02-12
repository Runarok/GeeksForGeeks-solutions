//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1.length;
        let arr = new Array(n);

        for (let i = 0; i < n; i++) {
            arr[i] = input_ar1[i];
        }
        let x = parseInt(readLine());
        let obj = new Solution();
        let res = obj.isProduct(arr, x);
        if (res === true) {
            console.log("true");
        } else {
            console.log("false");
        }
        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends

/**
 * @param {number[]} arr - An array of numbers.
 * @param {number} x - The target product.
 * @returns {boolean} - Returns true if there exists a pair of numbers whose product is equal to x, otherwise returns false.
 */

class Solution {
    isProduct(arr, x) {
        // Initialize two pointers: start at the beginning, end at the last element
        let start = 0;
        let end = arr.length - 1;
        
        // Sort the array in ascending order to enable the two-pointer technique
        arr.sort((a, b) => a - b);

        // Traverse the array using two pointers to find a pair whose product equals x
        while (start < end) {
            // Calculate the product of the numbers at the start and end pointers
            let product = arr[start] * arr[end];
            
            // If the product matches the target value, return true
            if (product === x) {
                return true;
            }
            // If the product is greater than the target, move the end pointer to the left
            else if (product > x) {
                end--;
            }
            // If the product is smaller than the target, move the start pointer to the right
            else {
                start++;
            }
        }

        // If no pair is found that meets the condition, return false
        return false;
    }
}
