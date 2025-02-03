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
        let n = input_line[0];
        
        input_line = readLine().split(' ');
        let arr = new Array(n);
        for(let i=0;i<n;i++)
            arr[i] = parseInt(input_line[i]);
        
        
        let obj = new Solution();
        let ans = obj.numoffbt(arr, n);
        if(ans==-0)
        ans=0;
        console.log(ans);
    
console.log("~");
}
}


// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution {
    numoffbt(arr, n) {
        // Find the maximum and minimum elements in the array
        let maxi = Math.max(...arr);
        let mini = Math.min(...arr);

        // Initialize the DP array to store the number of factorizations for each number
        let dp = new Array(maxi + 1).fill(0);

        // Mark the numbers present in the input array
        for (let i of arr) {
            dp[i] = 1;
        }

        let output = 0;

        // Loop through all numbers from the minimum to the maximum
        for (let i = mini; i <= maxi; i++) {
            if (dp[i] !== 0) {
                let j = i + i;

                // Perform dynamic programming to find factorizations of each number
                while (j <= maxi && (j / i) <= i) {
                    if (dp[j] !== 0) {
                        dp[j] += (dp[i] * dp[Math.floor(j / i)]);

                        // If i and j/i are different, add the factorization for both
                        if (i !== j / i) {
                            dp[j] += (dp[i] * dp[Math.floor(j / i)]);
                        }
                    }
                    j += i;
                }

                output += dp[i];
                output %= 1000000007; // Modulo to prevent overflow
            }
        }

        return output;
    }
}
