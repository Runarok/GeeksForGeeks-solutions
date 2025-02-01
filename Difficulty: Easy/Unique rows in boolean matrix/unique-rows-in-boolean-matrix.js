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

function printArray(res) {
    let s="";
    let n = res.length;
    
    for(let i=0;i<n;i++){
        for(let j=0;j<res[i].length;j++){
            s+=res[i][j];
            s+=" ";
        }
        s+="$";
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
        let m = input_ar1[1];
        let arr = [];
        let cnt=0;
        input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            let arr1 = new Array(m);
            for(let j=0;j<m;j++){
                arr1[j] = input_ar1[cnt++];
            }
            arr.push(arr1);
        }
        let obj = new Solution();
        let res = obj.uniqueRow(arr, n, m);
        printArray(res);
    
console.log("~");
}
}


// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} m
 * @returns {number[][]} 
 */
 
class Solution {
    /**
     * Function to return unique rows in a 2D matrix.
     * @param {number[]} arr - The 2D matrix of binary values.
     * @param {number} n - The number of rows in the matrix.
     * @param {number} m - The number of columns in the matrix.
     * @returns {number[][]} - The 2D array of unique rows.
     */
    uniqueRow(arr, n, m) {
        let set = new Set(); // Set to keep track of unique rows
        let result = []; // Array to store the unique rows
        
        // Iterate over each row in the matrix
        for (let i = 0; i < arr.length; i++) {
            // Convert the row to a string to easily compare with other rows
            let serialized = arr[i].join("");
            
            // If the row has not been seen before, add it to the result and set
            if (!set.has(serialized)) {
                set.add(serialized); // Mark the row as seen
                result.push(arr[i]); // Add the unique row to the result
            }
        }
        
        // Return the array of unique rows
        return result;
    }
}
