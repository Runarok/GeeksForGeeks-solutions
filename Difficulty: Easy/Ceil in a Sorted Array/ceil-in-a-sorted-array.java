//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.util.*;
import java.util.HashMap;


// } Driver Code Ends

// User function Template for Java
class Solution {
    public int findCeil(int[] arr, int x) {
        // Initialize variables for binary search
        int start = 0, end = arr.length - 1, res = -1;
        
        // Perform binary search to find the ceiling value
        while (start <= end) {
            int mid = start + (end - start) / 2;
            
            // If x is found, return its index (ceil of x is x itself)
            if (arr[mid] == x) {
                res = mid;
                end = mid - 1; // Move towards left to check if there's a smaller ceil
            }
            
            // If arr[mid] is greater than x, it could be a potential ceil
            else if (x < arr[mid]) {
                res = mid;
                end = mid - 1; // Move left to find the closest ceil
            }
            
            // If arr[mid] is smaller than x, move right
            else if (x > arr[mid]) {
                start = mid + 1;
            }
        }
        
        // Return the result: the index of the ceiling value or -1 if not found
        return res;
    }
}




//{ Driver Code Starts.
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

            int x = Integer.parseInt(br.readLine());
            // Create Solution object and find closest sum
            Solution ob = new Solution();
            int ans = ob.findCeil(arr, x);

            System.out.println(ans);

            System.out.println("~"); // New line after printing the results
        }
    }
}

// } Driver Code Ends