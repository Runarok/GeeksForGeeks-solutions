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

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function buildTree(str) {
  // Corner Case
  if (str.length === 0 || str[0] === "N") return null;

  // Create the root of the tree
  let root = new Node(parseInt(str[0]));

  // Push the root to the queue
  let queue = [];
  let start = 0;
  queue.push(root);

  // Starting from the second element
  let i = 1;
  while (queue.length !== start && i < str.length) {
    // Get and remove the front of the queue
    let currNode = queue[start];
    start++;

    // Get the current node's value from the string
    let currVal = str[i];

    // If the left child is not null
    if (currVal !== "N") {
      // Create the left child for the current node
      currNode.left = new Node(parseInt(currVal));

      // Push it to the queue
      queue.push(currNode.left);
    }

    // For the right child
    i++;
    if (i >= str.length) break;
    currVal = str[i];

    // If the right child is not null
    if (currVal !== "N") {
      // Create the right child for the current node
      currNode.right = new Node(parseInt(currVal));

      // Push it to the queue
      queue.push(currNode.right);
    }
    i++;
  }

  return root;
}

let s = "";
function inorder(root) {
  if (root === null) return;
  inorder(root.left);
  s = s + root.data + " ";
  inorder(root.right);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let s_tree = readLine().trim().split(" ");
    let root = buildTree(s_tree);
    let obj = new Solution();

    let res = obj.sumOfLongRootToLeafPath(root);
    console.log(res);
  
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * @param {Node} root
 * @return {number}
 */


class Solution {
    // Function to return the sum of the longest root-to-leaf path
    sumOfLongRootToLeafPath(root) {
        // Helper function to perform depth-first search
        function dfs(node, maxSum, maxLength) {
            if (!node) {
                return [0, 0]; // Return sum and length as zero for null node
            }

            // Add current node's value to the sum and increase the path length
            maxSum += node.data;
            maxLength += 1;

            // If the current node is a leaf, return the current sum and length
            if (!node.left && !node.right) {
                return [maxSum, maxLength];
            }

            // Recursively calculate sum and length for left and right children
            let [leftSum, leftLength] = dfs(node.left, maxSum, maxLength);
            let [rightSum, rightLength] = dfs(node.right, maxSum, maxLength);

            // Return the path with the greater length, or greater sum if lengths are equal
            if (leftLength > rightLength || (leftLength === rightLength && leftSum > rightSum)) {
                return [leftSum, leftLength];
            } else {
                return [rightSum, rightLength];
            }
        }

        // Start the DFS with initial sum and length as zero
        let [maxSum, maxLength] = dfs(root, 0, 0);
        return maxSum;
    }
}