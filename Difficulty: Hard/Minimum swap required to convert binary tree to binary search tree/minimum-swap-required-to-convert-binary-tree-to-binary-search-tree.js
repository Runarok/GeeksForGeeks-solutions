//{ Driver Code Starts
let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let ans = obj.minSwaps(arr);
        console.log(ans);
        console.log("~");
    }
}

// } Driver Code Ends
// } Driver Code Ends


// JavaScript program for Minimum swap required
// to convert binary tree to binary search tree
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    
    binaryTree(arr, i) {
        if (i >= arr.length) {
            return null;
        }
        
        let root = new Node(arr[i]);
        root.right = this.binaryTree(arr, 2 * i + 2);
        root.left = this.binaryTree(arr, 2 * i + 1);
        return root;
    }
    
    inorder(root, arr) {
        if (root === null) {
            return;
        }
        
        this.inorder(root.left, arr);
        arr.push(root.data);
        this.inorder(root.right, arr);
    }

    // Function to find the minimum number of swaps required to sort the array.
    minSwaps(arr) {
        let ans = [];
        let root = this.binaryTree(arr, 0);
        this.inorder(root, ans);

        let n = ans.length;
        let cur = [];

        // Iterating over the array elements.
        for (let i = 0; i < n; i++) {
            // Storing the elements and their position as a pair in the list.
            cur.push([ans[i], i]);
        }

        // Sorting the list.
        cur.sort((a, b) => a[0] - b[0]);

        // Using a boolean array to mark visited elements and initially marking all the nodes as false.
        let vis = Array(n).fill(false);
        let ans1 = 0;

        for (let i = 0; i < n; i++) {
            // If the element is already visited or it is already at the correct position, we continue the loop.
            if (vis[i] || cur[i][1] === i) {
                continue;
            } else {
                let cycleSize = 0;
                let j = i;

                // While the element is not visited, we find the number of nodes in this cycle and keep incrementing the cycle size.
                while (!vis[j]) {
                    vis[j] = true;
                    j = cur[j][1];
                    cycleSize++;
                }

                // Updating the number of swaps required.
                ans1 += Math.max(0, cycleSize - 1);
            }
        }

        return ans1;
    }
}
