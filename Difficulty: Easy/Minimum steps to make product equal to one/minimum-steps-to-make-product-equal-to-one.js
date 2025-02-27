//{ Driver Code Starts
//Initial Template for javascript

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
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.makeProductOne(arr, n);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends


// } Driver Code Ends

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution {
    makeProductOne(arr, n) {
        // Step counter to track number of operations required
        let steps = 0;

        // Variable to track the overall product sign
        let productSign = 1;

        // Counter for zeros in the array
        let zeroCount = 0;

        for (let i = 0; i < n; i++) {
            if (arr[i] >= 1) {
                // If the element is positive, reduce it to 1 (cost = arr[i] - 1)
                steps += arr[i] - 1;
            } else if (arr[i] <= -1) {
                // If the element is negative, convert it to -1 (cost = -arr[i] - 1)
                steps += -arr[i] - 1;
                // Flip product sign since multiplying by -1 flips the sign
                productSign *= -1;
            } else {
                // If the element is zero, count it (it will need to become 1)
                zeroCount++;
            }
        }

        // If product is already positive, we just need to make zeros into 1 (cost = count)
        if (productSign > 0) {
            return steps + zeroCount;
        } 
        // If product is negative and there are no zeros to flip into +1, we need 2 extra steps:
        // convert one -1 to +1 (cost = 2)
        else if (productSign < 0 && zeroCount === 0) {
            return steps + 2;
        } 
        // If product is negative and there are zeros available, use one zero to become +1 directly
        else {
            return steps + zeroCount;
        }
    }
}
