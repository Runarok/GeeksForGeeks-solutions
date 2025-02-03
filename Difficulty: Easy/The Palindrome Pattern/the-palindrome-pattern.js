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

        let arr = [];
        ai = readLine().trim().split(' ').map((x) => parseFloat(x));
        for (let i = 0; i < n * n; i += n) {
            let j = i, k = n;
            let a = [];
            while (k--) {
                a.push(ai[j]);
                j++;
            }
            arr.push(a);
        }
        let obj = new Solution();
        let res = obj.pattern(arr);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends

class Solution {
    /**
    * Function to check for the first row or column that forms a palindrome pattern.
    * 
    * @param {number} n - The size of the square matrix (n x n).
    * @param {number[][]} arr - The 2D array (matrix).
    * @returns {string} - The row or column index followed by "R" for row or "C" for column if palindrome, else '-1'.
    */
    pattern(arr) {
        const n = arr.length;  // Get the size of the matrix

        // Check each row to see if it's a palindrome
        for (let i = 0; i < n; i++) {
            let isPalindrome = true;
            for (let j = 0; j < n / 2; j++) {
                // If elements from both ends don't match, it's not a palindrome
                if (arr[i][j] !== arr[i][n - j - 1]) {
                    isPalindrome = false;
                    break;
                }
            }
            // If row is palindrome, return the row index with "R"
            if (isPalindrome) return `${i} R`;
        }

        // Check each column to see if it's a palindrome
        for (let j = 0; j < n; j++) {
            let isPalindrome = true;
            for (let i = 0; i < n / 2; i++) {
                // If elements from both ends don't match, it's not a palindrome
                if (arr[i][j] !== arr[n - i - 1][j]) {
                    isPalindrome = false;
                    break;
                }
            }
            // If column is palindrome, return the column index with "C"
            if (isPalindrome) return `${j} C`;
        }

        // If no palindrome row or column is found, return '-1'
        return '-1';
    }
}
