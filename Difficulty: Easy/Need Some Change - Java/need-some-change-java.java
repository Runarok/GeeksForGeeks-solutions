//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.lang.*;
import java.util.*;

class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());

        while (t-- > 0) {

            ArrayList<Integer> array1 = new ArrayList<Integer>();
            String line = read.readLine();
            String[] tokens = line.split(" ");
            for (String token : tokens) {
                array1.add(Integer.parseInt(token));
            }
            // ArrayList<Integer> v = new ArrayList<Integer>();
            int[] arr = new int[array1.size()];
            int idx = 0;
            for (int i : array1) arr[idx++] = i;

            new Solution().swapElements(arr);

            for (int i = 0; i < arr.length; i++) System.out.print(arr[i] + " ");

            System.out.println();
            System.out.println("~");
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to swap elements at even indices with the elements two places ahead
    static void swapElements(int[] arr) {
        int n = arr.length;
        
        // Iterate through the array and swap elements at index i and i+2
        for (int i = 0; i < n - 2; i++) {
            // Temporary variable to hold the value at arr[i]
            int temp = arr[i];
            
            // Swap the elements at arr[i] and arr[i+2]
            arr[i] = arr[i + 2];
            arr[i + 2] = temp;
        }
    }
}
