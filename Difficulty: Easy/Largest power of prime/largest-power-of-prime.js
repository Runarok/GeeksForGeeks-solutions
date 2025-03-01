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
        let N = input_ar1[0];
        let p = input_ar1[1];
        let obj = new Solution();
        let res = obj.largestPowerOfPrime(N, p);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends


// } Driver Code Ends

//User function Template for javascript
/**
 * @param {number} N
 * @param {number} p
 * @returns {number}
*/

class Solution {
    //Function to find the largest power of prime p in n!
    largestPowerOfPrime(N, p)
    {
        // Initialize result
        let result = 0;
        
        // Start with p and increase the power
        for (let power = p; power <= N; power *= p) {
            result += Math.floor(N / power); // Add the number of times p^k divides N
        }
        
        // Return the result which is the largest power of prime p in N!
        return result;
    }
}
