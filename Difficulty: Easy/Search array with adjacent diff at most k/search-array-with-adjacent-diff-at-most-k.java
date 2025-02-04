//{ Driver Code Starts
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }
            int k = sc.nextInt();
            int x = sc.nextInt();
            Solution sol = new Solution();
            int ans = sol.findStepKeyIndex(arr, k, x);
            System.out.println(ans);
        }
        sc.close();
    }
}

// } Driver Code Ends


// User function Template for Java

class Solution {
    public int findStepKeyIndex(int[] arr, int k, int x) {
        // Function to find the index of the element 'x' in the array 'arr'
        // If the element 'x' is found, return its index, else return -1
        
        // Loop through each element in the array
        for (int i = 0; i < arr.length; i++) {
            // Check if the current element is equal to 'x'
            if (arr[i] == x) {
                return i;  // Return the index of the element
            }
        }
        
        // If the element 'x' is not found, return -1
        return -1;
    }
}
