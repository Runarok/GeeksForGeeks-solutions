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

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function buildTree(str){
   // Corner Case
   if(str.length === 0 || str[0] === "N")
       return null;

   // Create the root of the tree
   let root = new Node(parseInt(str[0]));

   // Push the root to the queue
   let queue = [];
   let start = 0;
   queue.push(root);

   // Starting from the second element
   let i = 1;
   while(queue.length !== start && i < str.length) {

       // Get and remove the front of the queue
       let currNode = queue[start];
       start++;

       // Get the current node's value from the string
       let currVal = str[i];

       // If the left child is not null
       if(currVal !== "N") {

           // Create the left child for the current node
           currNode.left = new Node(parseInt(currVal));

           // Push it to the queue
           queue.push(currNode.left);
       }

       // For the right child
       i++;
       if(i >= str.length)
           break;
       currVal = str[i];

       // If the right child is not null
       if(currVal !== "N") {

           // Create the right child for the current node
           currNode.right = new Node(parseInt(currVal));

           // Push it to the queue
           queue.push(currNode.right);
       }
       i++;
   }

   return root;
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar1 = readLine().split(' ');
        let root = buildTree(input_ar1);
        let obj = new Solution();
        let ans = obj.shortestRange(root);
        console.log(ans[0] + " " + ans[1]);
        
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {TreeNode} root
 * @returns {number[]}
*/

class Solution {
    // Function to find the shortest range in a binary tree.
    shortestRange(root) {
        let nums = [];

        // Function to perform level order traversal and store node values by level.
        const getLevelOrder = (root) => {
            const q = [root];  // Queue for level order traversal
            while (q.length) {
                const c = q.length;  // Number of nodes at the current level
                const levelValues = [];
                for (let i = 0; i < c; i++) {
                    const node = q.shift();  // Dequeue the first node
                    levelValues.push(node.data);  // Store the node value
                    if (node.left) q.push(node.left);  // Enqueue left child
                    if (node.right) q.push(node.right);  // Enqueue right child
                }
                nums.push(levelValues);  // Store values of the current level
            }
        };

        // Calling the function to perform level order traversal.
        getLevelOrder(root);

        const n = nums.length;  // Number of levels in the tree
        let m = [];

        // Flattening the tree levels into a list of (value, level) tuples
        for (let k = 0; k < n; k++) {
            for (let num of nums[k]) {
                m.push([num, k]);
            }
        }

        // Sorting based on node values
        m.sort((a, b) => a[0] - b[0]);

        let d = 0;  // Counter for distinct levels covered in the current window
        let left = 0, right = 0;  // Two pointers for the sliding window
        let freq = {};  // Dictionary to track level frequencies in the window
        let mn = Infinity;  // Stores the minimum range found
        let a, b;  // Variables to store the final answer

        // Expanding the right pointer until all levels are covered at least once
        while (right < m.length) {
            if (!freq[m[right][1]]) {
                d++;  // A new level is covered
            }
            freq[m[right][1]] = (freq[m[right][1]] || 0) + 1;
            if (d === n) {  // If all levels are covered, break
                break;
            }
            right++;
        }

        // Update minimum range found
        if (m[right][0] - m[left][0] < mn) {
            a = m[left][0];
            b = m[right][0];
            mn = m[right][0] - m[left][0];
        }

        // Sliding the left pointer to shrink the window while still covering all levels
        while (right < m.length) {
            while (left < right) {
                if (freq[m[left][1]] > 1) {
                    freq[m[left][1]]--;
                    left++;
                    if (m[right][0] - m[left][0] < mn) {
                        a = m[left][0];
                        b = m[right][0];
                        mn = m[right][0] - m[left][0];
                    }
                } else {
                    break;
                }
            }

            // Move both pointers to continue scanning
            freq[m[left][1]]--;
            left++;
            right++;
            d--;

            // Expanding the right pointer to ensure all levels are covered again
            while (right < m.length) {
                if (!freq[m[right][1]]) {
                    d++;  // A new level is covered
                }
                freq[m[right][1]] = (freq[m[right][1]] || 0) + 1;
                if (d === n) {  // If all levels are covered again, break
                    break;
                }
                right++;
            }

            // Update minimum range found
            if (d === n && m[right][0] - m[left][0] < mn) {
                a = m[left][0];
                b = m[right][0];
                mn = m[right][0] - m[left][0];
            }
        }

        // Returning the shortest range found
        return [a, b];
    }
}
