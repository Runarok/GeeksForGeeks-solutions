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
    * @param {number} n
    * @returns {void}
    */
    printTriangle(n) {
        // Outer loop to handle number of rows
        for (let i = 1; i <= n; i++) {
            let row = "";

            // Inner loop to print numbers from 1 to current row number
            for (let j = 1; j <= i; j++) {
                row += j + " ";
            }

            // Print the current row
            console.log(row);
        }
    }
}
