//{ Driver Code Starts
// Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) {

        // using Scanner class to take input
        Scanner sc = new Scanner(System.in);

        // taking total number of testcases
        int t = sc.nextInt();
        sc.nextLine();
        while (t-- > 0) {
            // taking total number of Strings
            //  int n=sc.nextInt();

            // Declaring and Initializing an array
            // of type String and size n
            String[] arr = sc.nextLine().trim().split(" ");

            // adding elements to the array
            //  for(int i=0;i<n;i++)
            //  arr[i]=sc.next();

            // calling sorByComparator method
            // and passing the String array
            sortByComparator(arr);

            // printing the sorted Strings
            for (String s : arr) System.out.print(s + " ");

            System.out.println();
        }
    }

    
// } Driver Code Ends

// User function Template for Java

public static void sortByComparator(String[] arr) {
    // Sorting the array using a method reference for case-insensitive ordering
    Arrays.sort(arr, String::compareToIgnoreCase);
}

//{ Driver Code Starts.
}
// } Driver Code Ends