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
        
        let a = parseInt(readLine());
        
        
        let b = parseInt(readLine());
        
        let obj = new Solution();
        let res = obj.solve(a, b);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

class Solution {
    /**
     * Function to solve the problem based on the given conditions.
     * @param {number} a - First number.
     * @param {number} b - Second number.
     * @returns {number} - Returns 0, 1, or 2 based on the conditions.
     */
    solve(a, b) {
        // If both numbers are equal, return 0.
        if (a == b)
            return 0;
        // If bitwise AND of a and b equals the minimum of a and b, return 1.
        else if ((a & b) == Math.min(a, b))
            return 1;
        // Otherwise, return 2.
        else
            return 2;
    }
}
