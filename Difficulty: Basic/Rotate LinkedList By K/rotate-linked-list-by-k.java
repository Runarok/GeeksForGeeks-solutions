//{ Driver Code Starts
// Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) {

        // taking input using Scanner class
        Scanner sc = new Scanner(System.in);

        // taking total testcases
        int t = Integer.parseInt(sc.nextLine());
        while (t-- > 0) {
            // taking total elements
            String temp[] = sc.nextLine().trim().split(" ");
            int n = temp.length;

            // Creating a new LinkedList
            LinkedList<Integer> ll = new LinkedList<>();

            // adding elements to LinkedList-1
            for (int i = 0; i < n; i++) ll.add(Integer.parseInt(temp[i]));

            // taking number of rotations
            int k = Integer.parseInt(sc.nextLine());
            // caling rotateByK() method
            // and passing LinkedList
            // and rotations as arguments
            rotateByK(ll, k);

            // printing the elements
            for (int i : ll) System.out.print(i + " ");

            System.out.println();

            System.out.println("~");
        }
    }

    
// } Driver Code Ends
// User function Template for Java

public static void rotateByK(LinkedList<Integer> linkedList, int rotationCount) {
    // Rotates the linked list to the right by the specified number of positions
    Collections.rotate(linkedList, rotationCount);
}



//{ Driver Code Starts.
}

// } Driver Code Ends