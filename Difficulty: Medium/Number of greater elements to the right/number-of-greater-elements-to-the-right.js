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
        let q = parseInt(readLine());
        let queries = new Array(q);
        let input_ar2 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<q;i++){
            queries[i] = input_ar2[i];
        }
        let obj = new Solution();
        let res = obj.count_NGEs(n, arr, q, queries);
        printList(res,res.length);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends

/**
 * Function to count the number of elements greater than the element at specified indices 
 * to its right in the array for multiple queries.
 *
 * @param {number} N - The total number of elements in the array.
 * @param {number[]} arr - The array of integers.
 * @param {number} queries - The total number of queries.
 * @param {number[]} indices - The list of indices for which we need to find the count of greater elements to the right.
 * @returns {number[]} - Array containing the count of elements greater than the specified element for each query.
 */

class Solution {
    count_NGEs(N, arr, queries, indices) {
        let ans = []; // Array to store results for each query
        
        // Loop through all query indices
        let n = indices.length;
        for (let i = 0; i < n; i++) {
            let num = arr[indices[i]]; // Element at the current index
            let index = indices[i];    // Current index to start counting from
            let count = 0;             // Variable to count elements greater than num
            
            // Loop through the array from the current index until the end
            while (index < N) {
                if (arr[index] > num) {
                    count++;  // If element is greater than num, increment count
                }
                index++;  // Move to the next element
            }

            // Push the result for this query
            ans.push(count);
        }
        
        return ans; // Return the results for all queries
    }
}
