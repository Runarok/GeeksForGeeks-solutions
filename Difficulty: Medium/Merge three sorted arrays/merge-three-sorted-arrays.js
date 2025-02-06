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

/* Function to print an array */
function printArray(arr, size)
{
    let i;
    let s='';
    for (i=0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar0[0];
        let m = input_ar0[1];
        let p = input_ar0[2];
        let A = new Array(n);
        let B = new Array(m);
        let C = new Array(p);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            A[i] = input_ar1[i];
        let input_ar2 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<m;i++)
            B[i] = input_ar2[i];
        let input_ar3 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<p;i++)
            C[i] = input_ar3[i];
        let obj = new Solution();
        let res = obj.mergeThree(A, B, C);
        printArray(res, res.length);
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @returns {number[]}
*/

class Solution {
    // Function to merge three sorted arrays into a single sorted array.
    mergeThree(A, B, C) {
        let i = 0, j = 0, k = 0; // Initializing pointers for all three arrays.
        let result = []; // Array to store the final merged result.

        // While there are elements remaining in any of the arrays
        while (i < A.length || j < B.length || k < C.length) {
            // If elements exist in all three arrays, compare the current elements and choose the smallest
            if (i < A.length && j < B.length && k < C.length) {
                if (A[i] <= B[j] && A[i] <= C[k]) {
                    result.push(A[i]);
                    i++; // Move pointer in array A
                } else if (C[k] <= A[i] && C[k] <= B[j]) {
                    result.push(C[k]);
                    k++; // Move pointer in array C
                } else {
                    result.push(B[j]);
                    j++; // Move pointer in array B
                }
            }
            // If only arrays A and B have elements left
            else if (i < A.length && j < B.length) {
                if (A[i] <= B[j]) {
                    result.push(A[i]);
                    i++;
                } else {
                    result.push(B[j]);
                    j++;
                }
            }
            // If only arrays A and C have elements left
            else if (i < A.length && k < C.length) {
                if (A[i] <= C[k]) {
                    result.push(A[i]);
                    i++;
                } else {
                    result.push(C[k]);
                    k++;
                }
            }
            // If only arrays B and C have elements left
            else if (j < B.length && k < C.length) {
                if (C[k] <= B[j]) {
                    result.push(C[k]);
                    k++;
                } else {
                    result.push(B[j]);
                    j++;
                }
            }
            // If only array A has elements left
            else if (i < A.length) {
                result.push(A[i]);
                i++; // Move pointer in array A
            }
            // If only array B has elements left
            else if (j < B.length) {
                result.push(B[j]);
                j++; // Move pointer in array B
            }
            // If only array C has elements left
            else if (k < C.length) {
                result.push(C[k]);
                k++; // Move pointer in array C
            }
        }

        // Return the final merged and sorted result
        return result;
    }
}
