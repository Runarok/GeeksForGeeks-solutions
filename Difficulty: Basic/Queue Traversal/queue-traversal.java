//{ Driver Code Starts
// Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) {

        // taking input using class Scanner
        Scanner sc = new Scanner(System.in);

        // taking total number of testcases
        int t = sc.nextInt();
        sc.nextLine();
        while (t-- > 0) {
            // taking total number of elements
            String temp[] = sc.nextLine().trim().split(" ");
            int n = temp.length;

            // Creating a Queue
            Queue<Integer> q = new LinkedList<>();

            // adding all the elements to the Queue
            for (int i = 0; i < n; i++) {
                q.add(Integer.parseInt(temp[i]));
            }

            // calling the queueTraversal method
            queueTraversal(q);

            System.out.println();
        }
    }

    
// } Driver Code Ends

// User function Template for Java

public static void queueTraversal(Queue<Integer> queue) {
    // Iterating through the queue and printing each element with a space
    for (int element : queue) {
        System.out.print(element + " ");
    }
}


//{ Driver Code Starts.
}
// } Driver Code Ends