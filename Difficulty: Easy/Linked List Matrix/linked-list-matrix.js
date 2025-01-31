//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

class Node {
    constructor(x) {
        this.data = x;
        this.right = null;
        this.down = null;
    }
}

function display(head) {
    let dp = head;
    while (dp) {
        let rp = dp;
        while (rp) {
            process.stdout.write(`${rp.data} `); // Print current node data
            if (rp.right) {
                process.stdout.write(`${rp.right.data} `); // Print right node data
            } else {
                process.stdout.write('null '); // Print 'null' if no right node
            }
            if (rp.down) {
                process.stdout.write(`${rp.down.data} `); // Print down node data
            } else {
                process.stdout.write('null '); // Print 'null' if no down node
            }
            rp = rp.right; // Move to the right node
        }
        dp = dp.down; // Move down to the next row
    }
    console.log(); // New line after finishing one row
}

function main() {
    const testCases = parseInt(readLine());

    for (let _ = 0; _ < testCases; _++) {
        const a = readLine().split(' ').map(Number); // Read the first row
        const n = a.length;

        let mat = [ a ]; // Initialize matrix with the first row
        for (let i = 1; i < n; i++) {
            const row = readLine().split(' ').map(Number); // Read subsequent rows
            mat.push(row);
        }

        const obj = new Solution();
        const head = obj.constructLinkedMatrix(mat);
        if (!head) {
            console.log(-1); // If no head, print -1
            // continue;
        } else
            display(head); // Display the linked matrix
        console.log("~");  // ~
    }
}

// } Driver Code Ends

/*
class Node {
    constructor(x) {
        this.data = x;
        this.right = null;
        this.down = null;
    }
}
*/

/**
 * @param {number[][]} mat - The 2D input matrix.
 * @returns {Node|null} - The head node of the linked matrix, or null if the matrix is
 *     empty.
 */
 
class Solution {
    constructLinkedMatrix(mat) {
        // If the matrix is empty, return null as there is no linked matrix to construct
        if (mat.length == 0) {
            return null;
        }

        // Helper function to recursively construct the matrix in the linked list form
        function constructMatix(mat, i = 0, j = 0) {
            // Base case: if indices go out of bounds, return null
            if (i >= mat.length || j >= mat[0].length) {
                return null;
            }

            // Create a new node with the current value of the matrix
            let data = new Node(mat[i][j]);

            // Recursively set the 'right' pointer to the next element in the row (horizontal link)
            data.right = constructMatix(mat, i, j + 1);

            // Recursively set the 'down' pointer to the next element in the column (vertical link)
            data.down = constructMatix(mat, i + 1, j);

            // Return the constructed node
            return data;
        }

        // Start the recursive construction from the top-left corner (0, 0)
        return constructMatix(mat);
    }
}
