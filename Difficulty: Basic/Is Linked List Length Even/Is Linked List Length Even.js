class Solution {
    // Function should return 0 if length is even else return 1
    isLengthEven(head) {
        let count = 0;
        let current = head;
        
        // Traverse the list and count the nodes
        while (current !== null) {
            count++;
            current = current.next;
        }
        
        // Check if the count is even or odd
        if (count % 2 === 0) {
            return true;  // length is even
        } else {
            return false;  // length is odd
        }
    }
}
