//{ Driver Code Starts
import java.io.*;
import java.lang.*;
import java.util.*;

class Node {
    int data;
    Node next;

    Node(int key) {
        data = key;
        next = null;
    }
}

class Rearr {
    static Node head;

    public static void main(String args[]) throws IOException {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());

        while (t-- > 0) {
            String s[] = in.readLine().trim().split(" ");
            Node head = new Node(Integer.parseInt(s[0]));
            Node copy = head;
            for (int i = 1; i < s.length; i++) {
                Node temp = new Node(Integer.parseInt(s[i]));
                copy.next = temp;
                copy = copy.next;
            }
            Solution ob = new Solution();
            ob.rearrange(head);
            printLast(head);
            System.out.println();
            System.out.println("~");
        }
    }

    public static void printLast(Node node) {
        while (node != null) {
            System.out.print(node.data + " ");
            node = node.next;
        }
    }
}
// } Driver Code Ends


/*node class of the linked list
class Node
{
    int data;
    Node next;
    Node(int key)
    {
        data = key;
        next = null;
    }
}*/
class Solution {
    public static void rearrange(Node head) {
        if (head == null || head.next == null || head.next.next == null) return;

        // Step 1: Split the list into two parts (odd-positioned and even-positioned nodes)
        Node odd = head;
        Node even = head.next;
        Node evenHead = even; // Store the head of even nodes for later appending

        while (even != null && even.next != null) {
            odd.next = even.next; // Skip an even node
            odd = odd.next; // Move odd pointer forward
            even.next = odd.next; // Skip an odd node
            even = even.next; // Move even pointer forward
        }
        
        odd.next = null; // Mark the end of the odd list

        // Step 2: Reverse the extracted even-positioned list
        Node prev = null, curr = evenHead, nextNode;
        while (curr != null) {
            nextNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextNode;
        }

        // Step 3: Append reversed even list to the end of odd list
        odd.next = prev;
    }
}
