//{ Driver Code Starts
// Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // taking all the testcases
        int t = sc.nextInt();
        sc.nextLine();
        while (t-- > 0) {
            // taking the total number of elements
            String temp[] = sc.nextLine().trim().split(" ");
            int n = temp.length;

            LinkedList<Integer> list = new LinkedList<>();
            for (int i = 0; i < n; i++) {
                list.add(Integer.parseInt(temp[i]));
            }

            // calling the LikedListTraversal method
            LinkedListTraversal(list);
            System.out.println();
        }
    }

    
// } Driver Code Ends

// User function Template for Java

public static void LinkedListTraversal(LinkedList<Integer> list) {
    // Iterating through the linked list and printing each element
    for (int i = 0; i < list.size(); i++) {
        System.out.print(list.get(i) + " ");
    }
}


//{ Driver Code Starts.
}
// } Driver Code Ends