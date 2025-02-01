//{ Driver Code Starts
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DriverCode;

namespace DriverCode
{
    
    public class Node{
        public int data;
        public Node next;
        
        public Node(int x){
            this.data = x;
            this.next = null;
        }
        
    }
    
    class GFG
    {
        static void printList( Node head){
            while(head!=null){
                Console.Write(head.data+" ");
                head = head.next;
            }
            Console.Write("\n");
        }
        static void Main(string[] args)
        {
            int t = Convert.ToInt32(Console.ReadLine());
            while(t>0){
                int n = Convert.ToInt32(Console.ReadLine());
                int []a = Array.ConvertAll(Console.ReadLine().Trim().Split(),int.Parse);
                Node head = new Node(a[0]);
                Node tail = head;
                
                for(int i=1;i<n;i++){
                    tail.next = new Node(a[i]);
                    tail = tail.next;
                }
                
                int pos = Convert.ToInt32(Console.ReadLine());
                Solution obj = new Solution();
                var res = obj.deleteAtPosition(head, pos);
                printList(res);
                
                t--;
            
Console.Write("~"+"\n");
}
        }
    }
}
// } Driver Code Ends

public class Solution {
    // Complete this function to delete a node at a given position
    public Node deleteAtPosition(Node head, int pos) {
        // Edge case: If position is 1, we need to delete the head node
        if (pos == 1) {
            return head.next; // head moves to the next node
        }

        // Initialize the current pointer to the head
        Node current = head;

        // Traverse to the (pos - 1)th node
        for (int i = 1; i < pos - 1 && current != null; i++) {
            current = current.next;
        }

        // If the node to delete is found and it is not the last node
        if (current != null && current.next != null) {
            current.next = current.next.next;  // Skip the node to delete
        }

        // Return the head of the modified list
        return head;
    }
}
