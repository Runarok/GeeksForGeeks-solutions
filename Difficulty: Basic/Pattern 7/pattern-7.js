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
        
        let n = parseInt(readLine());
        
        let obj = new Solution();
        obj.printTriangle(n);
    
console.log("~");
}
}

// } Driver Code Ends

class Solution {
    /**
     * @param {number} n - The number of rows in the triangle
     * @returns {void} - Outputs a triangle pattern of stars
     */
    printTriangle(n) {
        // Loop through each row from 1 to n
        for (let i = 1; i <= n; i++) {
            let row = "";
            
            // Add leading spaces to align the stars in the center
            for (let k = 1; k <= n - i; k++) {
                row += " ";  // Adds a space to the row
            }
            
            // Add the stars to the current row (odd number of stars)
            for (let j = 0; j < i * 2 - 1; j++) {
                row += "*";  // Adds a star to the row
            }
            
            // Print the current row
            console.log(row);
        }
    }
}
