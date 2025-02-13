//{ Driver Code Starts
//Initial Template for javascript

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
        let result = obj.AllSubsets(arr, n);
        let s = '';
        for(let i=0; i<result.length; i++){
            s+="(";
            for(let j=0; j<result[i].length; j++){
                s+=result[i][j];
                if(j < result[i].length - 1){
                    s+=" ";
                }
            }
            s+=")";
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
 * @returns {number[][]}
 */

class Solution {
    AllSubsets(arr, n) {
        // Recursive function to generate all subsets
        function find(arr, index, result, prevSubsetCount) {
            if (index === arr.length) return result; // Base case: return final result

            let newSubsets = [];

            if (arr[index] === arr[index - 1]) {
                // If the current element is a duplicate, only extend the previously added subsets
                for (let j = result.length - prevSubsetCount; j < result.length; j++) {
                    newSubsets.push([...result[j], arr[index]]);
                }
            } else {
                // Otherwise, extend all existing subsets
                for (let j = 0; j < result.length; j++) {
                    newSubsets.push([...result[j], arr[index]]);
                }
            }

            // Recursively process the next element
            return find(arr, index + 1, [...result, ...newSubsets], newSubsets.length);
        }

        arr.sort((a, b) => a - b); // Step 1: Sort the array to handle duplicates properly

        // Step 2: Generate subsets using recursion
        let rawSubsets = find(arr, 1, [[], [arr[0]]], 1);

        // Step 3: Convert subsets to string for sorting, then back to array format
        let sortedSubsets = rawSubsets.map(subset => subset.join("")).sort();
        return sortedSubsets.map(subset => subset.split(""));
    }
}
