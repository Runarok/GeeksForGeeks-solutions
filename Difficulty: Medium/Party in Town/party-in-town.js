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
        let N = parseInt(readLine());
        let adj = new Array(N+1);
        for(let j = 0;j<=N;j++)
            adj[j] = new Array();
        for(let j = 1;j<N;j++)
        {
            let s = readLine().split(" ").map(x=>parseInt(x));
            let a = s[0];
            let b = s[1];
            adj[a].push(b);
            adj[b].push(a);
        }
        let obj = new Solution();
        let res = obj.partyHouse(N, adj);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

class Solution {
    // Function to find the minimum distance for a party house
    partyHouse(N, adj) {
        let res = Infinity; // Initialize result as infinity
        // Loop through all houses to find the optimal party house
        for (let house = 1; house < N; house++) {
            let visited = new Set(); // Set to track visited houses
            let distances = Array(N + 1).fill(0); // Array to store distances from current house
            let queue = [[house, 0]]; // Queue for BFS, starting from the current house

            visited.add(house); // Mark the current house as visited
            while (queue.length > 0) {
                let [current, dist] = queue.shift(); // Dequeue the current house and its distance
                for (let neighbour of adj[current]) {
                    if (!visited.has(neighbour)) {
                        queue.push([neighbour, dist + 1]); // Add unvisited neighbour to the queue
                        visited.add(neighbour); // Mark neighbour as visited
                        distances[neighbour] = dist + 1; // Update the distance
                    }
                }
            }

            // Find the maximum distance from the current house and minimize the result
            res = Math.min(res, Math.max(...distances));
        }

        return res; // Return the minimum distance for the optimal party house
    }
}
