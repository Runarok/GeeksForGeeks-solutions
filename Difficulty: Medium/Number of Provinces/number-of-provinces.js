//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;



process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
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
 
  for (; i < t; i++) {
    let V = parseInt(readLine());
    let adj = [];
    for(let j = 0;j < V;j++){
      let row = readLine().trim().split(" ").map((x)=>parseInt(x));
      adj.push(row);
    }
    let obj = new Solution();
    let res = obj.numProvinces(V,adj);
    console.log(res);
  
console.log("~");
}

}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} V
 * @param {number[][]} adj
 * @return {number}
*/

class Solution {
    numProvinces(V, adj) {
        let visited = new Array(V).fill(false);
        let provinces = 0;

        const dfs = (node) => {
            visited[node] = true;
            for (let neighbor = 0; neighbor < V; neighbor++) {
                if (adj[node][neighbor] === 1 && !visited[neighbor]) {
                    dfs(neighbor);
                }
            }
        };

        for (let i = 0; i < V; i++) {
            if (!visited[i]) {
                provinces++;
                dfs(i);
            }
        }

        return provinces;
    }
}
