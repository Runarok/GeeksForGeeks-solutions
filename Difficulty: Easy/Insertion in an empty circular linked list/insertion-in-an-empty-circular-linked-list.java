//{ Driver Code Starts
import java.util.Scanner;

class Node {
    int data;
    Node next;

    // Constructor to initialize node
    public Node(int data) {
        this.data = data;
        this.next = null;
    }
}


// } Driver Code Ends

class Solution {
    // Method to insert a node into an empty circular linked list
    public Node insertInEmptyList(Node last, int data) {
        // Create a new node with the given data
        Node newNode = new Node(data);

        // In a circular linked list, the new node's next pointer points to itself
        newNode.next = newNode;

        // Return the new node, which is now the only node in the list
        return newNode;
    }
}


//{ Driver Code Starts.

class CircularLinkedList {
    private Node last;

    // Constructor to initialize an empty list
    public CircularLinkedList() { this.last = null; }

    // Method to print the circular linked list
    public void printList() {
        if (last == null) {
            return;
        }

        Node head = last.next;
        do {
            System.out.print(head.data + " ");
            head = head.next;
        } while (head != last.next);

        System.out.println();
        System.out.println("~");
    }

    public void setLast(Node last) { this.last = last; }

    public Node getLast() { return last; }
}

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int t = scanner.nextInt(); // Read number of test cases

        while (t-- > 0) {
            Solution obj = new Solution();
            CircularLinkedList cll = new CircularLinkedList();
            int n = scanner.nextInt(); // Read the integer to be inserted
            cll.setLast(obj.insertInEmptyList(cll.getLast(),
                                              n)); // Call function from Solution class
            cll.printList();
        }

        scanner.close();
    }
}

// } Driver Code Ends