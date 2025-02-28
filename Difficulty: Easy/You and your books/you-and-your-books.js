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
        let res = obj.max_Books(arr, n, k);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number}
*/

class Solution {
    max_Books(arr, n, k) {
        // Initialize the variable to keep track of the maximum books count
        let count = 0;
        let i = 0;

        // Iterate through the array
        while (i < n) {
            let c = 0; // counter to count the books in the current window
            let cut = 0; // to store the total sum of books within the current window

            // Iterate through the books starting from index i
            for (let j = i; j < n; j++) {
                // If the book can be bought within the budget k, add it to the cut
                if (arr[j] <= k) {
                    cut += arr[j];
                    c++;
                } else {
                    // If the book cannot be bought, break the loop
                    c++;
                    break;
                }
            }

            // Update the maximum count if the current cut is higher
            if (count < cut) {
                count = cut;
            }

            // Move the index by the number of books considered in the current window
            i += c;
        }

        // Return the maximum number of books
        return count;
    }
}
