//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.lang.*;
import java.util.*;


// } Driver Code Ends

class Solution {

    public ArrayList<Integer> smallestSubsegment(int arr[]) {
        // Map to store frequency of elements
        HashMap<Integer, Integer> frequency = new HashMap<>();
        // Map to store the first occurrence index
        HashMap<Integer, Integer> firstOccurrence = new HashMap<>();
        
        int maxFrequency = 0; // To track the highest frequency encountered
        int minLength = Integer.MAX_VALUE; // To track the smallest length of subsegment with max frequency
        int start = 0; // To track the start index of the result subsegment
        
        // Iterate over the array to analyze elements and their frequencies
        for (int i = 0; i < arr.length; i++) {
            int num = arr[i];
            
            // Update frequency of the current number
            frequency.put(num, frequency.getOrDefault(num, 0) + 1);
            
            // Store the first occurrence of the number
            if (!firstOccurrence.containsKey(num)) {
                firstOccurrence.put(num, i);
            }
            
            // Get the frequency of the current number
            int freq = frequency.get(num);
            
            // Check if this number has the highest frequency or has the same frequency but smaller subsegment length
            if (freq > maxFrequency || (freq == maxFrequency && i - firstOccurrence.get(num) < minLength)) {
                maxFrequency = freq;
                minLength = i - firstOccurrence.get(num); // Update minimum length of subsegment
                start = firstOccurrence.get(num); // Update start index of subsegment
            }
        }
        
        // Create the result subarray using the start index and minimum length
        ArrayList<Integer> result = new ArrayList<>();
        for (int i = start; i <= start + minLength; i++) {
            result.add(arr[i]);
        }
        
        return result; // Return the result subarray
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
            ArrayList<Integer> ans = obj.smallestSubsegment(arr);

            // Output the result
            for (int num : ans) {
                System.out.print(num + " ");
            }
            System.out.println();
            System.out.println("~");
        }
    }
}
// } Driver Code Ends