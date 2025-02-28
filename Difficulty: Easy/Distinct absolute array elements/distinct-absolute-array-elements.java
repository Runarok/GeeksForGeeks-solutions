//{ Driver Code Starts
import java.io.*;
import java.util.*;


// } Driver Code Ends

class Solution {
    // Function to count the number of distinct absolute values in an array
    public int distinctCount(int[] arr) {
        // Create a HashSet to store distinct absolute values
        HashSet<Integer> distinctValues = new HashSet<>();
        
        // Iterate through the array
        for (int i = 0; i < arr.length; i++) {
            // Add the absolute value of the current element to the set
            distinctValues.add(Math.abs(arr[i]));
        }
        
        // Return the size of the set, which represents the count of distinct absolute values
        return distinctValues.size();
    }
}



//{ Driver Code Starts.
public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(reader.readLine().trim());
        Solution solution = new Solution();

        for (int i = 0; i < t; i++) {
            String[] input = reader.readLine().trim().split("\\s+");
            int[] arr = Arrays.stream(input).mapToInt(Integer::parseInt).toArray();
            int result = solution.distinctCount(arr);
            System.out.println(result);
            System.out.println("~");
        }
    }
}

// } Driver Code Ends