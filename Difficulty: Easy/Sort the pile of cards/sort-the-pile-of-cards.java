//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.lang.*;
import java.util.*;


// } Driver Code Ends

// User function Template for Java

class Solution {

    // Function to find the minimum operations to reduce the array
    public int minOps(int arr[]) {
        int c = arr.length;  // Initialize the counter with the length of the array
        // Traverse the array from the end to the beginning
        for (int i = arr.length - 1; i >= 0; i--) {
            // Check if the current element is equal to the counter value
            if (arr[i] == c) {
                c--;  // Decrease the counter if the condition is met
            }
        }
        return c;  // Return the final value of the counter
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
            int ans = obj.minOps(arr);
            System.out.println(ans);
            System.out.println("~");
        }
    }
}
// } Driver Code Ends