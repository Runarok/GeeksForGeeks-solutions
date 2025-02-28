//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

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
            ob.strangeSort(arr, k);
            int n = arr.length;
            for (int i = 0; i < n; i++) System.out.print(arr[i] + " ");
            System.out.println();

            System.out.println("~");
        }
    }
}

// } Driver Code Ends

class Solution {
    void strangeSort(int[] arr, int k) {
        // Create a new list to store elements excluding the k-th element
        ArrayList<Integer> ans = new ArrayList<>();
        
        // Add elements to ans excluding the k-th element (index k-1)
        for (int i = 0; i < arr.length; i++) {
            if (i == k - 1) {
                continue;  // Skip the k-th element
            } else {
                ans.add(arr[i]);  // Add the other elements to the list
            }
        }
        
        // Sort the list in ascending order
        Collections.sort(ans);
        
        // Reassign sorted values back to arr, with the k-th element left untouched
        for (int i = 0; i < arr.length; i++) {
            if (i == k - 1) {
                continue;  // Skip the k-th element
            } else if (i < k - 1) {
                arr[i] = ans.get(i);  // Fill the array before the k-th element
            } else {
                arr[i] = ans.get(i - 1);  // Fill the array after the k-th element
            }
        }
    }
}
