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
            System.out.println(ob.countSpecials(arr, k));
            System.out.println("~");
            // System.out.println(ans);
        }
    }
}

// } Driver Code Ends

// User function Template for Java
class Solution {
    // Function to count the number of special elements in the array
    static int countSpecials(int arr[], int k) {
        // Get the size of the array
        int n = arr.length;

        // Calculate the floor value, the threshold for frequency of elements
        int floor = n / k;

        // If the array is empty, return 0
        if (n == 0) return 0;

        // Create a HashMap to store the frequency of each element in the array
        HashMap<Integer, Integer> map = new HashMap<>();
        
        // Populate the frequency map
        for (int num : arr) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        // Initialize the specialCount variable to count the special elements
        int specialCount = 0;

        // Iterate over the frequency values in the map
        for (int freq : map.values()) {
            // If the frequency is equal to the floor value, increment specialCount
            if (freq == floor) {
                specialCount++;
            }
        }

        // Return the total count of special elements
        return specialCount;
    }
}
