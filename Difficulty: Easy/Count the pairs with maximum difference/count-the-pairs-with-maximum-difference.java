//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.lang.*;
import java.util.*;


// } Driver Code Ends

// User function Template for Java
class Solution {
    public static long countPairs(int arr[]) {
        // Sort the array to easily find the occurrences of the minimum and maximum elements
        Arrays.sort(arr);

        int leftCount = 0, rightCount = 0;  // Counters for the occurrences of the minimum and maximum values

        // If there's only one element, no pairs can be formed
        if(arr.length == 1) {
            return 0;
        }

        // Count how many times the minimum element appears (at the start of the sorted array)
        for(int i = 0; i < arr.length; i++) {
            if(arr[i] == arr[0]) {
                leftCount += 1;  // Increment the counter for the minimum element
            } else {
                break;  // Break the loop when we reach a different element
            }
        }

        // Count how many times the maximum element appears (at the end of the sorted array)
        for(int i = arr.length - 1; i >= 0; i--) {
            if(arr[i] == arr[arr.length - 1]) {
                rightCount += 1;  // Increment the counter for the maximum element
            } else {
                break;  // Break the loop when we reach a different element
            }
        }

        // Return the product of the counts of the minimum and maximum elements
        return leftCount * rightCount;
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
            long ans = obj.countPairs(arr);
            System.out.println(ans);
            System.out.println("~");
        }
    }
}
// } Driver Code Ends