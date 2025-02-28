//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.lang.*;
import java.util.*;


// } Driver Code Ends

// User function Template for Java

class Solution {

    // Function to find the maximum sum of a pair in the array
    public static int Pair_minimum(int arr[]) {
        // Sort the array to easily access the smallest and largest elements
        Arrays.sort(arr);
        
        // Initialize two pointers, one at the beginning (l) and one at the end (r)
        int l = 0, r = arr.length - 1, maxSum = 0;
        
        // Iterate while l is less than r (to ensure we are considering pairs)
        while (l < r) {
            // If the sum of the current pair is greater than the current maxSum, update maxSum
            if (arr[l] + arr[r] > maxSum)
                maxSum = arr[l] + arr[r];
            
            // Move the left pointer to the right and the right pointer to the left
            l++;
            r--;
        }
        
        // Return the maximum sum found
        return maxSum;
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
            int ans = obj.Pair_minimum(arr);
            System.out.println(ans);
        }
    }
}
// } Driver Code Ends