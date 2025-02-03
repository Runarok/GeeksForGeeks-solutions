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
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar1[0];
        let m = input_ar1[1];
        let arr = [];
        for(let i=0;i<n;i++){
            input_ar1 = readLine().split(' ').map(x=>parseInt(x));
            let a = new Array(m);
            for(let j=0; j<m;j++){
                a[j] = input_ar1[j];
            }
            arr.push(a);
        }
        input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let k = input_ar1[0];
        let q = input_ar1[1];
        let q_i = [];
        let q_j = [];
        input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<q;i++){
            q_i.push(input_ar1[i]);
        }
        input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<q;i++){
            q_j.push(input_ar1[i]);
        }
        let obj = new Solution();
        let res = obj.largestSquare(arr, n, m, k, q, q_i, q_j);
        printList(res,res.length);
        
    
console.log("~");
}
}// } Driver Code Ends


// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[][]} arr
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @param {number} q
 * @param {number[]} q_i
 * @param {number[]} q_j
 * @returns {number[]}
*/

class Solution {
    largestSquare(M, R, C, K, Q, q_i, q_j) {
        // Step 1: Precompute the prefix sum matrix dp
        // dp[i][j] represents the sum of elements from (0, 0) to (i-1, j-1) in matrix M.
        let dp = Array.from({ length: R + 1 }, () => Array(C + 1).fill(0));

        // Fill the dp matrix using the prefix sum formula
        for (let i = 0; i < R; i++) {
            for (let j = 0; j < C; j++) {
                dp[i + 1][j + 1] = M[i][j] + dp[i + 1][j] + dp[i][j + 1] - dp[i][j];
            }
        }

        // Step 2: Helper function to calculate the sum of elements in the area (r1, c1) to (r2, c2)
        // This function uses the prefix sum matrix to efficiently compute the sum of any submatrix.
        const sumArea = (r2, c2, r1, c1) => {
            return dp[r2 + 1][c2 + 1] - dp[r2 + 1][c1] - dp[r1][c2 + 1] + dp[r1][c1];
        };

        // Step 3: Function to calculate the largest square with sum <= K, centered at (i, j)
        const query = (i, j) => {
            let ans = 0; // Variable to store the maximum square side length found
            let k = 0;   // Variable to represent the current side length we are checking

            // Step 4: Expand the square around (i, j) while the sum remains <= K
            while (true) {
                // Compute the coordinates of the top-left and bottom-right corners of the square
                let r1 = i - k, c1 = j - k;
                let r2 = i + k, c2 = j + k;

                // Step 5: If the square goes out of bounds, stop checking further
                if (r1 < 0 || r2 >= R || c1 < 0 || c2 >= C) {
                    break;
                }

                // Step 6: Compute the sum of elements inside the current square using sumArea
                let s = sumArea(r2, c2, r1, c1);

                // Step 7: If the sum exceeds K, stop expanding the square
                if (s > K) {
                    break;
                }

                // Step 8: Update the result with the side length of the current square
                ans = 2 * k + 1; // 2 * k + 1 is the side length of the square (k is the half side length)
                k += 1; // Try a larger square in the next iteration
            }
            return ans; // Return the largest square side length for the current query
        };

        // Step 9: Return the results for each query by applying the query function on each (i, j) pair
        return q_i.map((i, index) => query(i, q_j[index]));
    }
}
