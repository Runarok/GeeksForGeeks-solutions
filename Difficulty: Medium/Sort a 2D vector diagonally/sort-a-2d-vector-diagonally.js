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
        obj.diagonalSort(matrix, n, m);
    }
}
// } Driver Code Ends
//User function Template for javascript
/**
 * @param {number[][]} matrix
 * @param {number} n
 * @param {number} m
 * @returns { }
*/
class Solution {
  /**
   * Function to sort the diagonals of a matrix such that elements of each diagonal
   * are sorted in ascending or descending order.
   * 
   * @param {number[][]} matrix - The matrix to be sorted
   * @param {number} N - The number of rows in the matrix
   * @param {number} M - The number of columns in the matrix
   */
  diagonalSort(matrix, N, M) {
    // Sorting diagonals starting in the lower left triangle
    for (let row = 1; row < N; row++) {
      let i = row, j = 0;  // Start at (row, 0)
      let diagonal = [];
      
      // Extract the diagonal starting at (i, j)
      while (i < N && j < M) {
        diagonal.push(matrix[i][j]);
        i++;
        j++;
      }
      
      // Sort the diagonal in ascending order
      diagonal.sort((a, b) => a - b);
      
      // Put sorted diagonal back into the matrix
      i = row;
      j = 0;
      let k = 0;
      while (i < N && j < M) {
        matrix[i][j] = diagonal[k++];
        i++;
        j++;
      }
    }
    
    // Sorting diagonals starting in the upper right triangle
    for (let col = 1; col < M; col++) {
      let i = 0, j = col;  // Start at (0, col)
      let diagonal = [];
      
      // Extract the diagonal starting at (i, j)
      while (i < N && j < M) {
        diagonal.push(matrix[i][j]);
        i++;
        j++;
      }
      
      // Sort the diagonal in descending order
      diagonal.sort((a, b) => b - a);
      
      // Put sorted diagonal back into the matrix
      i = 0;
      j = col;
      let k = 0;
      while (i < N && j < M) {
        matrix[i][j] = diagonal[k++];
        i++;
        j++;
      }
    }

    // Output the sorted matrix row by row
    for (let i = 0; i < N; i++) {
      console.log(matrix[i].join(" "));
    }
  }
}
