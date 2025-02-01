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
    let tc = parseInt(readLine());
    while (tc > 0) {
        let arr = readLine().split(' ').map(Number);
        let obj = new Solution();
        let res = obj.maxWater(arr);
        console.log(res);

        console.log("~");
        tc--;
    }
}

// } Driver Code Ends

class Solution {
    maxWater(arr) {
        const n = arr.length;
        const nge = [...arr];
        const pge = [...arr];

        // Calculate next greater element from left to right
        for (let i = 1; i < n; i++) {
            nge[i] = Math.max(arr[i], nge[i - 1]);
        }

        // Calculate next greater element from right to left
        for (let i = n - 2; i >= 0; i--) {
            pge[i] = Math.max(pge[i + 1], arr[i]);
        }

        let totalWater = 0;
        
        // Calculate water trapped at each position
        for (let i = 1; i < n - 1; i++) {
            totalWater += Math.min(nge[i], pge[i]) - arr[i];
        }

        return totalWater;
    }
}
