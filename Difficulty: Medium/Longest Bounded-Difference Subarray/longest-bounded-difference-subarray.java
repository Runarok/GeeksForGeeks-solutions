//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.util.*;
import java.util.HashMap;


// } Driver Code Ends

class Solution {

    public ArrayList<Integer> longestSubarray(int[] arr, int x) {
        // Deques to store the indices of the minimum and maximum elements in the window
        Deque<Integer> minQ = new LinkedList<>();
        Deque<Integer> maxQ = new LinkedList<>();
        
        int start = 0;  // Start of the window
        int end = 0;    // End of the window
        int resS = 0;   // Result start index
        int resE = 0;   // Result end index
        int n = arr.length;  // Length of the array
        
        // Loop to expand the window by increasing end pointer
        while (end < n) {
            // Maintain the deque for minimum values
            while (!minQ.isEmpty() && arr[minQ.peekLast()] > arr[end]) {
                minQ.pollLast();
            }
            
            // Maintain the deque for maximum values
            while (!maxQ.isEmpty() && arr[maxQ.peekLast()] < arr[end]) {
                maxQ.pollLast();
            }
            
            // Add current element's index to both deques
            minQ.addLast(end);
            maxQ.addLast(end);
            
            // Shrink the window from the left if the difference between max and min exceeds x
            while (arr[maxQ.peekFirst()] - arr[minQ.peekFirst()] > x) {
                if (start == minQ.peekFirst())
                    minQ.pollFirst();
                if (start == maxQ.peekFirst())
                    maxQ.pollFirst();
                start++;  // Increment the start to reduce the window size
            }
            
            // Update the result if the current window is larger than the previous one
            if (end - start > resE - resS) {
                resE = end;
                resS = start;
            }
            
            end++;  // Expand the window by moving the end pointer
        }
        
        // Create an ArrayList to store the longest subarray
        ArrayList<Integer> al = new ArrayList<>();
        for (int i = resS; i <= resE; i++) {
            al.add(arr[i]);
        }
        
        return al;  // Return the longest subarray
    }
}



//{ Driver Code Starts.
public class Main {

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        while (t-- > 0) {

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

            int k = Integer.parseInt(br.readLine());
            // Create Solution object and find closest sum
            Solution ob = new Solution();
            ArrayList<Integer> ans = ob.longestSubarray(arr, k);

            // Print the result as a space-separated string
            for (int num : ans) {
                System.out.print(num + " ");
            }
            System.out.println(); // New line after printing the results
            System.out.println("~");
        }
    }
}

// } Driver Code Ends