//{ Driver Code Starts
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
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ');
        for (let i = 0; i < n; i++) arr[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.isCircle(arr));

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} n
 * @param {number[} a
 * @returns {number}
 */

class Solution {
    isCircle(arr) {
        // Step 1: Count the frequency of each character as first and last character
        let inDegree = {};  // in-degree (count of times a character is the starting character)
        let outDegree = {}; // out-degree (count of times a character is the ending character)
        let graph = {};     // adjacency list to track connectivity between characters
        
        // Initialize graph structure for connectivity check
        for (let i = 0; i < arr.length; i++) {
            let start = arr[i][0];
            let end = arr[i][arr[i].length - 1];
            
            inDegree[start] = (inDegree[start] || 0) + 1;
            outDegree[end] = (outDegree[end] || 0) + 1;
            
            if (!graph[start]) graph[start] = [];
            if (!graph[end]) graph[end] = [];
            graph[start].push(end);
            graph[end].push(start);  // Since it's undirected graph for connectivity check
        }
        
        // Step 2: Check if all characters have the same in-degree and out-degree
        for (let char in inDegree) {
            if (inDegree[char] !== outDegree[char]) {
                return 0;  // Cannot form a circle if in-degree does not equal out-degree
            }
        }
        
        // Step 3: Check for graph connectivity (DFS or BFS to check if all characters are connected)
        // Find a starting character that has any edges
        let startChar = arr[0][0];
        
        // DFS function to check connectivity
        function dfs(node, visited) {
            visited[node] = true;
            for (let neighbor of graph[node]) {
                if (!visited[neighbor]) {
                    dfs(neighbor, visited);
                }
            }
        }
        
        let visited = {};
        dfs(startChar, visited);
        
        // Step 4: Ensure all characters used are visited
        for (let char in graph) {
            if (!visited[char]) {
                return 0;  // If any character is not visited, the graph is not connected
            }
        }
        
        // If all checks passed, return 1 (Yes, can form a circle)
        return 1;
    }
}
