//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;
import java.lang.*;

class GFG{
    public static void main(String args[])throws IOException{
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0){
            int N = Integer.parseInt(read.readLine());
            String input_line[] = read.readLine().trim().split("\\s+");
            int arr[]= new int[N];
            for(int i = 0; i < N; i++)
                arr[i] = Integer.parseInt(input_line[i]);
            int K = Integer.parseInt(read.readLine());

            Solution ob = new Solution();
            System.out.println(ob.isPossible(N, arr, K));
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to check if it is possible to satisfy the condition
    static int isPossible(int N, int arr[], int K) {
        // Create a HashMap to store the frequency of each element in the array
        HashMap<Integer, Integer> map = new HashMap<>();

        // Loop through the array to populate the frequency map
        for (int ele : arr) {
            // If the element is already in the map, increment its frequency
            if (map.containsKey(ele)) {
                int freq = map.get(ele);
                map.put(ele, freq + 1);
            } else {
                // Otherwise, add the element to the map with a frequency of 1
                map.put(ele, 1);
            }
        }

        // Check if any element appears more than 2*K times
        for (int key : map.keySet()) {
            if (map.get(key) > 2 * K) {
                // If the condition is violated, return 0
                return 0;
            }
        }

        // If no element exceeds the allowed frequency, return 1
        return 1;
    }
}
