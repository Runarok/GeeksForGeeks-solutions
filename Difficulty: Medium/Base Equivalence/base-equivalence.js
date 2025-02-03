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
        let obj = new Solution();
        let res = obj.baseEquiv(n, m);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} n
 * @param {number} m
 * @returns {boolean}
*/

class Solution {
    baseEquiv(n, m) {
        // Iterate through all possible bases from 2 to 32
        for (let base = 2; base <= 32; base++) {
            let digits = 0;
            let temp = n;

            // Count the number of digits required for base representation
            while (temp > 0) {
                digits++;
                temp = Math.floor(temp / base);
            }

            // If the number of digits matches m, return "Yes"
            if (digits === m) {
                return "Yes";
            }
        }

        // If no base results in m digits, return "No"
        return "No";
    }
}
