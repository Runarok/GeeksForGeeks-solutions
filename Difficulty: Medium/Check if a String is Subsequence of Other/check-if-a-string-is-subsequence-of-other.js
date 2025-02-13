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
        let input_ar1 = readLine().split(' ');
        let s = input_ar1[0];
        let p = input_ar1[1];
        let obj = new Solution();
        let res = obj.isSubSequence(s, p);
        if(res === true){
            console.log("True");
        }
        else{
            console.log("False");
        }
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends

//User function Template for javascript

/**
 * @param {string} A
 * @param {string} B
 * @returns {bool}
*/

class Solution{
    
    // Function to check if A is a subsequence of B
    isSubSequence(A, B){
        // Initialize two pointers, i and j, for A and B respectively
        let i = 0, j = 0;
        
        // Traverse both strings A and B
        while(i < A.length && j < B.length){
            // If characters match, move both pointers forward
            if(A[i] == B[j]){
                j++; // Move pointer j (for B)
                i++; // Move pointer i (for A)
            } else {
                // If characters don't match, move pointer j forward
                j++;
            }
        }
        
        // If pointer i reaches the end of A, it means A is a subsequence of B
        return i === A.length;
    }
}
