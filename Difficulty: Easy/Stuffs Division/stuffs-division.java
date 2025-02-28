//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.lang.*;
import java.util.*;


// } Driver Code Ends

class Solution {

    public boolean possible(int[] arr) {
        // Calculate the sum of the required goodies for fair distribution
        long sumRequired = 0;
        for (int i = 1; i <= arr.length; i++) {
            sumRequired += i; // The student at index i (1-based) should receive exactly i goodies
        }
        
        // Calculate the sum of current goodies
        long sumCurrent = 0;
        for (int i = 0; i < arr.length; i++) {
            sumCurrent += arr[i];
        }
        
        // If the sum of current goodies matches the required sum, redistribution is possible
        return sumCurrent == sumRequired;
    }
}



//{ Driver Code Starts.

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        while (t-- > 0) {
            // int k = Integer.parseInt(br.readLine());
            String line = br.readLine();
            String[] tokens = line.split(" ");

            // Create an ArrayList to store the integers
            ArrayList<Integer> array = new ArrayList<>();

            // Parse the tokens into integers and add to the array
            for (String token : tokens) {
                array.add(Integer.parseInt(token));
            }

            int[] arr = new int[array.size()];
            int idx = 0;
            for (int i : array) arr[idx++] = i;
            Solution obj = new Solution();
            System.out.println(obj.possible(arr) ? "true" : "false");
            System.out.println("~");
        }
    }
}
// } Driver Code Ends