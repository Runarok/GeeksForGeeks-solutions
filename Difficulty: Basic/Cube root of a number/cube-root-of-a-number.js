//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split("\n").map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let obj = new Solution();
        let res = obj.cubeRoot(n);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

class Solution {
    /**
     * @param {number} n - The input number
     * @returns {number} - The cube root of the number rounded down
     */
    cubeRoot(n) {
        // Calculate the cube root of the number and round it down
        return Math.floor(Math.pow(n, 1/3));
    }
}
