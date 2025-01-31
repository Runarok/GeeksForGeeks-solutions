//{ Driver Code Starts
// Define Linked List Node class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Define Binary Tree Node class
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Function to push an element to the linked list
function push(headRef, newData) {
    let newNode = new Node(newData);
    newNode.next = headRef[0];
    headRef[0] = newNode;
}

// Function to perform level order traversal of the binary tree
function levelOrder(root) {
    if (!root) return;
    let queue = [];
    queue.push(root);
    while (queue.length > 0) {
        let currentNode = queue.shift();
        process.stdout.write(currentNode.data + " ");
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
    }
    console.log(); // Newline after level order traversal
}

// Function to reverse a linked list
function reverse(headRef) {
    let prev = null;
    let curr = headRef[0];
    let next = null;
    while (curr !== null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    headRef[0] = prev;
}

// Main function
function main() {
    const input = require('readline').createInterface({
        input : process.stdin,
        output : process.stdout
    });

    input.question('', function(T) {
        T = parseInt(T);

        input.on('line', function(line) {
            let head = null;
            let headRef = [ head ]; // Use an array to hold head reference
            let numbers = line.trim().split(' ').map(Number);

            // Add numbers to the linked list
            numbers.forEach(num => { push(headRef, num); });

            reverse(headRef);

            let solution = new Solution();
            let root = solution.linkedListToBinaryTree(headRef[0]);

            if (!root) {
                console.log("[]");
            } else {
                levelOrder(root);
            }

            if (--T === 0) {
                input.close();
            }
        });
    });
}

// Call main function
main();

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} head
 * @returns {TreeNode}
 */

/*
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

// Class Solution
// Class Solution
class Solution {
    // Function to convert a linked list to a binary tree
    linkedListToBinaryTree(head) {
        // If the linked list is empty, return null
        if (head == null) {
            return head;
        }

        // Initialize the root of the binary tree with the first node's data
        let root = new TreeNode(head.data);
        head = head.next; // Move to the next node in the linked list
        
        // Use a queue to manage the nodes while building the binary tree
        let queue = [root];

        // Traverse the linked list and build the tree level by level
        while (head != null) {
            let parent = queue.shift(); // Dequeue a parent node
            
            // Assign the left child of the parent node
            parent.left = new TreeNode(head.data);
            head = head.next; // Move to the next node in the linked list
            queue.push(parent.left); // Enqueue the left child

            // If there is another node in the linked list, assign the right child
            if (head != null) {
                parent = queue.shift(); // Dequeue again for the right child
                parent.right = new TreeNode(head.data);
                head = head.next; // Move to the next node
                queue.push(parent.right); // Enqueue the right child
            }
        }

        // Return the root of the binary tree
        return root;
    }
}
