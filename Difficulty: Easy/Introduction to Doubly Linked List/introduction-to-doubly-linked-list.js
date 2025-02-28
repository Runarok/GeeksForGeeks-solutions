//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split("\n").map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = null;

// function to print the linkedlist
function printlist(head) {
    let current = head;
    let s = '';
    while (current !== null) {
        s += current.data + " ";
        current = current.next;
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let n = parseInt(readLine());

        let arr = new Array(n);
        let input_arr = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) {
            arr[i] = input_arr[i];
        }

        let obj = new Solution();
        let res = obj.constructDLL(arr);

        printlist(res);
    }
}

// } Driver Code Ends

/*

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    /**
    * @param {number} n
    * @param {number[]} arr
    * @returns {Node}
    */
    constructDLL(arr) {
        // Check if the input array is null
        if (arr === null) {
            return null;
        }

        // Create the head of the linked list using the first element of the array
        let head = new Node(arr[0]);

        // Current pointer to traverse the linked list
        let curr = head;
        let i = 1;

        // Iterate through the array to construct the doubly linked list
        while (i < arr.length) {
            // Create a new node for each element and link it to the current node
            curr.next = new Node(arr[i]);
            curr = curr.next; // Move the current pointer to the new node
            i++;
        }

        // Return the head of the constructed doubly linked list
        return head;
    }
}
