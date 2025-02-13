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
        let arr = [];
        let input = readLine().split(' ').map(x => parseInt(x));
        let k = 0;
        for(let i=0; i<n; i++) {
            let tmp = [];
            for(let j=0; j<n; j++) {
                tmp.push(input[k++]);
            }
            arr.push(tmp);
        }
        let obj = new Solution();
        let res = obj.distinct(arr, n);
        console.log(res);
        
    
console.log("~");
}
}

// } Driver Code Ends
// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    distinct(arr, n) {
        // If the array is empty, return 0
        if (arr.length === 0) {
            return 0;
        }

        // Initialize a set with elements from the first row
        let commonElements = new Set(arr[0]);

        // Iterate through each row and filter elements that exist in all rows
        for (let i = 1; i < arr.length; i++) {
            let currentSet = new Set();
            for (let j = 0; j < arr[i].length; j++) {
                if (commonElements.has(arr[i][j])) {
                    currentSet.add(arr[i][j]);
                }
            }
            commonElements = currentSet;
        }

        // Return the count of common distinct elements
        return commonElements.size;
    }
}
