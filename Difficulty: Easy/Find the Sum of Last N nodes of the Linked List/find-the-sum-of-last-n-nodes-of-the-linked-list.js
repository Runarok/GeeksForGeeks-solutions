//{ Driver Code Starts
// Initial Template for javascript

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x));
        let n = parseInt(readLine());
        let head = new Node(arr[0]);
        let tail = head;
        for (let j = 1; j < arr.length; j++) {
            tail.next = new Node(arr[j]);
            tail = tail.next;
        }
        let obj = new Solution();
        console.log(obj.sumOfLastN_Nodes(head, n));
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/*LINKED LIST NODE
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}
*/

/**
 * @param {Node} head
 * @return {number}
 */

class Solution {
    /**
     * Function to calculate the sum of the last 'n' nodes of a linked list.
     * @param {Node} head - The head of the linked list
     * @param {number} n - The number of last nodes to sum
     * @returns {number} - The sum of the last 'n' nodes
     */
    sumOfLastN_Nodes(head, n) {
        let current = head;
        let totalNodes = 0;

        // Step 1: Traverse the list to find the total number of nodes
        while (current) {
            totalNodes++;
            current = current.next;
        }

        // If 'n' is greater than or equal to the total number of nodes, return the sum of all nodes
        if (n >= totalNodes) {
            current = head;
            let totalSum = 0;
            while (current) {
                totalSum += current.data;
                current = current.next;
            }
            return totalSum;
        }

        // Step 2: Traverse again to find the sum of the last 'n' nodes
        let startIndex = totalNodes - n;
        current = head;
        let sum = 0;

        // Traverse to the starting point and calculate the sum
        for (let i = 0; i < startIndex; i++) {
            current = current.next;
        }
        while (current) {
            sum += current.data;
            current = current.next;
        }

        return sum;
    }
}
