//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.lang.*;
import java.io.*;


// create class Node
class Node
{
    int data;
    Node next;
    Node(int data)
    {
        this.data = data;
        this.next = null;
        //this.prev = null;
    }
}

class circular_ll
{
    static Node head;
    static Node lastnode;
    
    public static void addToTheLast(Node node)
    
    {
        if(head == null)
        {
            head = node;
            lastnode = node;
        }
        else{
            
            lastnode.next = node;
            lastnode = node;
        }
    }
    
    static void print(Node node)
    {
        Node temp = node;
        if(node != null)
        {
            do
           {
            System.out.print(temp.data + " ");
            temp = temp.next;
           }
        
        
        while(temp != node);
            
        }
        
        //print
    }
    
    public static void main (String[] args)throws IOException 
    {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        
        while(t-- > 0)
        {
            String s = read.readLine();
            String num[] = s.trim().split("\\s+");
            
            int n = Integer.parseInt(num[0]);
            int val = Integer.parseInt(num[1]);
            
            // System.out.println(n);
            String st = read.readLine();
            String str[]= st.trim().split("\\s+");
            
            
            Node head = null;
            int x = Integer.parseInt(str[0]);
            head = new Node(x);
            addToTheLast(head);
            
            for(int i = 1; i < n; i++)
            {
               
                addToTheLast(new Node(Integer.parseInt(str[i])));
            }
           lastnode.next = head;
           
           head = new gfg().insert_at_end(head, val);
           
           print(head);
           System.out.println();
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

//User function Template for Java

/*// create class Node
class Node
{
    int data;
    Node next;
    Node(int data)
    {
        this.data = data;
        this.next = null;
        //this.prev = null;
    }
}*/
class gfg {
    static Node insert_at_end(Node head, int x) {
        // Case 1: If the list is empty, create a new node and link it to itself
        if (head == null) {
            Node newNode = new Node(x);
            head = newNode;
            head.next = head;  // Circular link
            return head;
        }
        
        // Case 2: If there is only one node, insert the new node after it
        else if (head.next == head) {
            Node newNode = new Node(x);
            newNode.next = head;
            head.next = newNode;
            return head;
        }
        
        // Case 3: Traverse to the last node and insert the new node
        Node temp = head;
        while (temp.next != head) {
            temp = temp.next;
        }
        
        // Insert the new node at the end
        Node newNode = new Node(x);
        newNode.next = head;
        temp.next = newNode;
        
        return head;
    }
}



//{ Driver Code Starts.

// } Driver Code Ends