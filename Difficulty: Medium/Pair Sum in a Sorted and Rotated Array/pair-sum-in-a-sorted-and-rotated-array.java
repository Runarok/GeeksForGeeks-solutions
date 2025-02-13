//{ Driver Code Starts
import java.io.*;
import java.lang.*;
import java.util.*;

class gfg {

    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());

        while (t-- > 0) {
            String inputLine[] = read.readLine().trim().split(" ");
            int n = inputLine.length;
            int arr[] = new int[n];

            for (int i = 0; i < n; i++) {
                arr[i] = Integer.parseInt(inputLine[i]);
            }
            int target = Integer.parseInt(read.readLine());

            Solution obj = new Solution();

            System.out.println(obj.pairInSortedRotated(arr, target));
        }
    }
}
// } Driver Code Ends

class Solution {
    static boolean pairInSortedRotated(int arr[], int target) {
        // HashMap to store array elements and their indices
        HashMap<Integer, Integer> map = new HashMap<>();
        
        // Iterate through the array to find a pair that sums to the target
        for (int i = 0; i < arr.length; i++) {
            int complement = target - arr[i]; // Find the required complement
            
            // If complement is already in the map, pair exists
            if (map.containsKey(complement)) {
                return true;
            }
            
            // Store the current element in the map
            map.put(arr[i], i);
        }
        
        // Return false if no such pair is found
        return false;
    }
}
