//{ Driver Code Starts
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

function printList(head) {
    let temp = head;
    if (head) {
        do {
            process.stdout.write(temp.data + " ");
            temp = temp.next;
        } while (temp !== head);
        process.stdout.write("\n");
    }
}

function newNode(key) {
    let temp = new Node(key);
    return temp;
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x));
        let head = null;
        let temp = null;

        if (arr.length > 0) {
            head = new Node(arr[0]);
            temp = head;
            for (let j = 1; j < arr.length; ++j) {
                temp.next = new Node(arr[j]);
                temp = temp.next;
            }
        }
        temp.next = head;

        const ob = new Solution();
        const [head1, head2] = ob.splitList(head);
        printList(head1);
        printList(head2);
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} node
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    splitList(head) {
        // If the list is empty (head is null), return two null values
        if(head === null) return [null, null];
        
        let slow = head; // Slow pointer starts at the head
        let fast = head; // Fast pointer also starts at the head
        
        // Traverse the list using two pointers (slow and fast)
        // The fast pointer moves two steps at a time, slow moves one step at a time
        // The loop continues until the fast pointer reaches the end of the circular list
        while(fast.next !== head && fast.next.next !== head) {
            slow = slow.next; // Slow pointer moves one step
            fast = fast.next.next; // Fast pointer moves two steps
        }
        
        let head1 = head; // The first part of the split list starts at head
        let head2 = slow.next; // The second part starts from the slow pointer's next node
        
        // If the fast pointer's next is the head node (i.e., we are at the last node of the circular list)
        // Move the fast pointer one step to ensure the loop is correctly broken
        if(fast.next.next === head) {
            fast = fast.next;
        }
        
        // Connect the end of the first list to the second list
        fast.next = head2;
        
        // Connect the end of the second list to the first list
        slow.next = head1;
        
        // Return both parts as an array of two lists
        return [head1, head2];
    }
}
