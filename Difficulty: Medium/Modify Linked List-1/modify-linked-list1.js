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

        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let head = null;
        head = new Node(input_ar1[0]);
        let tail = head;
        for (let i = 1; i < input_ar1.length; i++) {
            tail.next = new Node(input_ar1[i]);
            tail = tail.next;
        }

        let obj = new Solution();
        let res = obj.modifyTheList(head);

        printlist(res);

        console.log("~");
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
    * This function modifies the linked list by:
    * 1. Finding the middle of the list
    * 2. Reversing the second half of the list
    * 3. Modifying the first half values by subtracting the reversed second half values
    * 4. Restoring the second half values using the original first half
    * 5. Reversing the second half back to maintain the original structure.
    *
    * @param {Node} head - The head of the linked list
    * @returns {Node} - The modified linked list
    */
    modifyTheList(head) {
        // Step 1: Use the slow and fast pointer technique to find the middle of the list
        let slow = head;
        let fast = head;

        // Helper function to reverse a linked list
        function reverseList(head) {
            let prev = null;
            let curr = head;
            // Reverse the linked list by switching the next pointers
            while (curr) {
                let next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }
            return prev;
        }

        // Move slow pointer to the middle of the list using fast pointer
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Step 2: Reverse the second half of the list starting from the slow pointer
        let secondHalf = reverseList(slow);

        // Step 3: Modify the first half nodes by subtracting the second half's nodes
        let firstHalf = head;
        let tempSecondHalf = secondHalf;
        let originalValues = [];  // Store the original values of the first half for later restoration

        while (tempSecondHalf) {
            // Store the original value from the first half
            originalValues.push(firstHalf.data);

            // Modify the first half node by subtracting corresponding second half node
            firstHalf.data = tempSecondHalf.data - firstHalf.data;

            // Move to the next node in the first half and second half
            firstHalf = firstHalf.next;
            tempSecondHalf = tempSecondHalf.next;
        }

        // Step 4: Restore the second half values using the original first half values
        tempSecondHalf = secondHalf;
        for (let i = 0; i < originalValues.length; i++) {
            // Restore the second half node values
            tempSecondHalf.data = originalValues[i];
            tempSecondHalf = tempSecondHalf.next;
        }

        // Step 5: Reverse the second half back to maintain the original structure
        reverseList(secondHalf);

        // Return the head of the modified linked list
        return head;
    }
}
