//{ Driver Code Starts
// Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) {

        // taking input using Scanner class
        Scanner sc = new Scanner(System.in);

        // taking total count of testcases
        int t = Integer.parseInt(sc.nextLine());
        while (t-- > 0) {
            // taking total number of elements
            String temp[] = sc.nextLine().trim().split(" ");
            int n = temp.length;

            // creating an array of length n and type int
            LinkedList<Integer> ll = new LinkedList<>();

            // adding elements to the array
            for (int i = 0; i < n; i++) ll.add(Integer.parseInt(temp[i]));

            // taking k
            int k = Integer.parseInt(sc.nextLine());
            // calling method fillLinkedList()
            // and passing LinkedList and k as arguments
            fillLinkedList(ll, k);

            // printing the elements of the LinkedList
            for (int i : ll) System.out.print(i + " ");

            System.out.println();

            System.out.println("~");
        }
    }

    
// } Driver Code Ends
// User function Template for Java

public static void fillLinkedList(LinkedList<Integer> ll, int k) {
    // Filling all elements of the LinkedList with the given value 'k'
    Collections.fill(ll, k);
}

//{ Driver Code Starts.
}

// } Driver Code Ends