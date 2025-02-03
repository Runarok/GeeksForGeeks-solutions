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
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        
        input_line = readLine().split(' ');
        let Q = parseInt(input_line[0]);
        
        let par = new Array(n+1);
        let rank1 = new Array(n+1);
        
        for(let i=0;i<=n;i++)
        {
            par[i]=i;
            rank1[i]=1;
        }
        let obj = new Solution();
        for(let i=0;i<Q;i++)
        {
            input_line = readLine().split(' ');
            let c = input_line[0];
            let a = input_line[1];
            let b = input_line[2];
            if(c=='U')
            {
                obj.union_(a,b,par,rank1);
            }
            else
            {
                let ans = obj.isConnected(a, b, par, rank1);
                if(ans)
                    ans=1;
                else
                    ans=0;
                console.log(ans);   
            }
        }
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number} a
 * @param {number} b
 * @param {number[]} par
 * @param {number[]} rank1
 * @param {number} x
 * @param {number} y
*/
class Solution {
    /**
     * Function to find the representative (or root) of the set to which x belongs.
     * Implements path compression to make future queries faster.
     * 
     * @param {number} x - The node whose set representative is to be found.
     * @param {number[]} par - Array to track the parent of each node.
     * @returns {number} - The root (representative) of the set.
     */
    find(x, par) {
        if (par[x] !== x) {
            par[x] = this.find(par[x], par);  // Path compression: Flatten the tree
        }
        return par[x];
    }

    /**
     * Function to merge two sets, the sets containing a and b, into one.
     * Uses union by rank to keep the tree shallow.
     * 
     * @param {number} a - First node.
     * @param {number} b - Second node.
     * @param {number[]} par - Array to track the parent of each node.
     * @param {number[]} rank1 - Array to track the rank of each node (used for union by rank).
     */
    union_(a, b, par, rank1) {
        let rootA = this.find(a, par);  // Find the root of a's set
        let rootB = this.find(b, par);  // Find the root of b's set

        if (rootA !== rootB) {
            // Union by rank: attach the smaller tree under the larger tree
            if (rank1[rootA] > rank1[rootB]) {
                par[rootB] = rootA;
            } else if (rank1[rootA] < rank1[rootB]) {
                par[rootA] = rootB;
            } else {
                par[rootB] = rootA;
                rank1[rootA] += 1;  // Increase the rank of the root if the ranks are equal
            }
        }
    }

    /**
     * Function to check whether two nodes are connected, i.e., belong to the same set.
     * 
     * @param {number} x - First node.
     * @param {number} y - Second node.
     * @param {number[]} par - Array to track the parent of each node.
     * @param {number[]} rank1 - Array to track the rank of each node.
     * @returns {boolean} - True if x and y are connected, else false.
     */
    isConnected(x, y, par, rank1) {
        return this.find(x, par) === this.find(y, par);  // Check if both nodes have the same root
    }
}
