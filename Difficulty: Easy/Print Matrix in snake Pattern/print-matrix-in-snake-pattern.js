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
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        
        input_line = readLine().split(' ');
        let A = new Array(n);
        for(let i=0;i<n;i++)
        {
            let a = new Array(n);
            for(let j=0;j<n;j++)
            {
                a[j] =parseInt(input_line[i*n+j]);
            }
            A[i] = a;
        }
        
        let obj = new Solution();
        let ans = obj.snakePattern(A);
        let s = "";
        for(let i = 0 ; i < ans.length ;i++)
        {
            if(ans[i]==-0)
                ans[i]=0;
            s+=ans[i];
            s+=" ";
        }    
        console.log(s);
    
console.log("~");
}
}

// } Driver Code Ends


/**
 * Function to return a list of integers visited in snake pattern in the matrix.
 * @param {number[][]} matrix - The matrix to traverse in snake pattern
 * @return {number[]} - The list of integers visited in snake pattern
 */
class Solution {
    snakePattern(matrix) {
        let res = [];
        const n = matrix.length;

        // Loop through each row
        for (let i = 0; i < n; i++) {
            if (i % 2 === 0) {
                // Traverse the row left to right
                for (let j = 0; j < n; j++) {
                    res.push(matrix[i][j]);
                }
            } else {
                // Traverse the row right to left
                for (let j = n - 1; j >= 0; j--) {
                    res.push(matrix[i][j]);
                }
            }
        }
        
        return res;  // Return the snake pattern result
    }
}
