//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function printArray(res) {
    for (let i = 0; i < res.length; i++) {
        if (res[i].length > 0) {
            let s = '';
            for (let j = 0; j < res[i].length; j++) {
                s += res[i][j] + " ";
            }
            console.log(s);
        }
    }
}

function main() {

    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let m = parseInt(readLine());
        let arr = [];
        let obj = new Solution();
        for (let i = 0; i < n; i++) {
            let input_line = readLine().split(' ');
            arr.push(input_line);
        }
        let sr = parseInt(readLine());
        let sc = parseInt(readLine());
        let newColor = parseInt(readLine());
        let ans = obj.floodFill(arr, n, m, sr, sc, newColor);
        printArray(ans);

        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[][]} arr
 * @param {number} n
 * @param {number} m
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @returns {number[][]}
 */
class Solution {
    floodFill(image, n, m, sr, sc, newColor) {
        // Get the current color at the starting point
        let originalColor = image[sr][sc];
        
        // If the original color is the same as the new color, no need to do anything
        if (originalColor === newColor) return image;

        // Helper function for the flood fill, using DFS
        function dfs(r, c) {
            // Check if the current pixel is out of bounds or is not the original color
            if (r < 0 || r >= n || c < 0 || c >= m || image[r][c] !== originalColor) {
                return;
            }
            
            // Change the color of the current pixel
            image[r][c] = newColor;

            // Recursively apply flood fill to the 4 neighbors
            dfs(r + 1, c); // Down
            dfs(r - 1, c); // Up
            dfs(r, c + 1); // Right
            dfs(r, c - 1); // Left
        }

        // Start the DFS from the given starting point
        dfs(sr, sc);
        
        // Return the updated image
        return image;
    }
}
