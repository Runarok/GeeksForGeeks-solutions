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
        let n = parseInt(readLine());
        let arr = new Array(n);
        for(let i=0;i<n;i++){
            arr[i] = parseInt(readLine());
        }
        let obj = new Solution();
        let res = obj.threeDivisors(arr, n);
        for(let i=0;i<res.length;i++){
            console.log(res[i]);
        }
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number[]} query
 * @param {number} q
 * @returns {number[]}
*/

class Solution {
    threeDivisors(query, q) {
        // Initialize an array to store the results for each query
        let results = [];
        
        // Loop through each query value
        for (let i = 0; i < q; i++) {
            let count = 0;  // Variable to keep track of numbers with exactly 3 divisors
            
            // Iterate over all numbers from 2 to the square root of the current query number
            for (let j = 2; j * j <= query[i]; j++) {
                let isPrime = true;  // Flag to check if 'j' is a prime number
                
                // Check if 'j' is divisible by any number smaller than its square root
                for (let k = 2; k * k <= j; k++) {
                    if (j % k === 0) {
                        isPrime = false;  // 'j' is not prime, so break the loop
                        break;
                    }
                }
                
                // If 'j' is prime, it has exactly 3 divisors (1, itself, and its square)
                if (isPrime) {
                    count++;
                }
            }
            
            // Add the result for the current query to the results array
            results.push(count);
        }
        
        // Return the array with the counts for each query
        return results;
    }
}
