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
        let str = readLine();
        let obj = new Solution();
        let res = obj.minSteps(str);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends


class Solution {
    minSteps(str) {
        let prev = null; // Variable to keep track of the previous character
        let acount = 0;  // Counter for consecutive 'a' segments
        let bcount = 0;  // Counter for consecutive 'b' segments

        // Loop through the string
        for (let i = 0; i < str.length; i++) {
            let currentChar = str[i];

            // If current character is the same as the previous one, continue
            if (currentChar === prev) {
                continue;
            }

            // If it's an 'a', increment acount, otherwise increment bcount
            if (currentChar === 'a') {
                acount += 1;
            } else {
                bcount += 1;
            }

            // Update the previous character to the current one
            prev = currentChar;
        }

        // Return the minimum of acount or bcount plus 1 (to account for the first step)
        return Math.min(acount, bcount) + 1;
    }
}
