//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.lang.*;
import java.util.*;


// } Driver Code Ends

// User function Template for Java

class Solution {

    public static int findRequiredSoldiers(int arr[]) {
        // Initialize min and max to extreme values
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;

        // Find the minimum and maximum elements in the array
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i]; // Update minimum value
            }
            if (arr[i] > max) {
                max = arr[i]; // Update maximum value
            }
        }

        // Initialize a counter for soldiers to be considered
        int count = 0;

        // HashMap to store the frequency of elements that are not min or max
        Map<Integer, Integer> m1 = new HashMap<>();

        // Iterate over the array to count elements that are neither min nor max
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] != max && arr[i] != min) {
                m1.put(arr[i], m1.getOrDefault(arr[i], 0) + 1); // Increment the count of the element
                count++; // Increment the total count of required soldiers
            }
        }

        // Return the count of soldiers required
        return count;
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
            int ans = obj.findRequiredSoldiers(arr);
            System.out.println(ans);
            System.out.println("~");
        }
    }
}
// } Driver Code Ends