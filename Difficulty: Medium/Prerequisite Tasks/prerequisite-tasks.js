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
        let n = parseInt(readLine());
        let p = parseInt(readLine());
        
        let arr = [];
        let obj = new Solution();
        for(let i=0;i<p;i++)
        {
            let input_line = readLine().split(' ');
            arr.push(input_line);
        }
        let ans = obj.isPossible(arr,n,p);
        console.log(ans);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[][]} prerequisites
 * @param {number} n
 * @param {number} p
 * @returns {boolean}
*/
class Solution {
    isPossible(prerequisites, n, p) {
        // Step 1: Create the graph and in-degree array
        const graph = new Array(n).fill().map(() => []);
        const inDegree = new Array(n).fill(0);

        // Build the graph and in-degree array
        for (const [task, pre] of prerequisites) {
            graph[pre].push(task);
            inDegree[task]++;
        }

        // Step 2: Kahn's Algorithm (Topological Sort)
        let queue = [];
        // Add all tasks with no prerequisites (in-degree 0)
        for (let i = 0; i < n; i++) {
            if (inDegree[i] === 0) {
                queue.push(i);
            }
        }

        let processedTasks = 0;

        while (queue.length > 0) {
            const task = queue.shift();
            processedTasks++;

            // Process all tasks that depend on the current task
            for (const neighbor of graph[task]) {
                inDegree[neighbor]--;
                if (inDegree[neighbor] === 0) {
                    queue.push(neighbor);
                }
            }
        }

        // If we processed all tasks, there's no cycle, otherwise there's a cycle
        return processedTasks === n ? "Yes" : "No";
    }
}
