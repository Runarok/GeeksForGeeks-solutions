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

function printArray(res, n) {
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
        let res = obj.generateCode(n);
        printArray(res,res.length);
    
console.log("~");
}
}

// } Driver Code Ends

//User function Template for javascript

/**
 * @param {number} n
 * @returns {string[]} 
 */
 
class Solution {
    generateCode(n) {
        if (n === 0) return ['0'];
        if (n === 1) return ['0', '1'];
        
        const prev = this.generateCode(n - 1);
        const res = [];
        
        // First half - add '0' prefix
        for (const code of prev) {
            res.push('0' + code);
        }
        
        // Second half - add '1' prefix (looping in reverse without reversing array)
        for (let i = prev.length - 1; i >= 0; i--) {
            res.push('1' + prev[i]);
        }
        
        return res;
    }
}
