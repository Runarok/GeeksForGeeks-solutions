//{ Driver Code Starts
// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString =
        inputString.trim().split("\n").map((string) => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let n = arr.length;
        let head = new Node(arr[0]);
        let tail = head;
        for (let j = 1; j < n; j++) {
            tail.next = new Node(arr[j]);
            tail = tail.next;
        }

        let obj = new Solution();
        let res = obj.decimalValue(head);
        console.log(res.toString());

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
    decimalValue(head) {
        const MOD = 1e9 + 7;
        let result = 0;

        // Traverse through the linked list
        while (head !== null) {
            // Shift the result left by 1 (multiply by 2) and add the current bit (head.data)
            result = (result * 2 + head.data) % MOD;
            head = head.next;
        }

        return result;
    }
}
