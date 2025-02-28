//{ Driver Code Starts
// Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) {

        // Creating an object of class Scanner
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt(); // taking all the testcases
        sc.nextLine();
        while (t-- > 0) {
            ArrayList<Integer> arr =
                new ArrayList<>(); // Declaring and Intializing an ArrayList
            String temp[] = sc.nextLine().trim().split(" ");
            int n = temp.length;
            for (int i = 0; i < n; i++) {
                arr.add(Integer.parseInt(temp[i]));
            }
            Iterator iterator = arr.iterator(); // creating an iterator of ArrayList arr

            // calling the iterateArrayList method and passing the iteraror
            iterateArrayList(iterator);

            System.out.println();
        }
    }

    
// } Driver Code Ends

// User function Template for Java

public static void iterateArrayList(Iterator iterator) {
    // Iterate through the ArrayList using the iterator
    while (iterator.hasNext()) {
        // Print each element followed by a space, without a new line
        System.out.print(iterator.next() + " ");
    }
}


//{ Driver Code Starts.
}
// } Driver Code Ends