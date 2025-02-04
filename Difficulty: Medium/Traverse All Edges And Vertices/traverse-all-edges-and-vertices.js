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


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++){
        
        let n = parseInt(readLine());
        
        
        let paths = [];
        for(let i=0;i<n;i++)
        {
            let a = readLine().trim().split(' ').map((x) => parseFloat(x));
            paths.push(a);
        }
        
        let obj = new Solution();
        let res = obj.isPossible(paths);
        console.log(res);
    }
}

// } Driver Code Ends

class Solution {
    /**
    * @param number[][] paths
    * @returns number
    */
    isPossible(paths) {
        const n = paths.length;

        // Step 1: Check the degree of each vertex
        for (let i = 0; i < n; i++) {
            let degree = 0;
            for (let j = 0; j < n; j++) {
                degree += paths[i][j];
            }
            if (degree % 2 !== 0) {
                return 0; // If any vertex has odd degree, return 0
            }
        }

        // Step 2: Check if all vertices with non-zero degree are connected
        const visited = new Array(n).fill(false);

        // Perform DFS from the first vertex that has a degree > 0
        let startVertex = -1;
        for (let i = 0; i < n; i++) {
            let degree = 0;
            for (let j = 0; j < n; j++) {
                degree += paths[i][j];
            }
            if (degree > 0) {
                startVertex = i;
                break;
            }
        }

        // If no vertex has edges, the graph is not traversable
        if (startVertex === -1) return 0;

        // DFS to check connectivity
        const dfs = (v) => {
            visited[v] = true;
            for (let i = 0; i < n; i++) {
                if (paths[v][i] === 1 && !visited[i]) {
                    dfs(i);
                }
            }
        };

        dfs(startVertex);

        // Check if all vertices with degree > 0 are visited
        for (let i = 0; i < n; i++) {
            if (paths[i].some(edge => edge === 1) && !visited[i]) {
                return 0;
            }
        }

        // If both conditions are satisfied, the graph has an Eulerian cycle
        return 1;
    }
}
