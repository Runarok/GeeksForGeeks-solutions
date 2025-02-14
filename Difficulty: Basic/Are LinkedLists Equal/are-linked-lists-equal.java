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
        int t = sc.nextInt();
        sc.nextLine();
        while (t-- > 0) {
            // taking count of elements in
            // the first array
            String temp[] = sc.nextLine().trim().split(" ");
            int n1 = temp.length;

            // creating the array-1 of length n1
            LinkedList<Integer> ll1 = new LinkedList<>();

            // adding elements to array-1
            for (int i = 0; i < n1; i++) ll1.add(Integer.parseInt(temp[i]));

            // taking count of elements in
            // second array
            temp = sc.nextLine().trim().split(" ");
            int n2 = temp.length;

            // creating the array-2 of length n2
            LinkedList<Integer> ll2 = new LinkedList<>();

            // adding elements to array-2
            for (int i = 0; i < n2; i++) ll2.add(Integer.parseInt(temp[i]));

            // calling method areEqual() and passing
            // LinkedList-1 and LinkedList-2 as
            // arguments and printing the result
            System.out.println(areEqual(ll1, ll2));
        }
    }

    
// } Driver Code Ends

public static boolean areEqual(LinkedList<Integer> ll1, LinkedList<Integer> ll2) {
    // Check if the sizes of both linked lists are equal
    if (ll1.size() != ll2.size()) {
        return false;
    }

    // Compare each element of the linked lists
    for (int i = 0; i < ll1.size(); i++) {
        if (!ll1.get(i).equals(ll2.get(i))) {
            return false;
        }
    }

    // If all elements are equal
    return true;
}



//{ Driver Code Starts.
}

// } Driver Code Ends