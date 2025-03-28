//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.io.*;

class Node{
    int data;
    Node next;
    
    Node(int x){
        data = x;
        next = null;
    }
    
}
class GFG{
    public static void main(String args[]) throws IOException { 
        
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        
        while(t > 0){
        
        	int n = sc.nextInt();
        
            Node head = new Node(sc.nextInt());
            Node tail = head;
        
            for(int i=0; i<n-1; i++)
            {
                Node newNode = new Node(sc.nextInt());
                newNode.next=head;
                head=newNode;
            }
            tail.next=head;
        
            Solution ob = new Solution();
            ob.printList(head);
            System.out.println();
            t--;
        
System.out.println("~");
}
    } 
} 
  
// } Driver Code Ends


// User function Template for Java

/* Node of a linked list
 class Node {
    int data;
    Node next;

    Node(int x) {
        data = x;
        next = null;
    }
}
*/

class Solution {
    /* Function to print nodes in a given Circular linked list */
    void printList(Node head) {
        // Start with the head node of the circular linked list
        Node curr = head;
        
        // Loop through the list, printing each node's data
        // Continue looping until we reach the head node again
        do {
            System.out.print(curr.data + " ");  // Print current node's data
            curr = curr.next;  // Move to the next node
        } while (curr != head);  // Stop when we return to the head node
    }
}
