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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let a = parseInt(readLine());
        let b = parseInt(readLine());
        let obj = new Solution();
        let res = obj.minVal(a,b);
        console.log(res);
        
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
*/

class Solution {
    minVal(a, b) {
        // Convert integers a and b to binary string representation
        let abit = a.toString(2);
        let bbit = b.toString(2);

        let temp = [];
        let alen = abit.length;
        let aco = 0, bco = 0;

        // Count the number of 1s in the binary representation of 'a' and store their positions
        for (let i = 0; i < alen; i++) {
            if (abit[i] === "1") {
                aco++;
                temp.push(i);
            }
        }

        // Count the number of 1s in the binary representation of 'b'
        for (let ele of bbit) {
            if (ele === "1") {
                bco++;
            }
        }

        // If b has more 1s than the length of 'a', return the smallest number with 'bco' ones
        if (bco > alen) {
            return parseInt("1".repeat(bco), 2);
        } else {
            // Initialize an array of 0s of length equal to 'a'
            let ans = new Array(alen).fill(0);

            // Assign 1s at the positions where 'a' originally had them, up to the count of 'bco'
            for (let ele of temp) {
                if (bco > 0) {
                    ans[ele] = 1;
                } else {
                    break;
                }
                bco--;
            }

            // Fill remaining 1s from the least significant bit
            let j = alen - 1;
            while (bco > 0) {
                if (ans[j] !== 1) {
                    ans[j] = 1;
                    bco--;
                }
                j--;
            }

            // Convert the binary array back to an integer and return
            return parseInt(ans.join(""), 2);
        }
    }
}
