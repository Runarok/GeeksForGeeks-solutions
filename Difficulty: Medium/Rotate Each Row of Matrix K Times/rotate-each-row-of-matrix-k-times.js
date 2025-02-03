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

        const [n, m, k] = readLine().split(' ').map(x => parseInt(x));

        let mat = [];
        for (let i = 0; i < n; i++) {
            let a = readLine().trim().split(' ').map((x) => parseFloat(x));
            mat.push(a);
        }

        let obj = new Solution();
        let res = obj.rotateMatrix(k, mat);

        let S_res = '';
        for (let row of res) {
            let tmp = '';
            for (let col of row) {
                tmp += col;
                tmp += ' ';
            }
            console.log(tmp);
        }
    }
}

// } Driver Code Ends

class Solution {
    /**
    * @param {number} k
    * @param {number[][]} mat
    * @returns {number[][]}
    */
    rotateMatrix(k, mat) {
        const n = mat.length;
        const m = mat[0].length;
        k = k % m;  // Ensure k is within the range of column size

        // Initialize result matrix with zeros
        const res = Array.from({ length: n }, () => Array(m).fill(0));

        // Iterate through each element and shift columns
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                // Calculate the new position of the current element
                const newPosition = (j - k + m) % m;
                res[i][newPosition] = mat[i][j];
            }
        }

        return res;
    }
}
