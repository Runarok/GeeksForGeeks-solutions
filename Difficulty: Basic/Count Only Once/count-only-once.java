//{ Driver Code Starts
// Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;
import java.util.ListIterator;

class GFG {
    public static void main(String[] args) {

        // Taking input using class Scanner
        Scanner sc = new Scanner(System.in);

        // Taking count of Testcases
        int t = sc.nextInt();
        sc.nextLine();
        while (t-- > 0) {
            // taking count of elements
            String temp[] = sc.nextLine().trim().split(" ");
            int n = temp.length;

            // creating a new ArrayList
            int arr[] = new int[n];

            // adding elements to the ArrayList
            for (int i = 0; i < n; i++) {
                arr[i] = Integer.parseInt(temp[i]);
            }

            // calling the coutOnce method
            // and printing the result
            System.out.println(countOnce(arr));
        }
    }

    
// } Driver Code Ends
// User function Template for Java
public static int countOnce(int arr[]) {
    // Create a HashSet to store unique elements
    Set<Integer> uniqueElements = new HashSet<>();

    // Add each element from the array to the Set
    for (int num : arr) {
        uniqueElements.add(num);
    }

    // The size of the Set will be the number of unique elements
    return uniqueElements.size();
}



//{ Driver Code Starts.
}

// } Driver Code Ends