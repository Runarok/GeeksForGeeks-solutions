//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.lang.*;
import java.util.*;


// } Driver Code Ends

// User function Template for Java

class Solution {

    // Function to calculate the number of triangles that can be formed
    public static int noOfTriangles(int arr[]) {
        int n = arr.length;  // Length of the input array
        Arrays.sort(arr);  // Sort the array to simplify the triangle condition
        int count = 0;  // Variable to count valid triangles

        // Iterate through the array to find valid triangles
        for (int i = 0; i < n - 2; i++) {
            int k = i + 2;  // Initialize k to the element after j and i
            for (int j = i + 1; j < n - 1; j++) {
                // Use a while loop to find the valid range for k
                while (k < n && arr[i] + arr[j] > arr[k]) {
                    k++;  // Move k to the right to check for valid triangle condition
                }
                // Add the number of valid k values for the current i and j
                count += (k - j - 1);
            }
        }
        return count;  // Return the total number of valid triangles
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
            int ans = obj.noOfTriangles(arr);
            System.out.println(ans);
            System.out.println("~");
        }
    }
}
// } Driver Code Ends