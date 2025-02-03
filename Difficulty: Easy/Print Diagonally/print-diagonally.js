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
        for(let j = 0;j<n;j++){
            let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
            let row = [];
            for(let k=0;k<n;k++){
                row.push(input_ar1[k]);
            }
            arr.push(row);
        }
        let obj = new Solution();
        let res = obj.downwardDiagonal(n, arr);
        printList(res,res.length);
        
    
console.log("~");
}
}// } Driver Code Ends


// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} N
 * @param {number[][]} A
 * @returns {number[]}
*/

class Solution {
/**
 * Function to return the elements of a matrix in a downward diagonal order
 * @param {number} N - The size of the matrix
 * @param {number[][]} A - The input matrix
 * @return {number[]} - The list of elements in downward diagonal order
 */
    downwardDiagonal(N, A) {
        let diagonals = [];
    
        // Create an array of lists to store diagonal elements
        for (let i = 0; i < 2 * N - 1; i++) {
            diagonals.push([]);
        }
    
        // Distribute matrix elements into the diagonal lists
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                diagonals[i + j].push(A[i][j]);
            }
        }
    
        // Flatten the diagonals array into a single list
        let result = [];
        for (let diagonal of diagonals) {
            for (let element of diagonal) {
                result.push(element);
            }
        }
    
        return result;  // Return the flattened array of diagonal elements
    }
}