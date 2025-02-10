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
        let s = readLine();
        let obj = new Solution();
        let res = obj.posIntSol(s);
        console.log(res);
        
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {string} s
 * @returns {number}
*/

class Solution {
    posIntSol(s) {
        // Parse the equation string to extract N and K
        let parts = s.split('=');
        let sum = parseInt(parts[1]);
        
        // Extract the variables and count how many there are
        let variables = parts[0].split('+');
        let N = variables.length;
        
        // Now, we need to calculate the number of solutions to x1 + x2 + ... + xN = sum
        // This is the same as finding the number of solutions to y1 + y2 + ... + yN = sum - N
        let K = sum;
        
        // If K - N < 0, there are no valid solutions
        if (K - N < 0) {
            return 0;
        }

        // Calculate the combination (K - 1) choose (N - 1)
        let result = this.combinatorics(K - 1, N - 1);
        return result;
    }

    // Helper function to calculate combinations nCr = n! / (r! * (n-r)!)
    combinatorics(n, r) {
        if (r > n) return 0;
        if (r === 0 || r === n) return 1;
        r = Math.min(r, n - r);  // Take advantage of symmetry
        let numerator = 1, denominator = 1;
        for (let i = 0; i < r; i++) {
            numerator *= (n - i);
            denominator *= (i + 1);
        }
        return numerator / denominator;
    }
}
