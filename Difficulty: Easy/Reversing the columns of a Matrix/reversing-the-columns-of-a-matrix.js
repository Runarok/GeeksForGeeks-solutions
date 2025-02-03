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
        let m = parseInt(input_line[1]);
        
        input_line = readLine().split(' ');
        let matrix = new Array(n);
        for(let i=0;i<n;i++)
        {
            let a = new Array(m);
            for(let j=0;j<m;j++)
            {
                a[j] =parseInt(input_line[i*m+j]);
            }
            matrix[i] = a;
        }
        
        let obj = new Solution();
        obj.reverseCol(matrix);
        let s = "";
        for(let i = 0 ; i < n ;i++)
        {
            for(let j = 0; j < m; j++)
            {
                s+=matrix[i][j];
                s+=" ";   
            }
        }
        console.log(s);
    
console.log("~");
}
}


// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number[][]} matrix
*/
class Solution {
    /**
     * Function to reverse the columns of a matrix.
     * 
     * @param {number[][]} matrix - The input matrix
     */
    reverseCol(matrix) {
        const n = matrix.length;  // Number of rows
        const m = matrix[0].length;  // Number of columns
        
        // Iterate over each row
        for (let r = 0; r < n; r++) {
            let first = 0;  // Pointer to the first column
            let last = m - 1;  // Pointer to the last column
            
            // Swap the columns until the pointers meet
            while (first < last) {
                // Swap the elements at first and last column
                const temp = matrix[r][last];
                matrix[r][last] = matrix[r][first];
                matrix[r][first] = temp;
                
                // Move pointers towards the center
                first++;
                last--;
            }
        }
    }
}
