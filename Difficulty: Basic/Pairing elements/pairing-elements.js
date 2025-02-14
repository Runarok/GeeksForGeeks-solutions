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
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.array_of_Pairs(arr,n);
        let s = "";
        for(let it of res){
            s += `(${it[0]},${it[1]})`;
            s+=" ";
        }
        console.log(s);

    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number[][]}
*/

class Solution {
    array_of_Pairs(arr, n) {
        // Initialize an empty result array
        let res = [];
        
        // Traverse half of the array, making pairs
        for (let i = 0; i < Math.floor(n / 2); i++) {
            res.push([arr[i], arr[n - 1 - i]]);
        }
        
        // If the array size is odd, add the middle element as a pair with itself
        if (n % 2 !== 0) {
            res.push([arr[Math.floor(n / 2)], arr[Math.floor(n / 2)]]);
        }
        
        // Return the result
        return res;
    }
}
