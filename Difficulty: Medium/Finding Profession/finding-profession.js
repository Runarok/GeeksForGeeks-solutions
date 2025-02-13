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
        let level = input_ar1[0];
        let pos = input_ar1[1];
        let obj = new Solution();
        let res = obj.profession(level, pos);
        if(res === 'd'){
            console.log("Doctor");
        }
        else{
            console.log("Engineer");
        }
        
    
console.log("~");
}
}// } Driver Code Ends

// } Driver Code Ends

// User function template for JavaScript

/**
 * @param {number} level - The level in the hierarchy.
 * @param {number} pos - The position in the level.
 * @returns {string} - Returns 'e' for Engineer and 'd' for Doctor.
 */
class Solution {
    profession(level, pos) {
        // Base case: The first position is always an Engineer ('e').
        if (pos === 1) return "e";
        
        // Find the profession of the parent at the previous level.
        const parentProfession = this.profession(level - 1, Math.floor((pos + 1) / 2));

        // If the parent is an Engineer ('e'):
        // - Odd positions inherit Engineer ('e').
        // - Even positions become Doctor ('d').
        if (parentProfession === 'e') {
            return pos % 2 === 0 ? 'd' : 'e';
        }
        
        // If the parent is a Doctor ('d'):
        // - Odd positions inherit Doctor ('d').
        // - Even positions become Engineer ('e').
        return pos % 2 === 0 ? 'e' : 'd';
    }
}
