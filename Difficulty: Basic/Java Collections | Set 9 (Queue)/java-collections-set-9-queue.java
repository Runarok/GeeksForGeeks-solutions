//{ Driver Code Starts
//Initial Template for Java

// Java orogram to demonstrate working of Queue
// interface in Java
import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

class GFG
{
  public static void main(String[] args)
  {
    Scanner sc=new Scanner(System.in);
    int t=sc.nextInt();
    while(t-->0){
    int n=sc.nextInt();
    int flag=0;
    Solution obj=new Solution();
    while(n-->0)
        {flag=0;
        char p=sc.next().charAt(0);
        if(p=='a')
            {int k=sc.nextInt();
            obj.addElement(k);}
        else if(p=='r')
            obj.RemoveElement();
        else if(p=='p')
            obj.peekElement();
        else
            obj.Size();
    }
    System.out.println();
    
System.out.println("~");
}
  }
}


// } Driver Code Ends

// User function Template for Java

class Solution {
    Queue<Integer> q;  // Queue to store elements
    
    // Constructor to initialize the queue
    Solution() {
        q = new LinkedList<>();
    }

    // Method to add an element to the queue
    public void addElement(int key) {
        q.add(key);  // Adds element at the end of the queue
    }

    // Method to remove and print the front element of the queue
    public void RemoveElement() {
        if (!q.isEmpty()) {
            System.out.print(q.poll() + " ");  // Removes and prints the front element
        } else {
            System.out.print("-1 ");  // If queue is empty, print -1
        }
    }

    // Method to print the front element without removing it
    public void peekElement() {
        if (!q.isEmpty()) {
            System.out.print(q.peek() + " ");  // Prints the front element without removing it
        } else {
            System.out.print("-1 ");  // If queue is empty, print -1
        }
    }

    // Method to print the size of the queue
    public void Size() {
        System.out.print(q.size() + " ");  // Prints the size of the queue
    }
}
