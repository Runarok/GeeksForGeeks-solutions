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


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let [n,m] = readLine().trim().split(" ").map((x) => parseInt(x));
        let adj = [];
        
        for(let j = 0;j<m;j++){
            let [u,v,w] =  readLine().trim().split(" ").map((x) => parseInt(x));
            adj.push([u,v,w]);
        }
        let obj = new Solution();
        let res = obj.isNegativeWeightCycle(n,adj);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number} 
*/

class Solution {
    isNegativeWeightCycle(n, edges) {
        // Initialize an array to store the shortest distance to each node, starting with infinity
        let distances = new Array(n).fill(Infinity);

        // Loop through each node to check for negative weight cycles
        for (let i = 0; i < n; i++) {
            distances[i] = 0; // Set the distance of the starting node to 0

            // Perform edge relaxation n-1 times to update the shortest paths
            for (let j = 0; j < n - 1; j++) {
                for (let [start, end, weight] of edges) {
                    if (distances[start] !== Infinity && distances[start] + weight < distances[end]) {
                        distances[end] = distances[start] + weight; // Update the distance to the 'end' node
                    }
                }
            }

            // Perform a final check to detect any negative weight cycles
            for (let [start, end, weight] of edges) {
                if (distances[start] !== Infinity && distances[start] + weight < distances[end]) {
                    // Negative weight cycle detected, return 1
                    return 1;
                }
            }

            // Reset the distances for the next iteration to check from a different starting node
            distances.fill(Infinity);
        }

        // If no negative weight cycle is found, return 0
        return 0;
    }
}
