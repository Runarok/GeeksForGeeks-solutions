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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let obj = new Solution();
        let [n, k] = readLine().trim().split(" ").map((x) => parseInt(x));
        let a = new Array(n + 1);
        for (let j = 0; j <= n; j++) a[j] = j;
        let input = readLine().trim().split(" ");
        let j = 0;
        let s = "";
        while (j < input.length) {

            if (input[j] === "UNION") {
                let x = parseInt(input[j + 1]);
                let z = parseInt(input[j + 2]);
                obj.unionSet(a, x, z);
                j += 3;
            } else {
                let x = parseInt(input[j + 1]);
                let parent = obj.find(a, x);
                s += parent;
                s += " ";
                j += 2;
            }
        }
        console.log(s);

        console.log("~");
    }
}
// } Driver Code Ends

class Solution {

    // Find operation: Return the ultimate parent of x
    find(par, x) {
        // Base case: if par[x] is the same as x, it's the ultimate parent
        if (par[x] === x) {
            return x;
        }
        // Otherwise, recursively find the parent
        return this.find(par, par[x]);
    }

    // Union operation: Union the sets of x and z
    unionSet(par, x, z) {
        // Find the parents of both x and z
        let rootX = this.find(par, x);
        let rootZ = this.find(par, z);
        
        // If they are not already in the same set, union them by setting one root as the parent of the other
        if (rootX !== rootZ) {
            par[rootX] = rootZ;  // Make rootZ the parent of rootX
        }
    }
}
