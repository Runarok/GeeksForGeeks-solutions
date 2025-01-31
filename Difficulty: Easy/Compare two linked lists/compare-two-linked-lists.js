//{ Driver Code Starts
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function createLinkedList(chars) {
    if (chars.length === 0) return null;
    let head = new Node(chars[0]);
    let current = head;
    for (let i = 1; i < chars.length; i++) {
        current.next = new Node(chars[i]);
        current = current.next;
    }
    return head;
}

function main() {
    const input = require('readline').createInterface({
        input : process.stdin,
        output : process.stdout
    });

    let t;
    const lines = [];
    input.on('line', (line) => { lines.push(line); });

    input.on('close', () => {
        t = parseInt(lines[0]);
        let index = 1;
        const solution = new Solution();
        while (t-- > 0) {
            const list1 = createLinkedList(lines[index].trim().split(' '));
            const list2 = createLinkedList(lines[index + 1].trim().split(' '));
            console.log(solution.compare(list1, list2));
            console.log("~");
            index += 2;
        }
    });
}

main();

// } Driver Code Ends


// User function Template for javascript

/* LINKED LIST NODE
class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}
*/

/**
 * @param {Node} head1
 * @param {Node} head2
 * @return {number}
 */
class Solution {
    // Function to compare two linked lists by converting them to strings
    compare(head1, head2) {
        // Initialize pointers for both linked lists
        let first = head1;
        let second = head2;
        
        let firstString = ''; // String to store the data of the first list
        let secondString = ''; // String to store the data of the second list
        
        // Traverse the first list and concatenate its data to firstString
        while (first != null) {
            firstString += first.data; // Append current node's data
            first = first.next; // Move to the next node
        }
        
        // Traverse the second list and concatenate its data to secondString
        while (second != null) {
            secondString += second.data; // Append current node's data
            second = second.next; // Move to the next node
        }
        
        // Use localeCompare to compare the two strings lexicographically
        return firstString.localeCompare(secondString);
    }
}
