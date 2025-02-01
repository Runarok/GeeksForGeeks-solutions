//{ Driver Code Starts
//Initial Template for javascript


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let m = parseInt(readLine());
        let arr = [];
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n*m;i+=m){
            let a = [];
            for(let j=0; j<m;j++){
                a.push(input_ar1[i+j]);
            }
            arr.push(a);
        }
        let obj = new Solution();
        let res = obj.ValidCorner(arr, n, m);
        console.log(res);
        
    }
}// } Driver Code Ends


// } Driver Code Ends

class Solution {
    // Helper function to check if a valid corner exists
    find(g1, g2, k, i, j, ior, jor) {
        // If k reaches 0 and we return to the original position, it's a valid path
        if (k === 0 && i === ior && j === jor) {
            return true;
        }

        // If k reaches 0 but we haven't returned to the start, it's not valid
        if (k === 0) {
            return false;
        }

        // If k is less than 4 and we return to the original position, it's not valid
        if (k !== 0 && k < 4 && i === ior && j === jor) {
            return false;
        }

        if (k % 2 === 0) {
            let valid = false;
            // Explore all possible moves in the row
            if (g1[i]) {
                for (let l of g1[i]) {
                    valid = valid || this.find(g1, g2, k - 1, i, l, ior, jor);
                }
            }
            return valid;
        } else {
            let valid = false;
            // Explore all possible moves in the column
            if (g2[j]) {
                for (let l of g2[j]) {
                    valid = valid || this.find(g1, g2, k - 1, l, j, ior, jor);
                }
            }
            return valid;
        }
    }

    // Main function to check if a valid rectangle exists
    ValidCorner(mat) {
        let grow = {};   // Row-wise adjacency list
        let gcolumn = {}; // Column-wise adjacency list

        // Build row-wise adjacency list
        for (let i = 0; i < mat.length; i++) {
            for (let j = 0; j < mat[i].length; j++) {
                if (mat[i][j] === 1) {
                    if (!grow[i]) {
                        grow[i] = [];
                    }
                    grow[i].push(j);
                }
            }
        }

        // Build column-wise adjacency list
        for (let j = 0; j < mat[0].length; j++) {
            for (let i = 0; i < mat.length; i++) {
                if (mat[i][j] === 1) {
                    if (!gcolumn[j]) {
                        gcolumn[j] = [];
                    }
                    gcolumn[j].push(i);
                }
            }
        }

        let keys = Object.keys(grow);
        if (keys.length === 0) {
            return "No";  // No valid corner if there are no '1's
        }

        // Check for a valid corner by exploring row-column connections
        for (let i in grow) {
            for (let j of grow[i]) {
                if (this.find(grow, gcolumn, 4, parseInt(i), j, parseInt(i), j)) {
                    return "Yes";  // Valid corner found
                }
            }
        }

        return "No";  // No valid corner
    }
}
