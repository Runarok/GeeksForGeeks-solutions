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
        
        let Mat = [];
        for(let j=0;j<n;j++){
            let row = readLine().trim().split(" ").map((x) => parseInt(x));
            Mat.push(row);
        }

        let obj = new Solution();
        let res = obj.sortedMatrix(n,Mat);
        let s = "";
        for(let row of res){
            s="";
            for(let it of row){
                s+=it+" ";
            }
            console.log(s);
        }
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} N
 * @param {number[][]} Mat
 * @return {number[][]}
*/

class Solution {
    // Function to sort a matrix row-wise and column-wise
    sortedMatrix(N, Mat) {
       // Initialize an empty result array to store all elements of the matrix
       let result = [];
       // Flatten the matrix into a single array
       for (let i = 0; i < Mat.length; i++) {
           result = [...result, ...Mat[i]];
       }

       // Sort the result array in ascending order
       result.sort((a, b) => a - b);

       // Initialize an empty temporary array to store the elements for each row
       let temp = [];
       let k = 0;
       // Rebuild the matrix with sorted elements row by row
       for (let i = 0; i < result.length; i++) {
           temp.push(result[i]);
           // When the temporary array reaches N elements (i.e., one row), assign it to the matrix
           if (((i + 1) % N) == 0) {
               Mat[k] = temp;
               temp = [];
               k++;
           }
       }
       
       // Return the modified matrix with sorted rows
       return Mat;
    }

    // MergeSort function to sort an array (not used in the main method but included for reference)
    mergeSort(arr) {
        if (arr.length <= 1) {
            return arr; // Return the array as is if it has 1 or fewer elements
        }
        const mid = Math.floor(arr.length / 2); // Find the middle index
        const left = this.mergeSort(arr.slice(0, mid)); // Recursively sort the left half
        const right = this.mergeSort(arr.slice(mid)); // Recursively sort the right half
        return this.mergeSortedArray(left, right); // Merge the sorted halves
    }

    // Function to merge two sorted arrays
    mergeSortedArray(arr1, arr2) {
        let i = 0, j = 0, m = arr1.length, n = arr2.length;
        const result = [];
        // Merge elements from both arrays in sorted order
        while (i < m && j < n) {
            if (arr1[i] < arr2[j]) {
                result.push(arr1[i++]);
            } else {
                result.push(arr2[j++]);
            }
        }
        // If any elements are left in arr1, add them to the result
        while (i < m) {
            result.push(arr1[i++]);
        }
        // If any elements are left in arr2, add them to the result
        while (j < n) {
            result.push(arr2[j++]);
        }
        return result; // Return the merged sorted array
    }
}
