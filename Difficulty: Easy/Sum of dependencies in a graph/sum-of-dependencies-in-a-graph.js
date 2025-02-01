//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split("\n").map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        // let n = readLine().split(' ').map(x => parseInt(x));
        let V = parseInt(readLine());
        let E = parseInt(readLine());

        const edges = [];
        for (let i = 0; i < E; i++) {
            let input_adj = readLine().split(' ').map(x => parseInt(x));
            let x = input_adj[0];
            let y = input_adj[1];
            edges.push([ x, y ]);
        }
        // for (let i = 0; i < 2 * E; i++) {
        //     adj[input_adj[i]].push(input_adj[i+1]);
        //     // adj.push([input_adj[i],input_adj[i+1]]);
        //     // adj[i] = input_adj[i];
        //     i++;
        // }

        let obj = new Solution();
        let res = obj.sumOfDependencies(V, edges);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends

class Solution {
    sumOfDependencies(V, edges) {
        // Initialize adjacency list for each vertex
        const adj = Array.from({ length: V }, () => []);

        // Build the adjacency list from the edges
        for (let i = 0; i < edges.length; i++) {
            adj[edges[i][0]].push(edges[i][1]);
        }

        // Initialize counter for the sum of dependencies
        let cnt = 0;

        // Iterate through the adjacency list and sum the lengths of each list
        for (let u of adj) {
            cnt += u.length;
        }

        // Return the total sum of dependencies
        return cnt;
    }
}
