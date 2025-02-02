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
        let obj = new Solution();
        let res = obj.nthFaithfulNum(n);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends


// } Driver Code Ends


//User function Template for javascript



/**
 * @param {number} n
 * @returns {number}
*/

class Solution {
    // Function to return the Nth faithful number by converting binary to base-7
    nthFaithfulNum(N) {
        let n = N.toString(2); // Convert N to binary (as a string)
        let op = parseInt(n, 7); // Parse the binary string as a base-7 number
        return op; // Return the faithful number
    }
}
