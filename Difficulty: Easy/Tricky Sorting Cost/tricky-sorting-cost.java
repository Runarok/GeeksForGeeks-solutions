//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;
import java.lang.*;

class GFG{
    public static void main(String args[])throws IOException{
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while(t-- > 0){
            int N = Integer.parseInt(in.readLine());
            String a[] = in.readLine().trim().split("\\s+");
            int arr[] = new int[N];
            for(int i = 0;i < N;i++)
                arr[i] = Integer.parseInt(a[i]);
            
            Solution ob = new Solution();
            System.out.println(ob.sortingCost(N, arr));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to calculate the minimum cost of sorting the array
    static int sortingCost(int N, int arr[]) {
        // HashMap to store the frequency of consecutive numbers
        HashMap<Integer, Integer> map = new HashMap<>();
        
        // Variable to keep track of the maximum length of the sequence
        int ans = 0;
        
        // Iterate through the array to compute the length of the longest subsequence
        for (int i = 0; i < arr.length; i++) {
            // Get the length of the subsequence ending with arr[i] - 1 (i.e., the previous number in sequence)
            int len = map.getOrDefault(arr[i] - 1, 0);
            
            // Update the frequency of the current number in the map
            map.put(arr[i], len + 1);
            
            // Update the answer with the maximum subsequence length found so far
            ans = Math.max(ans, len + 1);
        }
        
        // The minimum cost is the difference between the length of the array and the longest subsequence
        return arr.length - ans;
    }
}
