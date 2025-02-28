//{ Driver Code Starts
//Initial Template for Java


import java.io.*;
import java.util.Scanner; 
class Node {
    int data;
    Node next;
    Node(int d) {
        this.data = d;
        this.next = null;
    }
}
public class LinkedList{
    public static Node cur2=null;
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int t=sc.nextInt();
        while(t-->0){
            Node head=null;
            Node cur=null;
        int n=sc.nextInt();
        int p=sc.nextInt();
        cur=null;
        for(int i=0;i<n;i++)
        {
            int d=sc.nextInt();
            Node ptr=new Node(d);
            if(head==null)
            {
                head=ptr;
                cur=ptr;
            }
            else
            {
                cur.next=ptr;
                cur=ptr;
            }
        }
        cur2=head;
        while(p-->0)
        {
            cur2=cur2.next;
        }
        GfG g=new GfG();
        g.deleteNode(cur2);
        while(head!=null)
        {
            System.out.print(head.data+" ");
            head=head.next;
        }
        System.out.println();
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

// User function Template for Java

class GfG 
{
    // Function to delete a node in a linked list
    public void deleteNode(Node node) {
        // Replace the current node's data with the next node's data
        node.data = node.next.data;
        
        // Remove the next node by pointing the current node to the next of the next node
        node.next = node.next.next;
    }
}


//{ Driver Code Starts.
// } Driver Code Ends