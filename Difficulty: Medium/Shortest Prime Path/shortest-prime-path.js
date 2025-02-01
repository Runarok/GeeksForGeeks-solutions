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
    let [num1,num2] = readLine().split(" ").map((x) => parseInt(x));
    let obj = new Solution();
    let res = obj.solve(num1,num2);
    if(res===-0)
      res = 0;
    console.log(res);
  
console.log("~");
}

}
// } Driver Code Ends

class Solution {
    solve(a, b) {
        if (a === b) return 0;
        const maxi = 1e4;

        // Sieve of Eratosthenes (S.O.E)
        const primes = Array(maxi).fill(1);
        primes[0] = primes[1] = 0;
        for (let i = 2; i <= Math.sqrt(maxi); i++) {
            if (primes[i]) {
                for (let j = i * i; j < maxi; j += i) {
                    primes[j] = 0;
                }
            }
        }

        const primeSet = new Set();
        for (let i = 1000; i < maxi; i++) {
            if (primes[i]) {
                primeSet.add(i);
            }
        }

        const adj = {};

        // Function to add neighboring prime numbers
        function addNeighbor(num) {
            let numStr = num.toString();
            for (let i = 0; i < 4; i++) {
                for (let d = 0; d < 10; d++) {
                    let newNum = numStr.slice(0, i) + d + numStr.slice(i + 1);
                    newNum = parseInt(newNum);
                    if (primeSet.has(newNum) && newNum !== num) {
                        if (!adj[num]) adj[num] = [];
                        adj[num].push(newNum);
                    }
                }
            }
        }

        // Build the adjacency list for prime numbers
        for (let prime of primeSet) {
            addNeighbor(prime);
        }

        // BFS function to find the shortest path
        function bfs(start, end) {
            const queue = [];
            queue.push(start);

            const distance = { [start]: 0 };

            while (queue.length > 0) {
                const node = queue.pop();

                for (let adjNode of adj[node] || []) {
                    if (!(adjNode in distance)) {
                        distance[adjNode] = distance[node] + 1;
                        queue.unshift(adjNode);
                        if (adjNode === end) return distance[adjNode];
                    }
                }
            }

            return -1;
        }

        // Run BFS from 'a' to 'b'
        return bfs(a, b);
    }
}
