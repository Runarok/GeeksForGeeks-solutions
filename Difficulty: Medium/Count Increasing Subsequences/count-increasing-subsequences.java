//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.lang.*;
import java.util.*;


// } Driver Code Ends

// User function Template for Java

class Solution {

    public static int countSub(int arr[]) {
        int mod = 1000000007;
        int n = arr.length;
        
        // Array to store the count of increasing subsequences ending with each digit (1-9)
        int dp[] = new int[10];

        // Iterate through the array
        for (int i = 0; i < n; i++) {
            // Update the count for the current element based on smaller elements
            for (int j = arr[i] - 1; j > 0; j--) {
                dp[arr[i]] = (dp[arr[i]] + dp[j]) % mod;
            }
            // Include the single-element subsequence
            dp[arr[i]] = (dp[arr[i]] + 1) % mod;
        }

        // Sum up all valid subsequences
        int total = 0;
        for (int i = 1; i <= 9; i++) {
            total = (total + dp[i]) % mod;
        }

        return total;
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
            int ans = obj.countSub(arr);
            System.out.println(ans);
            System.out.println("~");
        }
    }
}
// } Driver Code Ends