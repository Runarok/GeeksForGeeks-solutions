//{ Driver Code Starts
//Initial Template for javascript

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


function printList(res, n){
    let s="";
    s+='(';
    s+=res[0];
    s+=', ';
    s+=res[1];
    s+=')';
    
    console.log(s);
}
function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let m = parseInt(input_line[0]);
        let n = parseInt(input_line[1]);
        let matrix = [];
        for(let i=0;i<m;i++)
        {
            let a = readLine().split(' ').map((x) => parseInt(x));
            matrix.push(a);
        }
        
        let obj = new Solution();
        let res = obj.endPoints(matrix, m, n);
        printList(res,res.length);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[][]} arr
 * @param {number} n
 * @param {number} m
 * @returns {number[]}
*/
class Solution {
    endPoints(matrix, m, n) {
        const M = m;
        const N = n;

        // Directions mapping for U, D, R, L
        const di = { "U": [-1, 0], "D": [1, 0], "R": [0, 1], "L": [0, -1] };
        const dir_0 = { "U": "R", "R": "D", "D": "L", "L": "U" };

        let curr_dir = "R"; // Start with direction 'R'
        let i = 0;
        let j = 0;

        // Loop to traverse the matrix
        while (i < m && j < n) {
            let ti = i, tj = j;

            // If a '1' is encountered, turn the direction
            if (matrix[i][j] === 1) {
                matrix[i][j] = 0; // Mark the current cell as visited
                curr_dir = dir_0[curr_dir]; // Change the direction
            }

            // Move in the current direction
            i += di[curr_dir][0];
            j += di[curr_dir][1];

            // Check if the next position is outside the matrix
            if (i < 0 || i === m || j < 0 || j === n) {
                return [ti, tj]; // Return the last valid position
            }
        }
    }
}
