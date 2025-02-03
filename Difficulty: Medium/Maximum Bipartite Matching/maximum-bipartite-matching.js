//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(
        string => { return string.trim(); });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function printList(res, n) {
    let s = '';
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let a = input_ar1[0];
        let b = input_ar1[1];
        let arr = [];
        for (let i = 0; i < a; i++) {
            let s = readLine().split(' ');
            let row = new Array(b);
            for (let j = 0; j < b; j++) {
                row[j] = parseInt(s[j]);
            }
            arr.push(row);
        }
        let obj = new Solution();
        let res = obj.maximumMatch(arr, a, b);
        console.log(res);

    
console.log("~");
}

}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number[][]} G
 * @returns {number}
*/
class Solution {
    /**
    * @param {number[][]} G
    * @returns {number}
    */
    maximumMatch(G) {
        const M = G.length;  // Number of people (rows in the graph)
        const N = G[0].length;  // Number of jobs (columns in the graph)
        return this.fun(G, M, N);
    }

    /**
    * @param {number[][]} G
    * @param {number} M
    * @param {number} N
    * @returns {number}
    */
    fun(G, M, N) {
        const match = Array(N).fill(-1);  // Stores job assignments (-1 means unassigned)
        let res = 0;  // Result to store the count of maximum matches

        for (let u = 0; u < M; u++) {  // Iterate for each person
            const seen = Array(N).fill(false);  // Mark all jobs as unvisited

            // If a job can be found for person u
            if (this.bpm(G, u, seen, match, M, N)) {
                res += 1;
            }
        }
        return res;
    }

    /**
    * @param {number[][]} G
    * @param {number} u
    * @param {boolean[]} seen
    * @param {number[]} match
    * @param {number} M
    * @param {number} N
    * @returns {boolean}
    */
    bpm(G, u, seen, match, M, N) {
        for (let v = 0; v < N; v++) {  // Try every job
            if (G[u][v] === 1 && !seen[v]) {  // If the job is available and not visited
                seen[v] = true;

                // If job v is not assigned or if the current applicant has no other job
                if (match[v] < 0 || this.bpm(G, match[v], seen, match, M, N)) {
                    match[v] = u;  // Assign job v to person u
                    return true;
                }
            }
        }
        return false;  // No job found for person u
    }
}
