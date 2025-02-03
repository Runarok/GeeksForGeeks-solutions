//{ Driver Code Starts
//Initial Template
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
    for(let i=0;i<t;i++)
    {
        let input_line1 = readLine().split();
        let n = parseInt(input_line1[0]);
        
        let graph = new Array();
        for(let i=0;i<n;i++){
            let _input = readLine().split(' ').map(ele => parseInt(ele));
            let temp =Array();
            for(let j = 0;j<n;j++){
                temp.push(_input[j]);
            }
            graph.push(temp);
        }
        
        input_line1 = readLine().split(' ');
        let u = parseInt(input_line1[0]);
        let v = parseInt(input_line1[1]);
        let k = parseInt(input_line1[2]);
        
        let obj = new Solution();
        let ans = obj.MinimumWalk(graph, u, v, k);
        if(ans==-0)
            ans=0;
        console.log(ans);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number[][]} graph
 * @param {number} u
 * @param {number} v
 * @param {number} k
 * @returns {number}
*/

class Solution {
    constructor() {
        // Define a large prime number for modulo operations to avoid integer overflow
        this.MODULO = 1e9 + 7; 
    }

    dfs(currentNode, destinationNode, remainingSteps, memoizationTable, adjacencyList) {
        // Base case: If remaining steps are less than 0, no valid path exists
        if (remainingSteps < 0) return 0;

        // If the result for this node and remaining steps is already calculated, return it
        if (memoizationTable[currentNode][remainingSteps] !== -1) {
            return memoizationTable[currentNode][remainingSteps];
        }

        // If no remaining steps, check if the current node is the destination
        if (remainingSteps === 0) {
            return currentNode === destinationNode ? 1 : 0;
        }

        let totalPaths = 0;

        // Traverse through all possible neighbors of the current node
        for (let neighbor = 0; neighbor < adjacencyList.length; neighbor++) {
            // Check if there's a valid edge between current node and the neighbor
            if (adjacencyList[currentNode][neighbor] === 1) {
                // Recursively calculate the number of paths from the neighbor with one less step
                totalPaths = (totalPaths + this.dfs(neighbor, destinationNode, remainingSteps - 1, memoizationTable, adjacencyList)) % this.MODULO;
            }
        }

        // Store the computed result for current node and remaining steps in the memoization table
        memoizationTable[currentNode][remainingSteps] = totalPaths;

        // Return the total number of paths found
        return totalPaths;
    }

    MinimumWalk(graph, startNode, targetNode, maxSteps) {
        // Get the total number of nodes in the graph
        let nodeCount = graph.length;

        // Initialize a memoization table with dimensions (number of nodes) x (max steps + 1),
        // filled with -1 to indicate uncomputed values
        let memoizationTable = Array.from({ length: nodeCount }, () => Array(maxSteps + 1).fill(-1));

        // Call the DFS function to find the number of valid paths from start node to target node
        // with the given number of remaining steps
        return this.dfs(startNode, targetNode, maxSteps, memoizationTable, graph);
    }
}

