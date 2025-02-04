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
        let k = input_ar1[1];
        let obj = new Solution();
        let res = obj.kthPermutation(n, k);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} n
 * @param {number} k
 * @returns {string}
*/

class Solution {
    kthPermutation(n, k) {
        // Create an array of strings from 1 to n
        let numbers = Array.from({ length: n }, (_, i) => (i + 1).toString());

        // Initialize an array to store factorial values
        let fact = new Array(n + 1).fill(1);

        // Calculate factorials for 1 to n
        for (let i = 1; i <= n; i++) {
            fact[i] = fact[i - 1] * i;
        }

        // Decrement k to make it 0-indexed
        k -= 1;

        // Initialize result array to store the final permutation
        let res = [];

        // Construct the kth permutation
        for (let i = n; i > 0; i--) {
            let idx = Math.floor(k / fact[i - 1]);
            res.push(numbers.splice(idx, 1)[0]); // Remove the number at the found index and add it to the result
            k %= fact[i - 1]; // Update k for the next iteration
        }

        // Join the result array into a string and return it
        return res.join('');
    }
}
