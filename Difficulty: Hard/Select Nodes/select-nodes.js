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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        if(res[i]==-0)
            res[i]=0;
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let edges = [];
        for(let i=0;i<n-1;i++) {
            let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
            edges.push([input_ar1[0],input_ar1[1]]);
        }
        let obj = new Solution();
        let res = obj.countVertex(n, edges);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends


// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} N
 * @param {number[][]} edges
 * @returns {number}
*/

class Solution {
    countVertex(N, edges) {
        let adj = new Map();
        
        // Building the adjacency list
        edges.forEach(([f, t]) => {
            if (!adj.has(f)) adj.set(f, new Set());
            if (!adj.has(t)) adj.set(t, new Set());
            adj.get(f).add(t);
            adj.get(t).add(f);
        });

        // Memoization to store results of DFS calls
        const memo = new Map();

        // DFS function with memoization
        const dfs = (lit, cur, seen) => {
            let key = `${lit}-${cur}-${seen.join(',')}`;
            if (memo.has(key)) return memo.get(key);

            let tot = 0;
            adj.get(cur).forEach(nxt => {
                if (seen.includes(nxt)) return;
                let mn = dfs(true, nxt, [...seen, cur]);
                if (lit) {
                    mn = Math.min(mn, dfs(false, nxt, [...seen, cur]));
                }
                tot += mn;
            });

            const result = tot + (lit ? 1 : 0);
            memo.set(key, result);
            return result;
        };

        // Start DFS from vertex 1
        return Math.min(dfs(true, 1, []), dfs(false, 1, []));
    }
}
