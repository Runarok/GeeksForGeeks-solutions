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
        let obj = new Solution();
        let res = obj.findSum(arr, n);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends


// } Driver Code Ends


//User function Template for javascript

//User function Template for javascript


/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution {
    findSum(A, N) {
        // Initialize min and max values
        let min_value = Infinity;
        let max_value = -Infinity;
        
        // Traverse the array to find min and max
        for (let i = 0; i < N; i++) {
            if (A[i] < min_value) {
                min_value = A[i];
            }
            if (A[i] > max_value) {
                max_value = A[i];
            }
        }
        
        // Return the sum of the min and max values
        return min_value + max_value;
    }
}


