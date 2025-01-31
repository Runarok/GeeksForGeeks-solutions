//{ Driver Code Starts
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function push(head_ref, new_data) {
    let new_Node = new Node(new_data);
    new_Node.next = head_ref[0];
    head_ref[0] = new_Node;
}

function reverse(head_ref) {
    let prev = null;
    let cur = head_ref[0];
    let nxt;
    while (cur != null) {
        nxt = cur.next;
        cur.next = prev;
        prev = cur;
        cur = nxt;
    }
    head_ref[0] = prev;
}

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() {
    if (currentLine < inputString.length) {
        return inputString[currentLine++];
    } else {
        return null;
    }
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let first = [ null ];
        let second = [ null ];

        let arrLine = readLine();
        if (arrLine === null) return;
        let arr = arrLine.split(' ').map(x => parseInt(x));
        for (let num of arr) {
            push(first, num);
        }

        let brrLine = readLine();
        if (brrLine === null) return;
        let brr = brrLine.split(' ').map(x => parseInt(x));
        for (let num of brr) {
            push(second, num);
        }

        reverse(first);
        reverse(second);

        let obj = new Solution();
        let res = obj.multiplyTwoLists(first[0], second[0]);
        console.log(res.toString());
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for JavaScript

/* LINKED LIST NODE
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}
*/

/**
 * @param {Node} first - Head of the first linked list
 * @param {Node} second - Head of the second linked list
 * @return {number} - The product of the two numbers represented by the linked lists, modulo 10^9 + 7
 */

// Use BigInt to handle large numbers in JavaScript
class Solution {
    multiplyTwoLists(first, second) {
        let num1 = 0n; // BigInt for storing the first number
        let num2 = 0n; // BigInt for storing the second number
        const MODULO = 1000000007n; // Define the modulo as BigInt

        // Convert the first linked list to a number
        while (first !== null) {
            num1 = (num1 * 10n + BigInt(first.data)) % MODULO; // Ensure modulo at every step
            first = first.next;
        }

        // Convert the second linked list to a number
        while (second !== null) {
            num2 = (num2 * 10n + BigInt(second.data)) % MODULO; // Ensure modulo at every step
            second = second.next;
        }

        // Compute the product and return the result modulo 10^9 + 7
        return (num1 * num2) % MODULO;
    }
}
