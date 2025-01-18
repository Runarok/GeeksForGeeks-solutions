//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function check(V, res, adj) {
    let map = {};
    for(let i=0;i<V;i++){
        map[i] = -1;
    }
    for (let i = 0; i < V; i++) {
        map[res[i]] = i;
    }
    for (let i = 0; i < V; i++) {
        for (let j = 0;j<adj[i].length;j++) {
            if (map[i] > map[adj[i][j]]) return 0;
        }
    }
    return 1;
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++){
        
        let p = readLine().trim().split(' ').map((x) => parseInt(x));
        let n = p[0];
        let m = p[1];
        
        
        let prerequisites = [];
        for(let i=0;i<m;i++)
        {
            let a = readLine().trim().split(' ').map((x) => parseFloat(x));
            prerequisites.push(a);
        }
        
        let obj = new Solution();
        let res = obj.findOrder(n, m, prerequisites);
        let adj = [];
        for(let i=0;i<n;i++){
            adj.push([]);
        }
        for (let i=0;i<prerequisites.length;i++){
            adj[prerequisites[i][1]].push(prerequisites[i][0]);
        }
        if(!res.length)
            console.log("No Ordering Possible");
        else
            console.log(check(n, res, adj));
        
    
console.log("~");
}
}

// } Driver Code Ends



class Solution {
    findOrder(n, m, prerequisites) {
        // Step 1: Initialize graph and in-degree array
        const adjList = new Array(n).fill(null).map(() => []);
        const inDegree = new Array(n).fill(0);
        
        // Step 2: Build the graph and in-degree array
        for (const [a, b] of prerequisites) {
            adjList[b].push(a);  // task b must be done before task a
            inDegree[a] += 1;
        }

        // Step 3: Initialize the queue with tasks that have no prerequisites (in-degree 0)
        const queue = [];
        for (let i = 0; i < n; i++) {
            if (inDegree[i] === 0) {
                queue.push(i);
            }
        }

        // Step 4: Perform topological sorting using BFS (Kahn's algorithm)
        const order = [];
        while (queue.length > 0) {
            const task = queue.shift();
            order.push(task);

            // Decrease the in-degree of all tasks dependent on this task
            for (const nextTask of adjList[task]) {
                inDegree[nextTask] -= 1;
                if (inDegree[nextTask] === 0) {
                    queue.push(nextTask);
                }
            }
        }

        // Step 5: If the order contains all tasks, return the order
        // If not, it means there's a cycle, return empty array
        if (order.length === n) {
            return order;
        } else {
            return [];
        }
    }
}
