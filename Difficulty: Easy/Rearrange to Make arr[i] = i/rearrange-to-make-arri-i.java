//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.lang.*;
import java.util.*;


// } Driver Code Ends

// User function Template for Java
class Solution {
    public static void modifyArray(int[] arr) {
        // Get the length of the array
        int n = arr.length;
        
        // Create a count array to track the presence of values
        int[] count = new int[n];
        
        // Iterate over the input array to mark which values are present
        for (int i = 0; i < n; i++) {
            if (arr[i] != -1) {
                // Mark the index corresponding to the value as present
                count[arr[i]] = 1;
            }
        }
        
        // Update the original array based on the count array
        for (int i = 0; i < n; i++) {
            if (count[i] != 0) {
                // If the value was present, set the array element to the value
                arr[i] = i;
            } else {
                // If the value was not present, set the array element to -1
                arr[i] = -1;
            }
        }
    }
}



//{ Driver Code Starts.

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
            int[] arr = new int[array1.size()];
            int idx = 0;
            for (int i : array1) arr[idx++] = i;

            // Use the class name directly to call the static method
            Solution.modifyArray(arr);

            for (int i : arr) {
                System.out.print(i + " ");
            }

            System.out.println();

            System.out.println("~");
        }
    }
}
// } Driver Code Ends