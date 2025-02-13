//{ Driver Code Starts
// Initial Template for Java

// Initial Template for Java

// Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;

class Array {

    // Driver code
    public static void main(String[] args) throws IOException {
        // Taking input using buffered reader
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int testcases = Integer.parseInt(br.readLine());

        // looping through all testcases
        while (testcases-- > 0) {
            int sizeOfArray = Integer.parseInt(br.readLine());
            int arr[] = new int[sizeOfArray];

            String line = br.readLine();
            String[] elements = line.trim().split("\\s+");
            for (int i = 0; i < sizeOfArray; i++) {
                arr[i] = Integer.parseInt(elements[i]);
            }

            Complete obj = new Complete();
            arr = obj.Smallestonleft(arr, sizeOfArray);
            for (int i = 0; i < sizeOfArray; i++) {
                System.out.print(arr[i] + " ");
            }
            System.out.println();
            // System.out.println(re);
        }
    }
}

// } Driver Code Ends


// User function Template for Java
class Complete {

    // Function for finding the maximum element smaller than the current element on its left
    public static int[] Smallestonleft(int arr[], int n) {
        // Create a TreeSet to store the elements in sorted order
        TreeSet<Integer> set = new TreeSet<>();
        
        // Array to store the result
        int res[] = new int[n];
        
        // The first element has no smaller element on its left, so assign -1
        res[0] = -1;
        
        // Add the first element to the TreeSet
        set.add(arr[0]);
        
        // Traverse through the rest of the elements in the array
        for (int i = 1; i < n; i++) {
            // Find the largest element in the set that is smaller than arr[i]
            Integer s = set.lower(arr[i]);
            
            // If such an element exists, assign it; otherwise, assign -1
            res[i] = (s != null) ? s : -1;
            
            // Add the current element to the set for future comparisons
            set.add(arr[i]);
        }
        
        return res;
    }
}
