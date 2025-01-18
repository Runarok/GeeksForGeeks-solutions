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
        let m = parseInt(readLine());

        let mat = [];
        for (let i = 0; i < n; i++) {
            let a = readLine().trim().split(' ').map((x) => parseFloat(x));
            mat.push(a);
        }

        let obj = new Solution();
        let res = obj.maxSquare(mat);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends



class Solution {
    maxSquare(mat) {
        if (mat.length === 0 || mat[0].length === 0) return 0;

        let n = mat.length;
        let m = mat[0].length;
        let dp = Array.from({ length: n }, () => Array(m).fill(0));
        let maxSideLength = 0;

        // Fill the dp matrix
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (mat[i][j] === 1) {
                    if (i === 0 || j === 0) {
                        // If it's on the first row or first column, it's just itself
                        dp[i][j] = 1;
                    } else {
                        // Update dp[i][j] based on the minimum of top, left, and top-left cells
                        dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
                    }
                    // Track the maximum side length found
                    maxSideLength = Math.max(maxSideLength, dp[i][j]);
                }
            }
        }

        return maxSideLength;
    }
}
