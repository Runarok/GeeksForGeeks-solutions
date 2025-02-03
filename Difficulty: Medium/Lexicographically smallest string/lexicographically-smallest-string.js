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
        let input_ar1 = readLine().split(' ');
        let S = input_ar1[0];
        let K = parseInt(input_ar1[1]);
        let obj = new Solution();
        let res = obj.lexicographicallySmallest(S, K);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends


// } Driver Code Ends


//User function Template for javascript
/**
 * @param {string} S
 * @param {number} k
 * @returns {string}
*/

class Solution {
    // Function to find lexicographically smallest string after k operations
    lexicographicallySmallest(S, k) {
        let n = S.length;

        // Check if the length of string is a power of 2
        let boolean = this.isPower(n);
        if (boolean) {
            k = Math.floor(k / 2);  // If power of 2, halve the k value
        } else {
            k *= 2;  // Otherwise, double the k value
        }

        // If k is greater than or equal to n, return '-1'
        if (k >= n) {
            return '-1';
        }

        let stack = [S[0]];
        let i = 1;

        // Process the string to form the lexicographically smallest string
        while (stack.length && i < n) {
            while (stack.length && i < n && stack[stack.length - 1] > S[i] && k) {
                k -= 1;
                stack.pop();
            }
            stack.push(S[i]);
            i += 1;
        }

        // Remove remaining elements from the stack if k > 0
        while (k && stack.length) {
            k -= 1;
            stack.pop();
        }

        return stack.join('');
    }

    // Function to check if a number is a power of 2
    isPower(length) {
        let n = length;
        while (n !== 1) {
            if (n % 2 !== 0) {
                return false;
            }
            n = Math.floor(n / 2);
        }
        return true;
    }
}
