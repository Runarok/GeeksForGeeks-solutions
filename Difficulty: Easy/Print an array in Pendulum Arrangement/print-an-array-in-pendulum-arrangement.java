//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.lang.*;
import java.util.*;


// } Driver Code Ends

class Solution {
    public int[] pendulumArrangement(int arr[]) {
        // Sort the array first
        Arrays.sort(arr);
        
        // Create a new array to hold the pendulum arrangement
        int[] result = new int[arr.length];
        
        // Initialize two pointers: one for the left side and one for the right side
        int left = (arr.length - 1) / 2;
        int right = left;
        
        // Place the smallest element in the center
        result[left] = arr[0];
        
        // Now, iterate through the sorted array starting from index 1
        int i = 1;
        while (i < arr.length) {
            // Place elements alternately to the right and left
            if (i % 2 == 1) {
                right++;  // Place on the right side
                result[right] = arr[i];
            } else {
                left--;   // Place on the left side
                result[left] = arr[i];
            }
            i++;
        }
        
        return result;
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
            int answer[] = obj.pendulumArrangement(arr);
            int sz = answer.length;

            StringBuilder output = new StringBuilder();
            for (int i = 0; i < sz; i++) output.append(answer[i] + " ");
            System.out.println(output);
        
System.out.println("~");
}
    }
}
// } Driver Code Ends