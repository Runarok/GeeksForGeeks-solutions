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
        let [n, k] = readLine().trim().split(" ").map((x) => parseInt(x));
        let arr = [];
        for(let j = 0;j<k;j++){
            let input_line = readLine().trim().split(" ").map((x) => parseInt(x));
            arr.push(input_line);    
        }
        let obj = new Solution();
        let res = obj.countZero(n, k, arr);
        let s = "";
        for(let j = 0;j<res.length;j++){
            if(res[j]===-0)
                res[j]=0;
            s+=res[j];
            s+=" ";
        }
        console.log(s);
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} n
 * @param {number} k
 * @param {number[]} arr
 * @returns {number}
*/
class Solution {
    // Function to count the number of zeroes in the grid after filling rows and columns
    countZero(n, k, arr) {
        let freeCells = n * n;  // Initially, all cells are free
        let filledRows = new Array(n).fill(false);  // Track which rows are filled
        let filledCols = new Array(n).fill(false);  // Track which columns are filled
        let rowCount = 0;  // Counter for filled rows
        let colCount = 0;  // Counter for filled columns
        let ans = new Array(k).fill(0);  // Array to store the results for each query

        for (let i = 0; i < k; i++) {
            let row = arr[i][0];  // Row to be filled
            let col = arr[i][1];  // Column to be filled

            // If the row has not been filled yet, reduce the free cells
            if (!filledRows[row - 1]) {
                freeCells -= (n - colCount);  // Subtract the cells in the row that are free
                filledRows[row - 1] = true;  // Mark this row as filled
                rowCount++;  // Increment the filled rows count
            }

            // If the column has not been filled yet, reduce the free cells
            if (!filledCols[col - 1]) {
                freeCells -= (n - rowCount);  // Subtract the cells in the column that are free
                filledCols[col - 1] = true;  // Mark this column as filled
                colCount++;  // Increment the filled columns count
            }

            // Store the remaining number of free cells after filling row and column
            ans[i] = freeCells;
        }

        return ans;  // Return the result of all queries
    }
}
