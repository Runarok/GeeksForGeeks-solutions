//{ Driver Code Starts
// Initial Template for javascript

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class GfG {
    static buildTree(str) {
        if (str.length === 0 || str.charAt(0) === 'N') {
            return null;
        }

        const ip = str.split(" ");
        // console.log("Input array:", ip); // Add this line for logging
        const root = new Node(parseInt(ip[0]));
        const queue = [];

        queue.push(root);

        let i = 1;
        while (queue.length > 0 && i < ip.length) {
            const currNode = queue.shift();
            let currVal = ip[i];

            if (currVal !== 'N') {
                currNode.left = new Node(parseInt(currVal));
                queue.push(currNode.left);
            }

            i++;
            if (i >= ip.length) break;

            currVal = ip[i];

            if (currVal !== 'N') {
                currNode.right = new Node(parseInt(currVal));
                queue.push(currNode.right);
            }
            i++;
        }

        return root;
    }

    static printInorder(root) {
        if (root === null) return;

        this.printInorder(root.left);
        process.stdout.write(root.data + " ");

        this.printInorder(root.right);
    }

    static displayCList(head) {
        let itr = head;
        do {
            if (!isNaN(itr.data)) process.stdout.write(itr.data + " ");
            itr = itr.right;
        } while (head !== itr);
        console.log();
        itr = itr.left;
        head = itr;
        do {
            if (!isNaN(itr.data)) process.stdout.write(itr.data + " ");
            itr = itr.left;
        } while (head !== itr);
        console.log();
        console.log("~");
    }

    static main() {
        const readline = require('readline');
        const rl =
            readline.createInterface({input : process.stdin, output : process.stdout});

        rl.question("", function(t) {
            let remaining = t;

            rl.on('line', function(input) {
                const s = input;
                const root = GfG.buildTree(s);

                const boj = new Solution();
                const head = boj.bTreeToClist(root);
                GfG.displayCList(head);

                remaining--;
                if (remaining === 0) rl.close();
            });
        });
    }
}

// Position this line where user code will be pasted.

GfG.main();

// } Driver Code Ends


class Solution {
    constructor() {
        this.head = null;
        this.prev = null;
    }

    bTreeToClist(root) {
        if (!root) return null;
        this.inorderTraversal(root);

        // Make the circular connection
        if (this.head && this.prev) {
            this.prev.right = this.head;  // Connect the last node to the head
            this.head.left = this.prev;   // Connect the head to the last node
        }
        
        return this.head;
    }

    inorderTraversal(node) {
        if (!node) return;

        // Traverse left subtree
        this.inorderTraversal(node.left);

        // Convert the current node to a doubly linked list node
        if (!this.head) {
            // The first node becomes the head
            this.head = node;
        } else {
            // Set the previous node's right pointer to the current node
            this.prev.right = node;
            node.left = this.prev;  // Set current node's left pointer to the previous node
        }
        
        // Move the prev pointer to the current node
        this.prev = node;

        // Traverse right subtree
        this.inorderTraversal(node.right);
    }
}
