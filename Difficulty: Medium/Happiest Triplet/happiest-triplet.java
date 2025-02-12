//{ Driver Code Starts
import java.util.*;


// } Driver Code Ends
// User function Template for Java

class Solution {
    // Function to find the triplet with the smallest difference
    int[] smallestDifferenceTriplet(int arr1[], int arr2[], int arr3[]) {
        // Sort the arrays to ensure we can traverse them efficiently
        Arrays.sort(arr1);
        Arrays.sort(arr2);
        Arrays.sort(arr3);
        
        int n = arr1.length; // Get the length of the arrays
        int i = 0, j = 0, k = 0; // Initialize the pointers for each array
        int diff = 2147483647; // Initialize the difference with a large value
        
        // Variables to store the resulting triplet values
        int res_min = 0, res_max = 0, res_mid = 0;
        
        // Loop to find the triplet with the smallest difference
        while (i < n && j < n && k < n) {
            // Calculate the sum and the max/min values among the triplet
            int sum = arr1[i] + arr2[j] + arr3[k];
            int max = Math.max(arr1[i], Math.max(arr2[j], arr3[k]));
            int min = Math.min(arr1[i], Math.min(arr2[j], arr3[k]));
            
            // Move the pointer of the array that has the minimum value
            if (min == arr1[i]) i++;
            else if (min == arr2[j]) j++;
            else k++;
            
            // If we find a smaller difference, update the result
            if (diff > (max - min)) {
                diff = max - min;
                res_max = max;
                res_mid = sum - (max + min); // The middle value is calculated by subtracting max and min from the sum
                res_min = min;
            }
        }
        
        // Prepare the result array and return it
        int ans[] = new int[3];
        ans[0] = res_max; ans[1] = res_mid; ans[2] = res_min;
        return ans;
    }
}

//{ Driver Code Starts.
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = Integer.parseInt(sc.nextLine());
        while (t-- > 0) {
            String line = sc.nextLine();
            String[] arr1Str = line.split(" ");
            int[] arr1 = new int[arr1Str.length];
            for (int i = 0; i < arr1Str.length; i++) {
                arr1[i] = Integer.parseInt(arr1Str[i]);
            }

            line = sc.nextLine();
            String[] arr2Str = line.split(" ");
            int[] arr2 = new int[arr2Str.length];
            for (int i = 0; i < arr2Str.length; i++) {
                arr2[i] = Integer.parseInt(arr2Str[i]);
            }
            line = sc.nextLine();
            String[] arr3Str = line.split(" ");
            int[] arr3 = new int[arr3Str.length];
            for (int i = 0; i < arr3Str.length; i++) {
                arr3[i] = Integer.parseInt(arr3Str[i]);
            }

            Solution ob = new Solution();
            int[] ans = ob.smallestDifferenceTriplet(arr1, arr2, arr3);
            System.out.println(ans[0] + " " + ans[1] + " " + ans[2]);
            System.out.println("~");
        }
    }
}
// } Driver Code Ends