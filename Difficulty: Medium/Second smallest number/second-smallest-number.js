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
        let [N, S] = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.secondSmallest(N, S);
        if(res===-0)
            res = 0n;
        console.log(res.toString());
        
    
console.log("~");
}
}

// } Driver Code Ends



//User function Template for javascript
/**
 * @param {string} S
 * @param {string} D
 * @returns {string}
*/
class Solution {
    secondSmallest(S, D) {
        // Special case: If D = 1, the only possible number is S itself
        if (D === 1) {
            return S >= 0 && S <= 9 ? `${S}` : "-1";
        }

        if (S > 9 * D || S < 1) return "-1"; // Impossible cases

        let num = Array(D).fill(0);
        S--; // Reserve 1 to make the smallest number
        num[0] = 1;

        // Construct the smallest number from right to left
        for (let i = D - 1; i >= 0; i--) {
            let add = Math.min(S, 9 - num[i]);
            num[i] += add;
            S -= add;
        }

        if (S > 0) return "-1"; // Sum couldn't be properly distributed

        // Find the second smallest by making the smallest valid change
        for (let i = D - 1; i > 0; i--) {
            if (num[i] > 0 && num[i - 1] < 9) {
                num[i]--;
                num[i - 1]++;
                return num.join("");
            }
        }

        return "-1"; // No valid second smallest number found
    }
}