//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.lang.*;
import java.math.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        while (T-- > 0) {
            int n = sc.nextInt();
            int a[] = new int[n];
            for (int i = 0; i < n; i++) {
                a[i] = sc.nextInt();
            }
            Solution obj = new Solution();
            boolean ans = obj.isBSTTraversal(a);
            System.out.println(ans ? "True" : "False");
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to check if the given array represents an in-order traversal of a BST
    static boolean isBSTTraversal(int[] arr) {
        int arrayLength = arr.length;
        
        // Iterate through the array to check if each element is smaller than the next
        for (int currentIndex = 0; currentIndex < arrayLength - 1; currentIndex++) {
            // If any element is greater than or equal to the next element, it's not a BST traversal
            if (arr[currentIndex] >= arr[currentIndex + 1]) {
                return false;
            }
        }
        
        // Return true if the array elements are in strictly increasing order
        return true;
    }
}
