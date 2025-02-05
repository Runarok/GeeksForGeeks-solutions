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
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let m = input_ar1[0];
        let n = input_ar1[1];
        let obj = new Solution();
        let res = obj.candies(m, n);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends


class Solution {
    candies(m, n) {
        // Calculate the maximum possible number of candies
        let maxi = m * n;
        
        // Set to store unique candy counts less than the maximum
        let setti = new Set();
        
        // Iterate over all possible combinations of i (from 0 to m) and j (from 0 to n)
        for (let i = 0; i <= m; i++) {
            for (let j = 0; j <= n; j++) {
                // Calculate the total number of candies for this combination
                let num = i * n + j * m;
                
                // If the number of candies is less than the maximum, add it to the set
                if (num < maxi) {
                    setti.add(num);
                }
            }
        }
        
        // Return the difference between the maximum and the number of unique candy counts
        return maxi - setti.size;
    }
}
