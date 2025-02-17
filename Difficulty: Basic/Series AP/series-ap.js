//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => {
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
    for(;i<t;i++){
        
        let a1 = parseInt(readLine());
        
        
        let a2 = parseInt(readLine());
        
        
        let n = parseInt(readLine());
        
        let obj = new Solution();
        let res = obj.nthTermOfAP(a1, a2, n);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

class Solution {
    /**
     * Function to find the nth term of an arithmetic progression (AP).
     * @param {number} a1 - The first term of the AP.
     * @param {number} a2 - The second term of the AP.
     * @param {number} n - The term position to find.
     * @returns {number} - The nth term of the AP.
     */
    nthTermOfAP(a1, a2, n) {
        // Apply the formula for the nth term of an AP: a + (n-1)d
        return a1 + (n - 1) * (a2 - a1);
    }
}
