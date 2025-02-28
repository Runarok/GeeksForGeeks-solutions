//{ Driver Code Starts
// Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.lang.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine().trim()); // Inputting the testcases
        while (t-- > 0) {

            String inputLine[] = br.readLine().trim().split(" ");
            int n = inputLine.length;
            int arr[] = new int[n];

            for (int i = 0; i < n; i++) {
                arr[i] = Integer.parseInt(inputLine[i]);
            }

            Solution obj = new Solution();
            int answer[] = obj.getAnswer(arr);
            StringBuilder output = new StringBuilder();
            for (int i = 0; i < n; i++) output.append(answer[i] + " ");
            System.out.println(output);
            System.out.println("~");
        }
    }
}

// } Driver Code Ends


// User function Template for Java

class Solution {

    public static int[] getAnswer(int arr[]) {
        int[] answer = new int[arr.length];  // Initialize the answer array
        HashMap<Integer, Integer> hm = new HashMap<Integer, Integer>();  // HashMap to store the indices of elements

        // Store the index of each element in the HashMap
        for (int i = 0; i < arr.length; i++) {
            hm.put(arr[i], i);
        }
        
        int size = arr.length;  // The current size of the array
        while (size > 1) {  // Continue while more than one element remains
            int counter = 0;  // Counter to track the new size of the array after the game round
            
            // Perform the pairwise comparison and update the array
            for (int i = 0; i < size; i += 2) {
                if ((i + 1) < size) {  // Check if a pair exists
                    // Increment the answer for both participants in the pair
                    ++answer[hm.get(arr[i])];
                    ++answer[hm.get(arr[i + 1])];
                    // Replace the pair with the larger element
                    arr[counter++] = Math.max(arr[i], arr[i + 1]);
                } else {
                    // If there's no pair, just keep the element
                    arr[counter++] = arr[i];
                }
            }
            size = counter;  // Update the size for the next round
        }
        
        return answer;  // Return the final answer array
    }
}
