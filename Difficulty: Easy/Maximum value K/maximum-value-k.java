//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.lang.*;
import java.util.*;


// } Driver Code Ends

// User function Template for Java
class Solution {
    int findMaximumNum(int[] arr) {
        // Initialize the variable to store the answer
        int ans = 0;
        int n = arr.length;
        
        // Sort the array in ascending order
        Arrays.sort(arr);
        
        // Iterate over the sorted array to find the maximum number satisfying the condition
        for (int i = 0; i < n; i++) {
            // Check if the current element is greater than or equal to the difference between the array length and the current index
            if (arr[i] >= n - i) {
                ans = n - i;  // Update the answer
                break;  // Break the loop as the maximum number is found
            }
        }
        
        // Return the result
        return ans;
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
            int ans = obj.findMaximumNum(arr);
            System.out.println(ans);
            System.out.println("~");
        }
    }
}
// } Driver Code Ends