//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {

    
// } Driver Code Ends

// User function Template for Java
// Function to count distinct elements in the array
static int distinct(int arr[], int n) {
    // Initialize a count variable to track the number of distinct elements
    int count = 0;

    // Create a map to store the frequency of each element
    Map<Integer, Integer> m1 = new HashMap<>();
    
    // Iterate through the array to populate the map with element frequencies
    for (int i = 0; i < arr.length; i++) {
        m1.put(arr[i], m1.getOrDefault(arr[i], 0) + 1);
    }

    // Iterate through the map entries and count elements that appear only once
    for (Map.Entry<Integer, Integer> entry : m1.entrySet()) {
        if (entry.getValue() == 1) {
            count++;
        }
    }

    // Return the total number of distinct elements in the array
    return m1.size();
}



//{ Driver Code Starts.

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) {
            int n = sc.nextInt();
            int[] a = new int[n];
            for (int i = 0; i < n; i++) a[i] = sc.nextInt();

            System.out.println(distinct(a, n));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends